import { useEffect, useState } from "react"
import { editaisAbertos } from "@/app/data"

export type EditalType = {
    id: string,
    orgao: string,
    cargo: string
}

export default function useEditais(){
    const [editais,setEditais] = useState<EditalType[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function buscarEditais(){
            setLoading(true)
            setInterval(()=>{})
            setEditais(editaisAbertos)
            setLoading(false)
        }
        buscarEditais()

    },[])


    return {editais,loading}
}