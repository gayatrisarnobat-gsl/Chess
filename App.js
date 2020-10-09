import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Audio } from 'expo-av'

import chessReducer from './src/reducer/ChessReducer'
import RootContainer from './src/components/RootContainer'

// create redux store
const store = createStore(chessReducer)

// request audio permissions
Audio.requestPermissionsAsync()

export default function App() {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}