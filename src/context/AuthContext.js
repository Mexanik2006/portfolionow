import { createContext, useState } from 'react'


export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoading, setIsLoading, }}>
            {children}
        </AuthContext.Provider>
    )

}