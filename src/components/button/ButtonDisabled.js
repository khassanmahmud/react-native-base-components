import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Button, Text, Icon } from 'native-base';

export default class ButtonDisabled extends Component {

    render() {
        return(
            <Container style={styles.container}>
                <Body>
                    <Content>
                        <Text>Disabled Button</Text>
                        <Button disabled>
                            <Text>Default</Text>
                        </Button>
                        <Button disabled bordered>
                            <Text>Outline</Text>
                        </Button>
                        <Button disabled rounded>
                            <Text>Rounded</Text>
                        </Button>
                        <Button disabled large>
                            <Text>Custom</Text>
                        </Button>
                        <Button disabled iconRight>
                            <Text>Icon Button</Text>
                            <Icon name="home" />
                        </Button>
                        <Button disabled block>
                            <Text>Block</Text>
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