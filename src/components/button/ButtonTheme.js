import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Button, Text, Icon } from 'native-base';

export default class ButtonTheme extends Component {

    render() {
        return(
            <Container style={styles.container}>
                <Body>
                    <Content>
                        <Text>Button Theme</Text>
                        <Button light>
                            <Text>Light</Text>
                        </Button>
                        <Button primary>
                            <Text>Primary</Text>
                        </Button>
                        <Button success>
                            <Text>Success</Text>
                        </Button>
                        <Button info>
                            <Text>Info</Text>
                        </Button>
                        <Button warning>
                            <Text>Warning</Text>
                        </Button>
                        <Button danger>
                            <Text>Danger</Text>
                        </Button>
                        <Button dark>
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