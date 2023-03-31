import styled from "styled-components/native";

export const Container = styled.View`
    width: 90%;
    background-color:#D9D9D9;
    padding-top: 20px;
    max-height: 75%;
    padding-bottom: 20px;
    align-self: center;
    margin-top: 40px;
    box-shadow: 2px 2px 4rem black;
    border-radius: 5px;
    elevation:4;
`;

export const ClientInput = styled.TextInput`
    background-color: #fff;
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    width: 90%;
    align-self: center;
    margin-top: 20px;
`;

export const CustomersListWrapper = styled.ScrollView`
    margin-top: 30px;
    width: 100%;
    align-self:center;
`;

export const CustomersItem = styled.TouchableOpacity`
    width: 90%;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    align-items: center;
    background-color: #fff;
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: #b3b3b3;
`