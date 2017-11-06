import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

class GButton extends Component {
	render() {
		return (
			<View style={styles.square}>
				<Button
				  onPress={() => {}}
				  title={ this.props.title || "Button"}
				  color="#841584"
				  accessibilityLabel="Learn more about this purple button"
				/>
			</View>
		)
	}
}

export default GButton;

const styles = StyleSheet.create({
  square: {
    borderColor: 'pink',
    borderWidth: 2
  },
});