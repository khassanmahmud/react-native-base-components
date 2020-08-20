import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Button, Text, Icon } from 'native-base';

export default class ButtonRounded extends Component {

    render() {
        return(
            <Container style={styles.container}>
                <Body>
                    <Content>
                        <Text>Rounded Button</Text>
                        <Button rounded light>
                            <Text>Light</Text>
                        </Button>
                        <Button rounded primary>
                            <Text>Primary</Text>
                        </Button>
                        <Button rounded success>
                            <Text>Success</Text>
                        </Button>
                        <Button rounded info>
                            <Text>Info</Text>
                        </Button>
                        <Button rounded warning>
                            <Text>Warning</Text>
                        </Button>
                        <Button rounded danger>
                            <Text>Danger</Text>
                        </Button>
                        <Button rounded dark>
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