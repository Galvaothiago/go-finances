import React from "react"
import {View, Text, StyleSheet} from "react-native"
import {Feather} from "@expo/vector-icons"
import {Container, Header, Icon, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper} from "./style"

export function Dashboard() {
	return (
		<Container>
			<Header>
				<UserWrapper>
					<UserInfo>
						<Photo source={{uri: "https://github.com/Galvaothiago.png"}} />
						<User>
							<UserGreeting>Olá,</UserGreeting>
							<UserName>Thiago</UserName>
						</User>
					</UserInfo>

					{/* <LogoutButton onPress={() => {}}> */}
					<Icon name="power" />
					{/* </LogoutButton> */}
				</UserWrapper>
			</Header>
		</Container>
	)
}
