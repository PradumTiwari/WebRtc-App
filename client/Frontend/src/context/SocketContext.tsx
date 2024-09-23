import { createContext } from "react";
import SocketIoClient from "socket.io-client";



const WS_Server="http://localhost:5500";

const SocketContext=createContext<any|null>(null);

const socket=SocketIoClient(WS_Server);

interface Props{
    children:React.ReactNode
}
//Children refers to the Content Passed between the Opening and Closing tags
export const SocketProvider:React.FC<Props> =({children})=>{
 
    return(
        <SocketContext.Provider value={{socket}}>
         {children}
        </SocketContext.Provider>
    )
}

