import { 
    createContext,
    useContext,
    useReducer 
} from 'react'

const initialData = {
    currentStep: 0,
    name: "",
    email: "Eric",
    age: 0,
    phone: 0,
    state: "",
    city: "",
    interests: 0,
    username: "",
    password: ""
}

const FormContext = createContext(undefined)

export const FormActions = {
    setCurrentStep: 'setCurrentStep',
    setName: 'setName',
    setEmail: 'setEmail',
    setAge: 'setAge',
    setPhone: 'setPhone',
    setState: 'setState',
    setCity: 'setCity',
    setInterests: 'setInterests',
    setUsername: 'setUsername',
    setPassword: 'setPassword'
}

const formReducer = (state, action) =>{
    switch(action.type){
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload}
        case FormActions.setName:
            return {...state, name: action.payload}
            case FormActions.setEmail:
                return {...state, email: action.payload}
        case FormActions.setAge:
            return {...state, age: action.payload}
        case FormActions.setPhone:
            return {...state, phone: action.payload}
        case FormActions.setState:
            return {...state, state: action.payload}
        case FormActions.setCity:
            return {...state, city: action.payload}
        case FormActions.setInterests:
            return {...state, interests: action.payload}
        case FormActions.setUsername:
            return {...state, username: action.payload}
        case FormActions.setPassword:
            return {...state, password: action.payload}
        default:
            return state
    }
}

export function FormProvider({children}){
    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = {state, dispatch}
    return(
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

// Contex Hook
export const useForm = () =>{
    const context = useContext(FormContext)
    if(context === undefined){
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }
    return context
}