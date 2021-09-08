import React, { createContext, useEffect, useReducer, useState } from "react";
import { Gender, initialPlayers, Player } from "../model/game";
import { GlobalState } from "../model/global";

//@ts-ignore
let AppContext = createContext()

const initialState: GlobalState = {
    currentGame: {
        set: {},
        players: initialPlayers
    }
}

const persistedState = JSON.parse(window.localStorage.getItem("state") as any)

let reducer = (state: GlobalState, action: any): GlobalState => {
    switch (action.type) {
        case "CG_PLAYER_INIT": {
            if (state.currentGame.players.length === 0) {
                return { ...state, ...{ currentGame: { ...state.currentGame, players: initialPlayers } } }
            }
            return state
        }
        case "CG_PLAYER_ADD": {
            const newPlayer = {
                ...action.data,
                id: Math.max(...state.currentGame.players.map((player: Player) => player.id), 0) + 1
            }
            const players = [...state.currentGame.players, newPlayer]
            return { ...state, ...{ currentGame: { ...state.currentGame, players: players } } }
        }
        case "CG_PLAYER_UPDATE": {
            const players = state.currentGame.players.map((player: Player) => {
                if (player.id === action.data.id)
                    return { ...player, ...action.data }
                else
                    return player
            })
            return { ...state, ...{ currentGame: { ...state.currentGame, players: players } } }
        }
        case "CG_PLAYER_REMOVE": {
            const players = state.currentGame.players.filter((player: Player) => {
                return player.id !== action.data.id
            })

            return { ...state, ...{ currentGame: { ...state.currentGame, players: players } } }
        }
        case "CG_PLAYER_REMOVE_EMPTY": {
            const players = state.currentGame.players.filter((player: Player) => {
                return player.name !== ""
            })
            
            return { ...state, ...{ currentGame: { ...state.currentGame, players: players } } }
        }
        
        // Set
        case "CG_SET_ADD": {
            const set = action.data

            return {...state, ...{ currentGame: { ...state.currentGame, set }}}
        }

        // General
        case "APP_RESET": {
            return {...initialState}
        }
    }
    return state
}

function AppContextProvider(props: any) {
    const fullInitialState = {
        ...initialState,
        ...persistedState
    }

    let [state, dispatch]: [GlobalState, any] = useReducer(reducer, fullInitialState)

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