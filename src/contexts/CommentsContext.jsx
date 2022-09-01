import { createContext, useState, useContext }  from "react";

export const CommentsContext = createContext({});

export const CommentsProvider = ({children}) =>{
    const [comments, setComments] = useState([])

    return(
        <CommentsContext.Provider value={{comments, setComments}}>
            {children}
        </CommentsContext.Provider>
    )
}

export const useComments = () => useContext(CommentsContext)