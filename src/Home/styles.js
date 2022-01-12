import styled from 'styled-components/native';

export const Wrapper = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${props => props.theme.color};
    font-size: 44px;
    margin-vertical: 15px;
`;

export const Container = styled.View`
    background-color: ${props => props.theme.background}; 
    align-items: center; 
    justify-content: center; 
    flex: 1;
`;