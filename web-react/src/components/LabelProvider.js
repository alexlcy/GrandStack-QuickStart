import { createContext, useContext, useState } from "react";

export const LabelContext = createContext({})

export function LabelProvider ({ children }){
    const [labels, setlabels] = useState({
        Business: true,
        Category: true,
        User: true,
        Review: true,
    })

    const [nodeLimit, setNodeLimit] = useState(50)

    return (
        < LabelContext.Provider value = {{ labels, setlabels, nodeLimit, setNodeLimit }}>
            { children }
        </LabelContext.Provider>
            
    )
}