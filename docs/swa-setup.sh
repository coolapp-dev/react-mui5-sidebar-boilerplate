SUBSCRIPTION="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
RESOURCE_GROUP="aadb2c-rg-$(openssl rand -hex 5)"
LOCATION="centralus"
SWA_NAME="sample-app"


 az group create --name ${RESOURCE_GROUP} --location "${LOCATION}" --subscription ${SUBSCRIPTION} --verbose
 az staticwebapp create \
    --name $SWA_NAME \
    --resource-group $RESOURCE_GROUP \
    --location $LOCATION \
    --subscription $SUBSCRIPTION \
    --app-location "/"  \
    --output-location "build"  



HOSTNAME="my.sampleapp.com"
az staticwebapp hostname set --name $SWA_NAME  --subscription $SUBSCRIPTION  --resource-group $RESOURCE_GROUP  --hostname $HOSTNAME   --validation-method cname-delegation



SWA_API_TOKEN=`az staticwebapp secrets list --name $SWA_NAME  --subscription $SUBSCRIPTION  --resource-group $RESOURCE_GROUP  -o table  --query properties.apiKey | tail -1`



az staticwebapp appsettings list --name $SWA_NAME  --subscription $SUBSCRIPTION  --resource-group $RESOURCE_GROUP

az staticwebapp appsettings set --name $SWA_NAME  --subscription $SUBSCRIPTION  --resource-group $RESOURCE_GROUP  \
      --setting-names AADB2C_PROVIDER_CLIENT_ID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX \
                      AADB2C_PROVIDER_CLIENT_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

swa start build   --verbose
 

docker run -it --rm     \
        -v $(pwd):/working_dir  \
        -e INPUT_APP_LOCATION="/working_dir/build" \
        mcr.microsoft.com/appsvc/staticappsclient:stable   \
             ./bin/staticsites/StaticSitesClient upload \
                --skipAppBuild \
                --apiToken=$SWA_API_TOKEN \
                --verbose
  
