import React, { useState } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../pages/Home';

import SaleRoutes from './sale.routes';

export default function AppRoutes(): JSX.Element {
    return (<Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Sale" component={SaleRoutes} />
    </Drawer.Navigator>)
}