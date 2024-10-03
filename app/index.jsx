import { useState } from 'react'
import { View, Text, Pressable, ImageBackground } from 'react-native'
import styles from './styles'
import Input from './Input/Input'

const SignUp = function () {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const catchAPI = function () {
        fetch('https://taskhub-s37f.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nome": nome,
                "email": email,
                "senha": senha
            })
        })
            .then((res) => {if(res.status == 200) alert("Usuario criado com sucesso!")})
            .catch((error) => console.error("Error: ", error));
    }

    return (
        <ImageBackground source={{uri: "https://picfiles.alphacoders.com/644/thumb-350-644730.webp"}} resizeMode="cover" style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', opacity: 0.6}}>
            <View style={styles.layout}>
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                <Input title="Nome" variable={nome} set={setNome}></Input>
                <Input title="Email" variable={email} set={setEmail}></Input>
                <Input title="Senha" variable={senha} set={setSenha}></Input>
                <Pressable onPress={catchAPI} style={styles.pressable}><Text style={{ fontSize: 17, color: '#FFFFFF' }}>Sign up</Text></Pressable>
                <Text>{nome} {email} {senha}</Text>
            </View>
            </View>
        </ImageBackground>

    )
}

export default SignUp