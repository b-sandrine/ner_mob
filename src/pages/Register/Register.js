import { Text, View, StyleSheet , TextInput} from "react-native";
// import Input from "../../components/Input";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";

export default function Register() {
    const [user, setUser] = [{
        fullnames: "",
        address: "",
        email: "",
        phone: "",
        nid: "",
        password: ""
    }]

    const handleInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Sign up to Continue</Text>
                <Text style={styles.minText}>Almost there</Text>
            </View>
            <View>
                <TextInput
                    placeholder="Full Names"
                    name= "fullnames"
                    style={styles.textInput}
                    onChangeText={handleInputChange}
                    value={user.fullnames}
                />
                <TextInput
                    placeholder="Address"
                    name= "address"
                    style={styles.textInput}
                    onChangeText={handleInputChange}
                    value={user.address}
                />
                <TextInput
                    placeholder="Email"
                    name= "email"
                    style={styles.textInput}
                    onChangeText={handleInputChange}
                    value={user.email}
                />
                <TextInput
                    placeholder="Phone Number"
                    name= "phone"
                    style={styles.textInput}
                    onChangeText={handleInputChange}
                    value={user.phone}
                />
                <TextInput
                    placeholder="National ID"
                    name= "nid"
                    style={styles.textInput}
                    onChangeText={handleInputChange}
                    value={user.nid}
                />
                <TextInput
                    placeholder="Password"
                    name = "password"
                    style={styles.textInput}
                    onChangeText={handleInputChange}
                    value={user.password}
                />
                <CustomButton 
                    title="Login" 
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>OR</Text>
                <Text style={styles.minText}>Already have an account? <Text style={{color: '#018CE3'}}>Login</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
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