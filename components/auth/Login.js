import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Left, Button, Icon, Body, Title, Content, Footer, FooterTab, Container, Form, Item, Label, Input, Text, View } from 'native-base';

const Login = () => {
    return (
        <Container>
            <Content padder>
                <Text style={styles.loginHeader}>Login</Text>
                <Button transparent>
                    <Text>
                        <Text style={styles.registerText}>Dont have Account ?</Text>
                        <Text style={{ color: 'red', fontWeight: 'bold' }}> Register</Text>
                    </Text>
                </Button>
                <Form style={{ padding: "5%", marginTop: '10%' }}>
                    <Item floatingLabel style={{ padding: 7, borderBottomWidth: 2 }}>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel style={{ padding: 7, borderBottomWidth: 2 }}>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>
                <View style={{ marginTop: '40%' }}>
                    <Button rounded danger iconLeft style={styles.loginButton}>
                        <Icon name='person' />
                        <Text style={styles.loginText}>Login</Text>
                    </Button>
                </View>
            </Content>
        </Container >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },
    loginHeader: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: '40%',
        marginLeft: "3.6%"
    },
    registerText: {
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',

    },
    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingHorizontal: '10%',
        marginHorizontal: '20%'
    },
    loginText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 19,

    }
});

export default Login
