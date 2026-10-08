interface conteudoProps{
  text: string,
  children: React.ReactNode,
  ativo: boolean,
  qtd: number
}

export default function Conteudo({text,children,ativo,qtd}: conteudoProps){
  if(!ativo){
    return <></>
  }

  return (
    <>
      <p>{text}</p>
      <p>{qtd > 10?"Alto":"Baixo"}</p>
      {children}
    </>
  )
}