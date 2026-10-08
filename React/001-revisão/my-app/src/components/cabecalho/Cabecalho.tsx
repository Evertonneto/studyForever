import Button from '../button/Button'
import styles from './cabecalho.module.css'

interface cabecalhoProps {
  title: string,
  page: number
}

export default function Cabecalho({title,page}: cabecalhoProps){
  return (
    <nav>
      <h1 className={styles.title}>{title}</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <p>{page > 10 && "9++"}</p>
      <Button text="Enviar para"/>
    </nav>
  )
}