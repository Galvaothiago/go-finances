import styled from "styled-components/native"

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	color: #fff;
	background-color: ${({theme}) => theme.colors.primary};
`

export const Test = styled.Text`
	font-size: 30px;
	color: #fff;
`
