import styled from "styled-components/native";

export const SuspendedCartContainer = styled.View`
    height: 200px; 
    width: 90%;
    align-self: center;
    align-items: center;
    background-color: #D9D9D9 ;
    border-radius: 10px;
    elevation:10;
`;


export const ScrollItems = styled.ScrollView`
    height: 200px; 
    width: 100%;
    border-top-right-radius: 10px; 
    border-top-left-radius: 10px;
    `

export const ItemWrapper = styled.View`
    flex-direction: row; 
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
export const ProceedButton = styled.TouchableOpacity`
    background-color: #414141 ;
    width: 25%;
    padding: 10px;
    border-radius: 5px;
    align-self: flex-end;
    margin-right: 10px;
    margin-bottom: 10px;
`;
