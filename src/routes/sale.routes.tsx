import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SelectCustomer from '../pages/SelectCustomer';
import Home from '../pages/Home';
import CheckOrder from '../pages/CheckOrder';

const Stack = createStackNavigator();

export default function SaleRoutes(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='SelectCustomer' options={{ headerTitle: "Voltar" }} component={SelectCustomer} />
            <Stack.Screen name='CheckOrder' component={CheckOrder} />
        </Stack.Navigator>
    )
}