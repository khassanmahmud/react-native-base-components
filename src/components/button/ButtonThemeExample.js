import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Content, Button, Text, Icon } from 'native-base';

import ButtonTheme from './ButtonTheme'
import ButtonTransparent from './ButtonTransparent'
import ButtonOutline from './ButtonOutline'
import ButtonRounded from './ButtonRounded'
import ButtonBlock from './ButtonBlock'
import ButtonFull from './ButtonFull'
import ButtonIcon from './ButtonIcon'
import ButtonSize from './ButtonSize'
import ButtonDisabled from './ButtonDisabled'

export default class ButtonThemeExample extends Component {

    render() {
        return(
            <Container style={styles.container}>
                <Body>
                    <Content>
                        <Text>Button</Text>
                        <Button>
                            <Text>General</Text>
                        </Button>

                        <ButtonTheme />
			            <ButtonTransparent />
                        <ButtonOutline />
                        <ButtonRounded />
                        <ButtonBlock />
                        <ButtonFull />
                        <ButtonIcon />
                        <ButtonSize />
                        <ButtonDisabled />
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