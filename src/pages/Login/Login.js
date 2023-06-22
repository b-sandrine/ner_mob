import { Text, View, StyleSheet, TextInput } from "react-native";
// import Input from "../../components/Input";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import axios from "axios";
import authService from "../../service/authService";

export default function Login({ navigation }) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState('');

    const handleInputChange = (name, value) => {
        setUser({ ...user, [name]: value });
    }

    const handleRegisterNavigation = () => {
        navigation.navigate('register')
    }

    const handleFormSubmit = () => {
        console.log(user);

        axios.post('http://localhost:3000/api/users/login', user)
            .then((response) => {
                console.log(response);
                const token = response.data.payload.token;
                const role = response.data.payload.user.role;

                console.log(token + "  " + role);
                authService.storeAuthToken(token);
                authService.storeRole(role);
                navigation.navigate('dashboard');
            })
            .catch((err) => {
                console.log(err.response.error.data);
                setError(err.response.error.data)
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Welcome back</Text>
                <Text style={styles.minText}>Login to access your account</Text>
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
            <View>
                <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                    onChangeText={(text) => handleInputChange('email', text)}
                    value={user.email}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    secureTextEntry={true}
                    onChangeText={(text) => handleInputChange('password', text)}
                    value={user.password}
                />
                <CustomButton
                    title="Login"
                    onPress={handleFormSubmit}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>OR</Text>
                <Text style={styles.minText}>Do not have an account?  <Text style={{ color: '#018CE3' }} onPress={handleRegisterNavigation}>Register</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
        textAlign: 'center'
    },
    textContainer: {
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    text: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 5,
        color: '#4F4F4F',
    },
    minText: {
        alignSelf: 'center',
        fontSize: 16,
        margin: 5,
        color: '#4F4F4F',
    },
    textInput: {
        width: 260,
        height: 50,
        marginBottom: 10,
        marginTop: 5,
        borderRadius: 5,
        color: '#4F4F4F',
        padding: 7,
        backgroundColor: 'rgba(217, 217, 217, 0.76)',
    },
    error: {
        color: "red",
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center'
    }
})