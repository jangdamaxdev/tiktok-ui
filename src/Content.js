import { memo, useState, useContext, createContext } from "react";

export const contextOBJ = createContext()
function Sayhello({ children }) {
    const [random, setRandom] = useState(Math.random())
    return (
        <contextOBJ.Provider value={{ random, setRandom }}>
            {children}
            <button onClick={e => setRandom(Math.random())}>Say Btn</button>
        </ contextOBJ.Provider>
    )
}

export default memo(Sayhello)