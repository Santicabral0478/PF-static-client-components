"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import "./style.css"
import { usePathname } from 'next/navigation'

export const SideBar = ()=>{

    const [close, setClose] = useState("close");
    const [closeBur, setCloseBur] = useState("");
    const [closeBurA, setCloseBurA] = useState("");
    const pathname = usePathname();

    const handleOnClose = ()=>{
        if(close == "close" && closeBur == "" && closeBurA == "") {
            setClose(""); 
            setCloseBur("active-bur");
            setCloseBurA("active-bur-a");
        } else {    
            setClose("close");
            setCloseBur("");
            setCloseBurA("")
        } 
    }


    return(
        <div className = {`sidebar ${close}`}>
            <button className="open-sidebar" style={{marginLeft: "1rem", fontSize: "20px"}}>
                <label className="hamburger">
                    <input type="checkbox" onClick={handleOnClose}/>
                    <svg viewBox="0 0 32 32" className={closeBur}>
                        <path className={`line line-top-bottom ${closeBurA}`} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                        <path className="line" d="M7 16 27 16"></path>
                    </svg>
                </label>
            </button>

        <ul className="side-menu">
            <li className={pathname == "/" ? "active" : ""}><Link href={"/"} className="link-icon-span"><span className="icon-sidebar" ><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></span><span className="descript-text" >Home</span></Link></li>
            <li className={pathname == "/coworks" ? "active" : ""}><Link href={"/coworks"} className="link-icon-span"><span className="icon-sidebar" ><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="butt" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span><span className="descript-text" >Search</span></Link></li>
            
            <div className="space-responsive-add"></div>
            
            <li className={pathname == "/profile" ? "active" : ""}><Link href={"/profile"} className="link-icon-span"><span className="icon-sidebar" ><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="butt" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span><span className="descript-text" >Profile</span></Link></li>
            <li className={pathname == "/settings" ? "active" : ""}><Link href={"/settings"} className="link-icon-span"><span className="icon-sidebar" ><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="butt" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></span><span className="descript-text" >Settings</span></Link></li>
        </ul>
        <div className="add-container">
                <button title="Add New" className="group cursor-pointer outline-none hover:rotate-90 duration-300 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45px"
                    height="45px"
                    viewBox="0 0 24 24"
                    className="stroke-green-400 fill-none group-hover:fill-green-800 group-active:stroke-green-200 group-active:fill-green-600 group-active:duration-0 duration-300 bg-gray-100 rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
                    style={{boxShadow: "box-shadow: 0px 0px 14px -3px rgba(109, 255, 107, 0.75);"}}
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke-width="1.5"
                    ></path>
                    <path d="M8 12H16" stroke-width="1"></path>
                    <path d="M12 16V8" stroke-width="1"></path>
                  </svg>
                </button>
                <span className="descript-add">Add</span>
            </div>

    </div>
    )
}

export default SideBar;