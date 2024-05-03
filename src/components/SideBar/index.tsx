"use client"
import Link from "next/link";
import { useState } from "react";
import "./style.css"

export const SideBar = ()=>{

    const [close, setClose] = useState("close");

    const handleOnClose = ()=>{
        if(close == "close") setClose("") 
            else setClose("close");
    }

    return(
        <div className = {`sidebar ${close}`}>
        <button className="open-sidebar" style={{marginLeft: "1rem", fontSize: "20px"}} onClick={handleOnClose} >
        ☰
        </button>
        <ul className="side-menu">
            <li className="active"><Link href={"#"} ><span className="icon-sidebar" >👤</span><span className="descript-text" >Home</span></Link></li>
            <li className=" "><Link href={"#"} ><span className="icon-sidebar" >⚙️</span><span className="descript-text" >Home</span></Link></li>
            <li className=" "><Link href={"#"} ><span className="icon-sidebar" >📧</span><span className="descript-text" >Home</span></Link></li>
            <li className=" "><Link href={"#"} ><span className="icon-sidebar" >🔗</span><span className="descript-text" >Home</span></Link></li>
        </ul>

    </div>
    )
}

export default SideBar;