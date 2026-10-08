import { useReducer, useState } from "react";

type Action =
    | {type: "ADD", payload: string}
    | {type: "REMOVE"}


interface State {
    people: string[]
}


function addPeople(state: State, action: Action): State {

    switch (action.type) {
        case "ADD":
            return {
                people: [...state.people, action.payload]
            }
        case 'REMOVE':
            return {
                people: []
            }
        default:
            return state
    }

}

export default function CounterPeople() {

    const [state, dispatch] = useReducer(addPeople, { people: [] })
    const [userName, setUserName] = useState<string>("")

    return (
        <>
            <div>
                <div>Pessoas:{state.people.map((value,index)=>{
                    return <p key={index}>{value},</p>
                })}</div>
                <input type="text" value={userName} onChange={(e) => { setUserName(e.target?.value) }} />
                <button onClick={() => {
                    dispatch({ type: "ADD", payload: userName })
                    setUserName("")

                }}>Adiciona Pessoa</button>

                <button onClick={()=>{
                    dispatch({type:'REMOVE'})
                }}>Remover Pessoas</button>
            </div>
        </>
    )


}