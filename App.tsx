/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigator} from './src/navigation';
import {CommonStyles} from '@styles';
import {useTheme} from '@theme';

const App = () => {
  const {theme} = useTheme();
  const styles = CommonStyles(theme);
  return (
    <SafeAreaView style={styles.rootContainer}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
