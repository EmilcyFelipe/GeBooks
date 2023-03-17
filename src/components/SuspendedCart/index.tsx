import React, { useState } from 'react';

import {
    SuspendedCartContainer,
    ScrollItems,
    ItemWrapper,
    ProceedButton
} from './styles';

import { Ionicons } from '@expo/vector-icons'

import { View, Text, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SuspendedCart(): JSX.Element {
    const [itemsCart, setItemsCart] = useState([{ id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }])

    let itemsToRender = itemsCart.map((item, index) => <ItemWrapper key={index}><Text style={{ fontSize: 24 }}>{item.name}</Text><TouchableOpacity><Ionicons size={24} name='trash' /></TouchableOpacity></ItemWrapper>)


    return (
        <SuspendedCartContainer>
            <ScrollItems>{itemsToRender}</ScrollItems>
            <ProceedButton><Text style={{ color: "#FFFF", textAlign: 'center' }}>Prosseguir</Text></ProceedButton>
        </SuspendedCartContainer>

    )



}