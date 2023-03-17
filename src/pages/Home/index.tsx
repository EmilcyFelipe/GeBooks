import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions, Modal } from 'react-native';

import {
    Container,
    Title,
    SearchContainer,
    Category,
    Search,
    MenuContainer,
    MenuItem
} from './styles'

import SuspendedCart from '../../components/SuspendedCart';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState();
    const [cartItems, setCartItems] = useState([{ ok: true }, { ok: true }, { ok: true }, { ok: true }]);
    const [modalCartIsVisible, setModalCartIsVisible] = useState(true);

    const PickerComponent = <Picker >
        <Picker.Item label="Categoria" value="qualquer" />
        <Picker.Item label="Feijão" value="qualquer1" />
        <Picker.Item label="Feijão" value="qualquer2" />
        <Picker.Item label="Feijão" value="qualquer3" />
        <Picker.Item label="Feijão" value="qualquer4" />
        <Picker.Item label="Feijão" value="qualquer5" />
    </Picker>

    const MenuList = ['olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas', 'olas']
    console.log(Dimensions.get('window').width * .9 / 4)
    return (
        <Container>
            <Title>Vender</Title>
            <SearchContainer>
                <Search placeholder='Nome ou código' />
                <Category>{PickerComponent}</Category>
            </SearchContainer>
            <MenuContainer contentContainerStyle={{ padding: 10, justifyContent: 'center', alignItems: 'center' }} showsVerticalScrollIndicator={false} numColumns={4} data={MenuList} renderItem={({ item }) => <MenuItem Dimensions={Dimensions.get('window').width * .9 / 4}></MenuItem>} horizontal={false} />
            {modalCartIsVisible ? (<SuspendedCart />) : ''}

        </Container>
    );
}