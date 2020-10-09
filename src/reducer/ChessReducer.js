import { combineReducers } from 'redux'

import { generateInitialState, playSound } from '../utils/State'
import { chooseRandomMove } from '../utils/Move'

// MARK: Reducer
const chessReducer = (state = generateInitialState(), action) => {
    // play sound first
    playSound(action.type === "RANDOM" ? "move" : "board")

    // handle actions
    switch (action.type) {
        case "RANDOM":
            return chooseRandomMove(state)
        case "RESET":
            return generateInitialState()
    }

    // return default state
    return state
}

export default combineReducers({
    chess: chessReducer
})