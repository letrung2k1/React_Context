import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import MainStack from './src/navigation/MainStack';
import { AppProvider, AppContext } from './src/context/AppContext';

const AppNavigator = () => {
  const { isLoggedIn } = useContext(AppContext);
  return isLoggedIn ? <MainStack /> : <AuthStack />;
};

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
