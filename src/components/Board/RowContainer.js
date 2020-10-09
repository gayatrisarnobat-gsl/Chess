import React from 'react'
import { View, StyleSheet } from 'react-native'

import globalStyles from '../../styles/GlobalStyles'
import { getNumbersArray } from '../../utils/Common'

import Square from './Square'

function getBkgClr(rowNumber, currentIndex) {
    // true = white, rowNumber % 2 == 0, then start with white color,
    let isEvenRow = rowNumber % 2 == 0
    let isEvenIndex = currentIndex % 2 == 0
    let color = (isEvenRow && isEvenIndex) || (!isEvenRow && !isEvenIndex)
    return color ? "#000000" : "#FFFFFF"
}

function renderSquares(rowNumber) {
    const squares = getNumbersArray(true).map(index => {
        let elementId = `${rowNumber}_${index + 1}`
        return (
            <Square 
                key={elementId} 
                squareId={elementId} 
                bkgClr={getBkgClr(rowNumber, index)} />
        )
    })
    return (
        <View style={{...globalStyles.mainContainer, ...{flexDirection: "row", height: "100%"}}} >
            {squares}
        </View>
    )
}

const RowContainer = props => {
    return (
        <View style={styles.rowContainerStyle} >
            {renderSquares(props.rowNumber)}
        </View>
    )
}

const styles = StyleSheet.create({
    rowContainerStyle: {
        ...globalStyles.mainContainer,
        flexDirection: "row",
        height: '12.5%',
        maxHeight: '12.5%',
        width: '100%'
    }
})

export default RowContainer