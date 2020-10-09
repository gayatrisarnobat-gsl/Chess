export function getNumbersArray(shouldStartFromZero) {
    return Array.from(Array(8), (_, element) => shouldStartFromZero ? element : element + 1)
}