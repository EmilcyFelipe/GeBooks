import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #F3F3F3;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 24px;
    margin-left: 5%;
    margin-top: 5%;
`;

export const SearchContainer = styled.View`
    margin-top: 20px;
    width: 90%;
    align-self: center;
    background-color: #fff;
    elevation: 2;
    border-radius: 4px;
    padding: 15px 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Search = styled.TextInput.attrs({
    textJustify: "center"

})`
    border: 1px solid rgba(0,0,0,0.3);
    height: 40px;
    border-radius: 4px;
`;

export const Category = styled.View`
   width:200px;
   justify-content: space-between;
`;

export const MenuWrapper = styled.View`
    
`;

export const MenuContainer = styled.FlatList`
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
    align-self: center;
    background-color: red;
    border-radius: 4px;
    elevation:10;
    `
export const MenuItem = styled.TouchableOpacity`
        width: ${props => props.Dimensions * .9}px;
        height:${props => props.Dimensions * .9}px;
        margin-left: 2%;
        margin-top: 2%;
        justify-content: space-between;
        background-color: #fff;
        border-radius: 4px;
    `;