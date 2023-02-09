import React, { useState } from "react";
import './App.css'
import Popup from "./Popup";
export default function Messages({ item }) {
  const[msgid,setmsgid]=useState("")
  return (
    <div>
      <div>id:{item.id} </div>
      <div>{item.subject}</div>
      <div className="msg_body">body :<div dangerouslySetInnerHTML={{__html:item.body}}/></div>
      <button onClick={()=>setmsgid(item.id)} className="needinfobtn">NEED MORE INFORMATION</button>
      {
        msgid && <Popup id={msgid}/>
      }
      <hr />
    </div>
  );
}

