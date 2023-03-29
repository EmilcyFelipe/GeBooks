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
    padding: 5px 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Search = styled.TextInput.attrs({
    textJustify: "center"
})`
    border: 1px solid rgba(0,0,0,0.3);
    height: 40px;
    width: 60%;
    border-radius: 4px;
`;

export const Category = styled.View`
   width: 400px;
   justify-content: space-between;
`;

export const MenuContainer = styled.FlatList`
    width: 90%;
    margin-top: 20px;
    align-self: center;
    background-color: #fff;
    elevation:10;
    `