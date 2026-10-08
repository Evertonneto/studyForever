"use client"

import { useContext } from "react"
import { UserContext } from "@/context/UserContext"

type Props = {text: string}

export default function Button({text}: Props){
    const user = useContext(UserContext) as {userName?: string} | null

    return <button>{text} - {user?.userName ?? "Nenhum"}</button>
}