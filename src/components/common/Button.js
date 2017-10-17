import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
	const {buttonStyle, textStyle} = styles;
	return (
		<TouchableOpacity
			onPress={onPress}
			style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	textStyle: {
		alignSelf: 'center',
		fontSize: 16,
		fontWeight: '600',
		padding: 10,
	},
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'blue',
		margin: 5,
	}
};

export {Button};