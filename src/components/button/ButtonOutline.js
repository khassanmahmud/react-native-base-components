import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Button, Text, Icon } from 'native-base';

export default class ButtonOutline extends Component {

    render() {
        return(
            <Container style={styles.container}>
                <Body>
                    <Content>
                        <Text>Outline Button</Text>
                        <Button bordered light>
                            <Text>Light</Text>
                        </Button>
                        <Button bordered primary>
                            <Text>Primary</Text>
                        </Button>
                        <Button bordered success>
                            <Text>Success</Text>
                        </Button>
                        <Button bordered info>
                            <Text>Info</Text>
                        </Button>
                        <Button bordered warning>
                            <Text>Warning</Text>
                        </Button>
                        <Button bordered danger>
                            <Text>Danger</Text>
                        </Button>
                        <Button bordered dark>
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