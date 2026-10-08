import { createContext, useState } from "react";

export type User = {
    userName: string,
    age: number,
    role: string
}

export const UserContext = createContext<User | null>(null) 