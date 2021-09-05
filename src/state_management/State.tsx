import React, { createContext, useEffect, useReducer, useState } from "react";

//@ts-ignore
let AppContext = createContext()

const initialState = {
    count: 0
}

const persistedState = JSON.parse(window.localStorage.getItem("state") as any)

let reducer = (state: any, action: any) => {
    switch(action.type) {
        case "setCount": {
            return {...state, count: action.count}
        }
    }
    return state
}

function AppContextProvider(props: any) {
    const fullInitialState = {
        ...initialState,
        ...persistedState
    }

    let [state, dispatch] = useReducer(reducer, fullInitialState)
    
    useEffect(() => {
        window.localStorage.setItem('state', JSON.stringify(state))
    }, [state])
    
    let value = { state, dispatch }

    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    )
}

let AppContextConsumer = AppContext.Consumer

export { AppContext, AppContextProvider, AppContextConsumer }