import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { Container, ImageWrapper, Tag, ImageMenu } from './styles'


type MenuItemProps = {
    dimensions: Number;
}

interface ContainerProps {

}
export default function MenuItem({ dimensions }: MenuItemProps): JSX.Element {
    const [item, setItem] = useState({ id: 1234, picture: 'sfasdfasd', name: 'Burguer', tagColor: '#262624' })
    return (<Container dimensions={dimensions}>
        <ImageWrapper>
            <ImageMenu source={require('../../assets/burguer.png')} />
        </ImageWrapper>
        <Tag color={item.tagColor}><Text style={{ color: '#fff' }}>{item.name}</Text></Tag>
    </Container>)
}