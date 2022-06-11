import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityBase,
	View,
	Image,
} from 'react-native';
import React from 'react';
import { iteratorSymbol } from 'immer/dist/internal';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
	{
		id: '1',
		title: 'Get a ride',
		image: 'https://links.papareact.com/3pn',
		screen: 'MapScreen',
	},
	{
		id: '2',
		title: 'Order food',
		image: 'https://links.papareact.com/28w',
		screen: 'TestScreen',
	},
];

const NavOptions = () => {
	const navigation = useNavigation();
	const origin = useSelector(selectOrigin);

	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			horizontal
			renderItem={({ item: { screen, image, title } }) => (
				<TouchableOpacity
					onPress={() => navigation.navigate(screen)}
					style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
					disabled={!origin}>
					<View style={tw`${!origin && 'opacity-20'}`}>
						<Image
							style={{ width: 120, height: 120, resizeMode: 'contain' }}
							source={{
								uri: image,
							}}
						/>
						<Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
						<Icon
							style={tw`p-2 bg-black rounded-full w-10 mt-4`}
							name='arrowright'
							color='white'
							type='antdesign'
						/>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavOptions;

const styles = StyleSheet.create({});
