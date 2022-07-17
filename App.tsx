import {StatusBar} from "expo-status-bar"
import React from "react"
import {ThemeProvider} from "styled-components"
import theme from "./src/global/styles/theme"

import {useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold} from "@expo-google-fonts/poppins"

import {StyleSheet, Text, View} from "react-native"
import {Dashboard} from "./src/screens/Dashboard"
import AppLoading from "expo-app-loading"

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_700Bold,
		Poppins_500Medium,
		Poppins_400Regular,
	})

	if (!fontsLoaded) {
		return <AppLoading />
	}
	return (
		<ThemeProvider theme={theme}>
			<Dashboard />
		</ThemeProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
