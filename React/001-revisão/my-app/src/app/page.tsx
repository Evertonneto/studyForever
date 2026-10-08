"use client"

import Home from "@/components/home/Home";
import { UserContext, type User } from "@/context/UserContext";
import { useState } from "react";


export default function Page(){
  const [user] = useState<User>({
    userName:"Everton",
    age:22,
    role:'Front-end Developer'
  })

  return(
    <UserContext.Provider value={user}>
      <Home/>
    </UserContext.Provider>
  )
}