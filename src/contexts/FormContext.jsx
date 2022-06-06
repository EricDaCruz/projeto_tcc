import { createContext, useState, useContext }  from "react";


export const FormContext = createContext({});

export const FormProvider = ({children}) =>{
    const [data, setData] = useState({
        currentStep: 0,
        name: "",
        email: "",
        dateBorn: "",
        phone: 0,
        state: "",
        city: "",
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

export const ChangeData = {
    currentStep: value => setData({...data, currentStep:value}),
    name: value => setData({...data, name:value}),
    email: value => setData({...data, email:value}),
    dateBorn: value => setData({...data, dateBorn:value}),
    phone: value => setData({...data, phone:value}),
    state: value => setData({...data, state:value}),
    city: value => setData({...data, city:value}),
    interests: value => setData({...data, interests:value}),
    username: value => setData({...data, username:value}),
    password: value => setData({...data, password:value}),
}

export const useForm = () => useContext(FormContext)