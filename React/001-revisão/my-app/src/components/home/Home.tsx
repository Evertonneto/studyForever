"use client"

import { editaisAbertos } from '@/app/data'
import styles from '@/app/page.module.css'
import { useState, useEffect, useRef } from 'react'
import Cabecalho from '../cabecalho/Cabecalho'
import Conteudo from '../conteudo/Conteudo'
import CounterPeople from '../counterPeople/CounterPeople'
import useEditais from '@/hooks/useEditais'
import { EditalType } from '@/hooks/useEditais'





export default function Home(){

  const {editais,loading} = useEditais()
  const [sequencial,setSequencial] = useState([0])
  const inputRef = useRef<HTMLInputElement>(null)

  function addToSequencial(){
    setSequencial([...sequencial,sequencial.length])
  }

  useEffect(()=>{
    let timer = setInterval(()=>{
        console.log('Chamada a cada 10s')
    },10000)

    return () => clearInterval(timer)
  },[])

  return (
    <>
    <Cabecalho title={"Título 1"} page={11}/>
    <h1>Teste</h1>
    <Conteudo text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ratione." ativo={true} qtd={10}>
      {editaisAbertos.map((edital)=>{
        return(
          <div key={edital.id}>
            <h2>{edital.cargo}</h2>
            <h4>{edital.orgao}</h4>
          </div>
        )
      })}
    </Conteudo>
    <div>{sequencial.map((value)=>{
        return (
            <p key={value}>{value}</p>
        )
    })}</div>
    <button onClick={addToSequencial} style={{display:'inline'}}>Add to sequencial</button>
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={()=>{
        inputRef.current?.focus()
      }}>Focus on Input</button>
    </div>

    <CounterPeople/>
    <ul>
      {editais?.map((value)=>{
        return(
          <li key={value.id}>{value.cargo} - {value.orgao}</li>
        )
      }
      )}

    </ul>

    </>
  );
}

