import { pieces, whitePieceColor } from '../constants/common'
import { getKeysForRow } from '../utils/State'

// MARK: Move Helpers
function getRowElementIndex(move) {
    let rowIndex = 5, elementIndex
    switch (move) {
        case "e4":
            elementIndex = 4
            break
        case "d4":
            elementIndex = 3
            break
        case "c4":
            elementIndex = 2
            break
        case "g3":
            rowIndex = 6
            elementIndex = 6
            break
        case "nf3":
            rowIndex = 6
            elementIndex = 5
            break
    }
    return { rowIndex: rowIndex, elementIndex: elementIndex }
}

function removeObjectName(rowNumber, index, state) {
    const rowKeys = getKeysForRow(rowNumber)
    const elementKey = rowKeys[index]
    const stateObj = state[elementKey]
    stateObj["name"] = ""
    return {
        [`${elementKey}`]: stateObj
    }
}

function performMove(move, state) {
    let { rowIndex, elementIndex } = getRowElementIndex(move)
    let removeRowNumber = 7
    let pieceName = pieces.pawn
    switch (move) {
        case "nf3":
            removeRowNumber = 8
            pieceName = pieces.knight
            break
    }

    const rowElementKey = getKeysForRow(rowIndex)[elementIndex]
    const rowElementObj = state[rowElementKey]
    rowElementObj["color"] = whitePieceColor
    rowElementObj["name"] = pieceName

    if (move === 'nf3') { // special case
        elementIndex = 6 // for removal
    }

    return {
        ...state,
        [`${rowElementKey}`]: rowElementObj,
        ...removeObjectName(removeRowNumber, elementIndex, state)
    }
}

function chooseRandomMove(state) {
    const movesArray = ["e4", "d4", "c4", "g3", "nf3"]
    const randomElement = movesArray[Math.floor(Math.random() * movesArray.length)]
    return performMove(randomElement, state)
}

export { chooseRandomMove } 