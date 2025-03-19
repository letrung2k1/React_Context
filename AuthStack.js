import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import { AppContext } from '../context/AppContext';

const Stack = createStackNavigator();

const LoginScreen = () => {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={() => setIsLoggedIn(true)} />
    </View>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
