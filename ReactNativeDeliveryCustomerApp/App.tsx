import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import store from './app/store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from './screens/TestScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<KeyboardAvoidingView
						behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
						style={{ flex: 1 }}
						keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}>
						<Stack.Navigator>
							<Stack.Screen
								name='HomeScreen'
								component={HomeScreen}
								options={{
									headerShown: false,
								}}
							/>
							<Stack.Screen
								name='MapScreen'
								component={MapScreen}
								options={{
									headerShown: false,
								}}
							/>
							<Stack.Screen
								name='TestScreen'
								component={TestScreen}
								options={{
									headerShown: true,
								}}
							/>
						</Stack.Navigator>
					</KeyboardAvoidingView>
				</SafeAreaProvider>
			</NavigationContainer>
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

/* 
Installed expo clie and used it to generate new project
installed redux - 
yarn add @reduxjs/toolkit    
yarn add react-redux    
yarn add tailwind-react-native-classnames
yarn add react-native-elements
yarn add react-native-vector-icons
yarn add react-native-safe-area-context
yarn add @react-navigation/native
expo install react-native-screens react-native-safe-area-context
expo install react-native-gesture-handler react-native-reanimated @react-native-community/masked-view - not sure if I need this
yarn add @react-navigation/native-stack
may have to do - yarn add -D @types/react or yarn add --dev @types/react@~17.0.21

Google stuff
yarn add react-native-google-places-autocomplete

yarn add react-native-dotenv
yarn add react-native-maps
expo install react-native-maps
yarn add react-native-maps-directions




yarn add intl


GCP - 
ReactNativeDeliveryCustomerApp
Project ID: reactnativedeliverycustomerapp
AIzaSyAMfzKCA1ShSXFQLjb-LEaXVyEVMClHtn8

*/
