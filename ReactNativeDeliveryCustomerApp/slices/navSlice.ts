import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	origin: null,
	destination: null,
	travelTimeInformation: null,
};

export const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		setOrigin: (state, action) => {
			state.origin = action.payload;
		},
		setDestination: (state, action) => {
			state.destination = action.payload;
		},
		setTravelTimeInformation: (state, action) => {
			state.travelTimeInformation = action.payload;
		},
	},
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
	navSlice.actions;

// selectors

export const selectOrigin = (state: any) => state.nav.origin;
export const selectDestination = (state: any) => state.nav.destination;
export const selectTravelTimeInformation = (state: any) =>
	state.nav.travelTimeInformation;

export default navSlice.reducer;
// export const navSlice = createSlice({
// 	name: 'counter',
// 	initialState: {
// 		value: 0,
// 	},
// 	reducers: {
// 		increment: (state) => {
// 			// Redux Toolkit allows us to write "mutating" logic in reducers. It
// 			// doesn't actually mutate the state because it uses the Immer library,
// 			// which detects changes to a "draft state" and produces a brand new
// 			// immutable state based off those changes
// 			state.value += 1;
// 		},
// 		decrement: (state) => {
// 			state.value -= 1;
// 		},
// 		incrementByAmount: (state, action) => {
// 			state.value += action.payload;
// 		},
// 	},
// });

// // Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = navSlice.actions;

// export default navSlice.reducer;
