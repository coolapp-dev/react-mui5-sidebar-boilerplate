import { createMachine, assign, sendParent , send, ActorRefFrom} from "xstate";

type MachineContext  = { 
    token: string|undefined,
    getTokenFn:()=>Promise<string>
};

 
type MachineState =
  | { value: "anonimous"; context:MachineContext }
 


type MachineEvent =
 | {
  type: 'EVENTS.AUTH.AUTHENTIFICATED',
  tokenFn: ()=>Promise<string>
} | {
  type: 'EVENTS.AUTH.SET_TOKEN',
  token: string
} 
| {
  type: 'EVENTS.AUTH.LOGOUT',
} 


function getTokenFnDefault(): Promise<string> {
  return Promise.reject("Non imp[lemented");
}



export const mainMachine = createMachine<
  MachineContext, 
  MachineEvent,
  MachineState
>({
    initial: "anonimous",
    id:"mainmachine",
    context: {
      token : undefined,
      getTokenFn:getTokenFnDefault
    },

    on: {
      // when this event happens...
    },
    states: {
      anonimous: {
        entry: [
           (_,e)=>console.log("mainmachine.anonimous entry", e),
         
        ],
        exit: (_,e)=>console.log("mainmachine.anonimous exit", e),

      }
    }
  },{
    actions:{
 
    },
  });


  export type MainMachineActorType = ActorRefFrom<typeof mainMachine>