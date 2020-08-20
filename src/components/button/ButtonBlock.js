import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Button, Text, Icon } from 'native-base';

export default class ButtonBlock extends Component {

    render() {
        return(
            <Container style={styles.container}>
                <Body>
                    <Content>
                        <Text>Block Button</Text>
                        <Button block light>
                            <Text>Light</Text>
                        </Button>
                        <Button block primary>
                            <Text>Primary</Text>
                        </Button>
                        <Button block success>
                            <Text>Success</Text>
                        </Button>
                        <Button block info>
                            <Text>Info</Text>
                        </Button>
                        <Button block warning>
                            <Text>Warning</Text>
                        </Button>
                        <Button block danger>
                            <Text>Danger</Text>
                        </Button>
                        <Button block dark>
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