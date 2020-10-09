import { Audio } from 'expo-av';
import { pieces, whitePieceColor, blackPieceColor } from '../constants/common'
import { getNumbersArray } from '../utils/Common'

// MARK: Sound Helper
async function playSound(soundType) {
    const soundObject = new Audio.Sound();
    try {
        if (soundType === "board") {
            await soundObject.loadAsync(
                require('../../assets/sounds/board_sound.wav')
            );
        }
        else {
            await soundObject.loadAsync(
                require('../../assets/sounds/move_sound.wav')
            );
        }

        await soundObject.playAsync();
    } catch (error) {
        console.log(error);
    }
}

// MARK: State Helper
function getStateObj(key) {
    const stringParts = key.split('_')

    let rowNumber = ""

    const keysToValues = stringParts.map((currentElement, index) => {
        switch (index) {
            case 0:
                rowNumber = currentElement
                return getPieceColorForRowNumber(currentElement)
            default:
                return getPieceNameForRowIndex(rowNumber, currentElement)
        }
    })

    return { color: keysToValues[0], name: keysToValues[1] }
}

function getPieceColorForRowNumber(rowNumber) {
    switch (rowNumber) {
        case "1":
        case "2":
            return blackPieceColor
        case "7":
        case "8":
            return whitePieceColor
        default: return "transparent"
    }
}

function getPieceNameForRowIndex(rowNumber, index) {
    if (rowNumber == 2 || rowNumber == 7) {
        return pieces.pawn
    }
    switch (index) {
        case "1":
        case "8":
            return pieces.rook
        case "2":
        case "7":
            return pieces.knight
        case "3":
        case "6":
            return pieces.bishop
        case "4": return pieces.king
        case "5": return pieces.queen
        default:
            return ""
    }
}

function getKeysForRow(rowNumber) {
    return getNumbersArray(true).map(index => {
        return `${rowNumber}_${index + 1}`
    })
}

function getRowStateObject(rowNumber) {
    let rowKeys = getKeysForRow(rowNumber)

    let rootObject = {}

    rowKeys.map(key => {
        rootObject = {
            ...rootObject,
            [`${key}`]: getStateObj(key)
        }
    })

    return rootObject
}

function generateInitialState() {
    let mergedState = {}
    getNumbersArray(true).map(index => {
        const rowStateObj = getRowStateObject(index + 1)
        mergedState = {
            ...mergedState,
            ...rowStateObj
        }
    })
    // console.log(JSON.stringify(mergedState))
    return mergedState
}

export { generateInitialState, getKeysForRow, playSound }