import React, { useState } from 'react';

import { View, Text } from 'react-native';

import { Container, ClientInput, CustomersListWrapper, CustomersItem } from './styles'

export default function SearchCustomers(): JSX.Element {
    const [customersList, setCustomersList] = useState([{ group: "Canto", name: "Felipe" }, { group: "Canto", name: "Ana" }, { group: "Canto", name: "Julia" }, { group: "Canto", name: "Maria" }, { group: "Canto", name: "Rafael" }, { group: "Canto", name: "José" }, { group: "Canto", name: "Karem" }, { group: "Canto", name: "Rodrigo" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }]);

    const CustomersItems = customersList.map((item) => <CustomersItem><Text style={{ fontSize: 20 }}>{item.group + ' - ' + item.name}</Text></CustomersItem>)

    return (<Container>
        <ClientInput placeholder='Procurar Cliente' />
        <CustomersListWrapper showsVerticalScrollIndicator={false}>
            {CustomersItems}
        </CustomersListWrapper>
    </Container>)
}