import { createContext, ReactNode,  useContext, useReducer } from "react";;

type Props = {
    children: ReactNode
};

interface State {
    token: string | null,
    onboarding: boolean,
    subscription_status: "incomplete" | "incomplete_expired" | "active" | "past_due" | "canceled" | "unpaid" | null | undefined
};

type Action = {
    type: FormActions;
    payload: any;
};


type ContextType = {
    state: State;
    dispatch: (action: Action) => void
};

export enum FormActions {
    setToken,
    setOnboarding,
    setSubsStatus
};


const initialData: State = {
    token: null,
    onboarding: false,
    subscription_status: undefined
};

const formReducer = (state: State, action: Action) => {
    switch(action.type) {
        case FormActions.setToken:
            return {...state, token: action.payload}
        case FormActions.setOnboarding:
            return {...state, onboarding: action.payload}
        case FormActions.setSubsStatus:
            return{...state, subscription_status: action.payload}
        default:
            return state;
    }
};

const AuthContext = createContext<ContextType | undefined>(undefined);

export const AuthProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(context === undefined) {
        throw new Error('useAuth precisa ser usado dentro do FormProvider')
    }
    return context;
};