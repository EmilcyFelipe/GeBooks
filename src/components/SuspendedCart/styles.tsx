import styled from "styled-components/native";

export const SuspendedCartContainer = styled.View`
    height: 150px; 
    width: 90%;
    align-self: center;
    align-items: flex-start;
    background-color: #D9D9D9 ;
    elevation:10;
`;


export const ScrollItems = styled.ScrollView`
    height: 10px; 
    width: 70%;
    `

export const ItemWrapper = styled.View`
    flex-direction: row; 
    align-items: center;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 15px;
`
export const ProceedButton = styled.TouchableOpacity`
    background-color: #414141 ;
    width: 25%;
    padding: 10px;
    border-radius: 5px;
    align-self: flex-end;
    bottom:10px;
    right: 10px;
    position: absolute;
`;
