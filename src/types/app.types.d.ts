type SxPropsMap = Record<string,SxProps> 


type ActorRefFromInterpreter<
T extends Interpreter<any, any>
> = T extends Interpreter<infer TC, any, infer TE>
? ActorRef<TE, State<TC, TE>>
: never;

 


