
const localenv =   "http://localhost:8000"
const prodenv =  "https://prod.myapp.tld"

//const convertapilocal = "http://localhost:8032/convert"
//const convertapilocal = "http://localhost:52449/api/v1/images/"





const apiHost = process.env.REACT_APP_STAGE === 'prod' 
? prodenv
: localenv;

 
 

const apiRoot = `${apiHost}/api/v1`
// const apiRoot =localenv;


//webRoot = localenv
export const API_ENDPOINTS = {
    root: apiRoot,
    projects: `${apiRoot}/projects`,
    users: `${apiRoot}/users/`,
    me: `${apiRoot}/users/me`,   
}



