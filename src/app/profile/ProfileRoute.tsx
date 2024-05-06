"use client"

import { useEffect } from "react";
import { usePathname } from 'next/navigation'

export const ProfileRoute = () => {
  const pathname = usePathname()

  useEffect(()=>{
    console.log(pathname);
    
  },[])

  return(
    <div className="">
      hola
    </div>
  )
}

export default ProfileRoute;