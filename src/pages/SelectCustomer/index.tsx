import React from 'react'

import { View, Text } from 'react-native'
import Header from '../../components/Header'
import SuspendedCart from '../../components/SuspendedCart';
import SearchCustomers from '../../components/SearchCustomers';


export default function SelectCustomer(): JSX.Element {
    return (
        <View>
            <Header title="Voltar" />
            <SuspendedCart nextPage="CheckOrder" />
            <SearchCustomers />
        </View>
    )
}