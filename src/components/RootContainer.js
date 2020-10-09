import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform 
} from 'react-native'
import { connect } from 'react-redux'

import globalStyles from '../styles/GlobalStyles'

import Board from './Board/Board'

let TouchableComponent = (Platform.OS === 'android' && Platform.Version >= 21) ? TouchableNativeFeedback : TouchableOpacity

const RootContainer = props => {
    return (
        <View style={globalStyles.mainContainer}>
            <Board />
            <View style={styles.buttonsContainer} >
                <TouchableComponent onPress={() => props.randomClicked()} >
                    <View style={{ ...styles.buttonCommon, ...styles.buttonRandom }}>
                        <Text style={styles.textStyle} > Random </Text>
                    </View>
                </TouchableComponent>

                <TouchableComponent onPress={() => props.resetClicked()} >
                    <View style={{ ...styles.buttonCommon, ...styles.buttonReset }}>
                        <Text style={styles.textStyle} > Reset </Text>
                    </View>
                </TouchableComponent>
            </View>
        </View>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        randomClicked: () => dispatch({ type: 'RANDOM' }),
        resetClicked: () => dispatch({ type: 'RESET' })
    }
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        height: 50,
        maxHeight: 50,
        width: "95%",
        maxWidth: "95%",
        marginVertical: 10
    },
    buttonCommon: {
        minWidth: Platform.OS === 'android' ? '20%' : 100,
        minHeight: 50,
        justifyContent: "center"
    },
    buttonReset: {
        backgroundColor: 'red',
    },
    buttonRandom: {
        backgroundColor: 'green',
    },
    textStyle: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        color: "white"
    }
});

export default connect(null, mapDispatchToProps)(RootContainer)