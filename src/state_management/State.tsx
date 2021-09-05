import { createContext, useReducer } from "react";

//@ts-ignore
const AppContext = createContext()

const initialState = {
    count: 0
}

const reducer = (state: any, action: any) => {
    switch(action.type) {
        case "setCount": {
            return {...state, count: action.count}
        }
    }
    return state
}

function AppContextProvider(props: any) {
    const fullInitialState = {
        ...initialState
    }

    const [state, dispatch] = useReducer(reducer, fullInitialState)
    const value = { state, dispatch }

    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    )
}

const AppContextConsumer = AppContext.Consumer

export { AppContext, AppContextProvider, AppContextConsumer }