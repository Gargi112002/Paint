import { useState } from "react";
import NoteContext from  "./noteContext";

const NoteState = (props)=>{
    const state ={
        "fullname": "harsh koria",
        "email": "harshk@cdac.in", 
        "role": "DOCTOR"
    }
    const [auth,setAuth]  = useState({})
   return(
        <NoteContext.Provider value={{state, auth, setAuth}}>
           {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;