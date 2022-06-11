import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NavOptions from '../components/NavOptions';
import Map from '../components/Map';
import tw from 'tailwind-react-native-classnames';

const TestScreen = () => {
	return (
		<View>
			<Text>TestScreen</Text>
			<View style={{ height: 100, width: 100 }}>
				<Map />
			</View>
		</View>
	);
};

export default TestScreen;

const styles = StyleSheet.create({});
