import React, { useState, useEffect, Component } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons'

import globalStyles from '../../styles/GlobalStyles'

class Square extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animation: new Animated.Value(1),
        }
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 0,
            timing: 8000,
            useNativeDriver: true 
        }).start(() => {
            Animated.timing(this.state.animation, {
                toValue: 1,
                duration: 8000,
                useNativeDriver: true 
            }).start();
        })
    }

    componentDidMount() {
        this.startAnimation()
    }

    render() {
        const animatedStyle = {
            opacity: this.state.animation
        }

        const { chess, squareId, bkgClr } = this.props

        let imageName = ""
        let imageColor = "transparent"
        if (chess[squareId]) {
            imageName = chess[squareId].name
            imageColor = chess[squareId].color
        }
        return (
            <View
                style={{ ...styles.squareContainer, ...{ backgroundColor: bkgClr } }}
            >
                <Animated.View style={[animatedStyle]} />
                <FontAwesome5 name={imageName} size={24} color={imageColor} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    squareContainer: {
        ...globalStyles.mainContainer,
        width: '20%',
        maxWidth: '20%',
        maxHeight: '100%',
        height: '100%'
    }
})

const mapStateToProps = (state) => {
    const { chess } = state
    return { chess }
};

export default connect(mapStateToProps, null)(Square);