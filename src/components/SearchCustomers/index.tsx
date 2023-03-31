import React, { useState, useEffect } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { Container, ClientInput, CustomersListWrapper, CustomersItem } from './styles'
import { Feather } from '@expo/vector-icons';

interface SelectedCustomerData {
    group: string;
    name: string;
}

export default function SearchCustomers(): JSX.Element {
    const [customersList, setCustomersList] = useState([{ group: "Canto", name: "Felipe" }, { group: "Canto", name: "Ana" }, { group: "Canto", name: "Julia" }, { group: "Canto", name: "Maria" }, { group: "Canto", name: "Rafael" }, { group: "Canto", name: "José" }, { group: "Canto", name: "Karem" }, { group: "Canto", name: "Rodrigo" }, { group: "Copa", name: "Carol" }, { group: "Animação", name: "Carlos" }, { group: "Faxina", name: "Camila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }, { group: "Canto", name: "Priscila" }]);


    const [selectedCustomer, setSelectedCustomer] = useState<SelectedCustomerData | "">();
    const [inputValue, setInputValue] = useState<string>("");

    const filteredCustomers = customersList.filter((customer) => customer.name.startsWith(inputValue) || customer.group.startsWith(inputValue));

    const customersItems = filteredCustomers.map((item) => <CustomersItem onPress={() => setSelectedCustomer(item)}><Text style={{ fontSize: 20 }}>{item.group + ' - ' + item.name}</Text></CustomersItem>);


    function clearSelectedCustomer() {
        setSelectedCustomer(undefined);
    }

    return (<Container>
        {selectedCustomer ? <CustomersItem style={{ borderWidth: 2, borderColor: "#22A39F", borderTopColor: "#22A39F" }}><Text style={{ fontSize: 20 }}>{selectedCustomer.group + ' - ' + selectedCustomer.name}</Text><TouchableOpacity onPress={clearSelectedCustomer}><Feather name="x" size={30} color="#E70000" /></TouchableOpacity></CustomersItem> :
            <>
                <ClientInput placeholder='Procurar Cliente' onChangeText={(text) => setInputValue(text)} />
                <CustomersListWrapper showsVerticalScrollIndicator={false}>
                    {customersItems}
                </CustomersListWrapper>

            </>}



    </Container>)
}