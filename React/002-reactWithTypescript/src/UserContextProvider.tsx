import { createContext, useEffect, useState } from "react"

interface User{
    name: string,
    age: number,
    isMarried: boolean
}

interface UserContextType {
    users: User[] | null,
    addUser: (user: User) => void,
    removeUser: (id: string) => void,
    updateUser: (id: string) => void
}

const userContextDefaultValue = {
    users: null,
    addUser: () => null,
    removeUser: ()=> null,
    updateUser: ()=> null

}

const UserContext = createContext<UserContextType>(userContextDefaultValue)

interface Props {
    children: React.ReactNode
}

export const UserProvider = (props: Props) => {
    const [users, setUsers] = useState<User[] | null>(null)

    useEffect(()=>{
        setUsers([{name:"Ton",age:24,isMarried:false}])
    },[])

    const addUser = (user: User) => null
    const removeUser = (id: string) => null
    const updateUser = (id: string) => null


    return (
        <UserContext.Provider value={{users,addUser,removeUser,updateUser}}>
            {props.children}
        </UserContext.Provider>
    )
}