import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Main from './src/Main';
import EStyleSheet from 'react-native-extended-stylesheet';

// redux store
import store from './src/config-store';
import { Dimensions } from 'react-native';

let {height, width} = Dimensions.get('window');
EStyleSheet.build({
  $rem: width > 340 ? 18 : 16,
  $padding: '5rem'
});

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </Provider>
  );
}