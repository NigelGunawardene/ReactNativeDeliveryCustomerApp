import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';
import HomeScreen from './screens/HomeScreen';

export default function App() {
	return (
		<Provider store={store}>
			<HomeScreen />
		</Provider>
	);
}

{
	/* <View style={styles.container}>
<Text>Open up App.tsx to start working on your app!</Text>
<StatusBar style='auto' />
</View> */
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
