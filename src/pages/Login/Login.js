import { Text, View, StyleSheet , TextInput} from "react-native";
// import Input from "../../components/Input";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";

export default function Login() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        setInputValue(text);
    }
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Welcome back</Text>
                <Text style={styles.minText}>Login to access your account</Text>
            </View>
            <View>
                <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                    onChangeText={handleInputChange}
                    value={inputValue}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    onChangeText={handleInputChange}
                    value={inputValue}
                />
                <CustomButton 
                    title="Login" 
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>OR</Text>
                <Text style={styles.minText}>Do not have an account?  <Text style={{color: '#018CE3'}}>Register</Text></Text>
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
    }
})