import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Button, Text, Icon } from 'native-base';

export default class ButtonTransparent extends Component {

    render() {
        return(
            <Container style={styles.container}>
                <Body>
                    <Content>
                        <Text>Transparent Button</Text>
                        <Button transparent light>
                            <Text>Light</Text>
                        </Button>
                        <Button transparent primary>
                            <Text>Primary</Text>
                        </Button>
                        <Button transparent success>
                            <Text>Success</Text>
                        </Button>
                        <Button transparent info>
                            <Text>Info</Text>
                        </Button>
                        <Button transparent warning>
                            <Text>Warning</Text>
                        </Button>
                        <Button transparent danger>
                            <Text>Danger</Text>
                        </Button>
                        <Button transparent dark>
                            <Text>Dark</Text>
                        </Button>
                    </Content>
                </Body>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'auto'
	},
});