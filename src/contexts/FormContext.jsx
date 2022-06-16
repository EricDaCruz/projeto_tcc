import { createContext, useState, useContext }  from "react";


export const FormContext = createContext({});

export const FormProvider = ({children}) =>{
    const [data, setData] = useState({
        currentStep: 0,
        name: "",
        email: "",
        dateBorn: "",
        phone: "",
        location:{state:"", city:""},
        interests: 0,
        username: "",
        password: ""
    })

    return(
        <FormContext.Provider value={{data, setData}}>
            {children}
        </FormContext.Provider>
    )
}


export const useForm = () => useContext(FormContext)