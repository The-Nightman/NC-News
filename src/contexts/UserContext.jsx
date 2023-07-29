import { createContext, useState } from "react";

export const UsernameContext = createContext();

export const UsernameContextProvider = ({ children }) => {
    const [user, setUser] = useState({ username: "weegembump" });

    return (
        <UsernameContext.Provider value={{ user, setUser }}>
            {children}
        </UsernameContext.Provider>
    );
};