import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DashboardScreen} from '@modules/dashboard';

const Stack = createStackNavigator();
export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="dashboard-screen"
        component={DashboardScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};
