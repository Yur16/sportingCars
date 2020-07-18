import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/pages/Main';
import Specs from './src/pages/Specs';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{
          headerTitle: 'Selecione um carro',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#000',
          }
        }} />
        <Stack.Screen name="Specs" component={Specs} options={{
          headerTitle: 'Especificação',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#000',
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;