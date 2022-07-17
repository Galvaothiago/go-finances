import styled from "styled-components/native"

export const Container = styled.View`
    width: 100%;
    flex; 1;
`
export const Title = styled.Text`
	font-size: 24px;
	font-family: ${({theme}) => theme.fonts.regular};
	color: ${({theme}) => theme.colors.shape};
`
