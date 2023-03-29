import React from 'react';

import { View, Text } from 'react-native';
import { Container, BackButton } from './styles'

import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

type HeaderProps = {
    title: String
}

export default function Header({ title }: HeaderProps): JSX.Element {
    const navigation = useNavigation();

    return (<Container>
        <BackButton onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" />
            <Text style={{ fontSize: 24 }}>{title}</Text>
        </BackButton>
    </Container>)
}