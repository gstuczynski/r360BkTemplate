import React from 'react';
import { StyleSheet, Text, VrButton, View } from 'react-360';

export default class Button extends React.Component {


  render() {
    this.styles = {
      button: {
        margin: 5,
        height: 50,
        width: 50,
        backgroundColor: 'red',
        zIndex: 100,
        top: this.props.top,
        left: this.props.left
      },
      text: {
        fontSize: 10,
        textAlign: 'center',
      },
    };
    return (
      <VrButton style={this.styles.button} onClick={() => this.props.callback()}>
      {console.log('left',this.props.left)}
        <Text style={this.styles.text}>TEST</Text>
      </VrButton>
    );
  }
}
