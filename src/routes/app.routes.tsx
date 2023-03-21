import React, { useState } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../pages/Home';

export default function AppRoutes(): JSX.Element {
    return (<Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Feed" component={Home} />
    </Drawer.Navigator>)
}