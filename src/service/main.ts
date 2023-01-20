
import { inspect } from "@xstate/inspect";

import {mainMachine} from './machines/mainmachine'
import { interpret  } from "xstate";





  
inspect({
  url: "https://statecharts.io/inspect",
  iframe: false
});

  
  const service = interpret( mainMachine, {devTools:true,  execute: true }  )

  // service.onTransition((state) => {
  //   // execute actions on next animation frame
  //   // instead of immediately
  //   requestAnimationFrame(() => service.execute(state));
  // });

service.start()
export { service }

 