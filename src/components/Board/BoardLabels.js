import React from 'react'
import { View, Text } from 'react-native'

import { boardLabelStyles } from './styles/BoardStyles'
import { getNumbersArray } from '../../utils/Common'

function getTextsArrayForType(type) {
    const numbersArray = getNumbersArray(false)
    switch (type) {
        case "rowLabels":
            return numbersArray.map(index => {
                switch (index) {
                    case 1: return "A"
                    case 2: return "B"
                    case 3: return "C"
                    case 4: return "D"
                    case 5: return "E"
                    case 6: return "F"
                    case 7: return "G"
                    case 8: return "H"
                    default: return ""
                }
            })
        default:
            return numbersArray
    }
}

function renderLayout(type) {
    const style = (type === "rowLabels") ? boardLabelStyles.titleTextRow : boardLabelStyles.titleTextColumn
    const textsArray = getTextsArrayForType(type)
    const texts = getNumbersArray(true).map(index => {
        return (
            <Text
                key={index}
                style={{ ...boardLabelStyles.titleTextCommon, ...style }} >
                {textsArray[index]}
            </Text>
        )
    })

    const containerStyle = (type === "rowLabels") ? boardLabelStyles.labelsContainerRow : boardLabelStyles.labelsContainerColumn
    return (
        <View style={containerStyle} >
            {texts}
        </View>
    )
}

const BoardLabels = props => {
    return (
        <View >
            {renderLayout(props.type)}
        </View>
    )
}

export default BoardLabels