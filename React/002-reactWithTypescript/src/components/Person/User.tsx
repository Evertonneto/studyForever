import { useState } from "react"

interface Props {
    name: string,
    age: number,
    isMarried: boolean
    country:Countries
}

export enum Countries {
    Brazil = "Brazil",
    France = "France",
    Spain ="Spain"
}

export function User(Props: Props) {
    const [showInfo, setShowInfo] = useState<boolean>(false)
    const [personBio, setPersonBio] = useState<string | null>(null)

    const toggleInfo = () => {
        setShowInfo(prev => !prev)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPersonBio(event.target.value)
    }

    return (
        <>
            {showInfo &&
                <div>
                    <p>Nome:{Props.name}</p>
                    <p>Idade:{Props.age}</p>
                    <p>É casado:{Props.isMarried ? "Sim" : "Não"}</p>
                    <p>Country:{Props.country}</p>
                    <p>Bio: {personBio ? personBio : "There´s no bio yet."}</p>
                </div>
            }
            <input type="text" onChange={handleInputChange}/>
            <button onClick={toggleInfo}>Toggle Info</button>


        </>
    )
}