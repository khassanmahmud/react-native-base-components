import { StatusBar } from 'expo-status-bar';
import React, { useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base'
import * as Font from 'expo-font';

import ButtonThemeExample from './src/components/button/ButtonThemeExample'

export default function App() {
	useEffect(() => {
		(async () => await Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			  Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
		}))();
	}, [])

	return (
		<ButtonThemeExample />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
