import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './readucers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends Component<{}> {
	componentWillMount(){
		const config = {
			apiKey: "AIzaSyBQnGRfNy2NFOo8AQnN8o52AqAlD1QF_sk",
			authDomain: "manager-b4a3d.firebaseapp.com",
			databaseURL: "https://manager-b4a3d.firebaseio.com",
			projectId: "manager-b4a3d",
			storageBucket: "manager-b4a3d.appspot.com",
			messagingSenderId: "244437999976"
		};
		firebase.initializeApp(config);

	}
	render() {
		return (
			<Provider
				store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
				<View>
					<LoginForm/>
				</View>
			</Provider>
		);
	}
}
