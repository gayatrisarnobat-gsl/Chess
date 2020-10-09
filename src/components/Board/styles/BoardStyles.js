import { StyleSheet, Dimensions } from 'react-native'

const containerWidthHeight = Dimensions.get("window").width * 0.95
const boardStyles = StyleSheet.create({
    mainContainer: {
        minWidth: containerWidthHeight,
        minHeight: containerWidthHeight,
        maxHeight: containerWidthHeight,
        maxWidth: containerWidthHeight,
        backgroundColor: "black"
    },
    rowLabelsOverlay: {
        position: 'absolute',
        width: "85%",
        height: "100%",
        justifyContent: "space-between",
        alignContent: "center",
        alignSelf: "center"
    },
    columnLabelsOverlay: {
        position: 'absolute',
        flexDirection: "row",
        width: "100%",
        height: "85%",
        justifyContent: "space-between",
        paddingHorizontal: "2.25%"
    },
    paddedView: {
        position: "absolute",
        top: '7.75%',
        left: '7.75%',
        width: "85%",
        height: "85%",
        backgroundColor: "white",
        padding: 2
    },
    boardContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2
    }
})

const boardLabelStyles = StyleSheet.create({
    labelsContainerRow: {
        flexDirection: "row",
        width: "100%",
        maxWidth: "100%"
    },
    labelsContainerColumn: {
        flexDirection: "column-reverse",
        height: "100%",
        maxHeight: "100%",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 30
    },
    titleTextCommon: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    titleTextRow: {
        width: '12.5%',
        height: "100%",
        maxHeight: "100%"
    },
    titleTextColumn: {
        width: '100%',
        height: "12.5%",
        maxHeight: "12.5%",
        paddingVertical: 6
    }
})

export { boardStyles, boardLabelStyles } 