/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
} = React;

var Form = require('./components/Form');
var Messages = require('./components/Messages');

var data = [
	{
		date: 1445063492153,
		content: 'Hi! Ready for workshop?',
		author: 'Daniel Kijkov'
	},
	{
		date: 1445063535719,
		content: 'I was born to be ready',
		author: 'Vladimir Vanek'
	},
	{
		date: 1445063558454,
		content: 'Yo guys! Beer after workshop?',
		author: 'Josef Zavisek'
	},
	{
		date: 1445063565969,
		content: 'I am in :)',
		author: 'Vladimir Vanek'
	},
	{
		date: 1445063571618,
		content: 'Fo sho!',
		author: 'Daniel Kijkov'
	}
]

var Chat = React.createClass({
	getInitialState(){
		return {
			data: data
		}
	},
	addMessage(message) {
		var messages = this.state.data;

		var message = {
			date: Date.now(),
			content: message,
			author: 'Daniel Kijkov'
		}

		messages.push(message);
		this.setState({
			data: messages
		})
	},
	render: function() {
		return (
			<View style={styles.container}>
				<Messages data={this.state.data} />
				<Form add={this.addMessage} />
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

module.exports = Chat;
