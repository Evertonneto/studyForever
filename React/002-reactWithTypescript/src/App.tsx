import './App.css'
import { User,Countries } from './components/Person/User'

function App() {

  // let name: string = ""
  // let age: number = 10
  // let arrayNumbers: number[];
  // let anyType: any = {nome:"Ton"}

  return (
    <>
      <User name="Ton" age={22} isMarried={false} country={Countries.Spain}/>
    </>
  )
}

export default App
