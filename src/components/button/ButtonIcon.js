import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Button, Text, Icon } from 'native-base';

export default class ButtonIcon extends Component {

    render() {
        return(
            <Container style={styles.container}>
                <Body>
                    <Content>
                        <Text>Icon Button</Text>
                        <Button iconLeft light>
                            <Icon name='arrow-back' />
                            <Text>Back</Text>
                        </Button>
                        <Button iconRight light>
                            <Text>Next</Text>
                            <Icon name='arrow-forward' />
                        </Button>
                        <Button iconLeft>
                            <Icon name='home' />
                            <Text>Home</Text>
                        </Button>
                        <Button iconLeft transparent primary>
                            <Icon name='beer' />
                            <Text>Pub</Text>
                        </Button>
                        <Button iconLeft dark>
                            <Icon name='cog' />
                            <Text>Settings</Text>
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