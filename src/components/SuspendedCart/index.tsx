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

import { useNavigation } from '@react-navigation/native';

type SuspendedCartProps = {
    nextPage: String;
}

export default function SuspendedCart({ nextPage }: SuspendedCartProps): JSX.Element {

    const navigation = useNavigation();

    const [itemsCart, setItemsCart] = useState([{ id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }, { id: 123123123, name: 'Alguma coisa' }])

    let itemsToRender = itemsCart.map((item, index) => <ItemWrapper key={index}><Text style={{ fontSize: 20 }}>{item.name}</Text><TouchableOpacity><Ionicons size={20} name='trash' /></TouchableOpacity></ItemWrapper>)


    return (
        <SuspendedCartContainer>
            <ScrollItems showsVerticalScrollIndicator={false} >{itemsToRender}</ScrollItems>
            <ProceedButton onPress={() => { navigation.navigate(nextPage) }}><Text style={{ color: "#FFFF", textAlign: 'center' }}>Prosseguir</Text></ProceedButton>
        </SuspendedCartContainer>

    )



}