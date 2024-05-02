"use client"
import Link from "next/link";
import { useState } from "react";

export const SideBar = ()=>{

    const [close, setClose] = useState("close");

    const handleOnClose = ()=>{
        if(close == "close") setClose("") 
            else setClose("close");
    }

    return(
        <div className = {`sidebar ${close}`}>
        <a href="#" className="logo">
            <div className="logo-name">co+</div>
        </a>
        <button style={{marginLeft: "1rem", fontSize: "20px"}} onClick={handleOnClose} >
        ☰
        </button>
        <ul className="side-menu">
            <li className="active"><Link href={"#"} ><span>👤</span></Link></li>
            <li className=" "><Link href={"#"} ><span>⚙️</span></Link></li>
            <li className=" "><Link href={"#"} ><span>📧</span></Link></li>
            <li className=" "><Link href={"#"} ><span>🔗</span></Link></li>
        </ul>

    </div>
    )
}

export default SideBar;