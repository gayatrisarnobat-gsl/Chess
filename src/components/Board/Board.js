import React from 'react'
import { View } from 'react-native'

import BoardLabels from './BoardLabels'
import RowContainer from './RowContainer'

import { boardStyles } from './styles/BoardStyles'
import { getNumbersArray } from '../../utils/Common'

function renderBoardContainer() {
    const rowContainers = getNumbersArray(true).map(index => {
        return <RowContainer key={index + 1} rowNumber={index + 1} />
    })

    return (
        <View style={boardStyles.boardContainer} >
            {rowContainers}
        </View>
    )
}

const Board = props => {
    return (
        <View style={boardStyles.mainContainer} >
            <View style={boardStyles.rowLabelsOverlay}>
                <BoardLabels type="rowLabels" />
                <BoardLabels type="rowLabels" />
            </View>
            <View style={boardStyles.columnLabelsOverlay}>
                <BoardLabels type="columnLabels" />
                <BoardLabels type="columnLabels" />
            </View>
            <View style={boardStyles.paddedView} >
                    {renderBoardContainer()}
            </View>
        </View>
    )
}

export default Board