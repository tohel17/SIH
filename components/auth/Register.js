import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Left, Button, Icon, Body, Title, Content, Footer, FooterTab, Container, Form, Item, Label, Input, Text, View } from 'native-base';

const Register = () => {
    return (
        <Container>
            <Content padder>
                <Text style={styles.registerHeader}>Register</Text>
                <Form style={{ paddingVertical: "5%", marginTop: '10%' }}>
                    <Item style={{ padding: 3, borderBottomWidth: 2 }}>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item style={{ padding: 3, borderBottomWidth: 2 }}>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>
                <View style={{ marginTop: '50%' }}>
                    <Button rounded danger iconLeft style={styles.registerButton}>
                        <Icon name='person' />
                        <Text style={styles.loginText}>Register</Text>
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
    registerHeader: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: '5%',
        textAlign: 'center'
    },
    registerText: {
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',

    },
    registerButton: {
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

export default Register
