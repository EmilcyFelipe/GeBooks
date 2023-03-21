import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
        width: ${(props) => props.dimensions}px;
        height: ${(props) => props.dimensions}px;
        margin-top: 2%;
        background-color: #fff;
        border-radius: 4px;
        padding: 2px;
        align-items: center;
        `;

export const ImageWrapper = styled.View`
    width: 90%;
    height: 90%;
    border-radius: 5px;
    overflow: hidden;
    
    `

export const ImageMenu = styled.Image`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const Tag = styled.View`
    background-color: ${props => props.color};
    position: absolute;
    bottom: 0;
    width: 98%;
    padding: 5px;
    align-items: center
    `;


