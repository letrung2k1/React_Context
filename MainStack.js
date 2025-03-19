import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import { AppContext } from '../context/AppContext';

const Stack = createStackNavigator();

const HomeScreen = () => {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Logout" onPress={() => setIsLoggedIn(false)} />
    </View>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
