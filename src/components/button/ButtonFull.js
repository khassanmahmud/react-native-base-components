import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Button, Text, Icon } from 'native-base';

export default class ButtonFull extends Component {

    render() {
        return(
            <Container style={styles.container}>
                <Body>
                    <Content>
                        <Text>Full Button</Text>
                        <Button full light>
                            <Text>Light</Text>
                        </Button>
                        <Button full primary>
                            <Text>Primary</Text>
                        </Button>
                        <Button full success>
                            <Text>Success</Text>
                        </Button>
                        <Button full info>
                            <Text>Info</Text>
                        </Button>
                        <Button full warning>
                            <Text>Warning</Text>
                        </Button>
                        <Button full danger>
                            <Text>Danger</Text>
                        </Button>
                        <Button full dark>
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