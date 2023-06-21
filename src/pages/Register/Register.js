import { Text, View, StyleSheet , TextInput} from "react-native";
// import Input from "../../components/Input";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import axios from "axios";

export default function Register({navigation}) {
    
    const [user, setUser] = useState({
        fullnames: "",
        address: "",
        email: "",
        phoneNumber: "",
        nid: "",
        password: ""
    })
    const [error, setError] = useState(''); 

    const handleInputChange = (name, value) => {
        setUser({...user, [name]: value})
    }

    const handleLoginNavigation = () => {
        navigation.navigate('login');
    }

    const handleFormSubmit = () => {
        console.log(user)
        axios.post('http://localhost:3000/api/users/create',user)
        .then((response) => {
            console.log(response);
            navigation.navigate('login');
        })    
        .catch((err) => {
            console.log(err);
            setError(err.response.data.error)
        })
    }
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Sign up to Continue</Text>
                <Text style={styles.minText}>Almost there</Text>
            </View>
            {error && <Text style={styles.error}>{error}</Text>}

            <View>
                <TextInput
                    placeholder="Full Names"
                    name= "fullnames"
                    style={styles.textInput}
                    onChangeText={(text) => handleInputChange("fullnames", text)}
                    value={user.fullnames}
                />
                <TextInput
                    placeholder="Address"
                    name= "address"
                    style={styles.textInput}
                    onChangeText={(text) => handleInputChange("address", text)}
                    value={user.address}
                />
                <TextInput
                    placeholder="Email"
                    name= "email"
                    style={styles.textInput}
                    onChangeText={(text) => handleInputChange("email", text)}
                    value={user.email}
                />
                <TextInput
                    placeholder="Phone Number"
                    name= "phone"
                    style={styles.textInput}
                    onChangeText={(text) => handleInputChange("phoneNumber", text)}
                    value={user.phone}
                />
                <TextInput
                    placeholder="National ID"
                    name= "nid"
                    style={styles.textInput}
                    onChangeText={(text) => handleInputChange("nid", text)}
                    value={user.nid}
                />
                <TextInput
                    placeholder="Password"
                    name = "password"
                    secureTextEntry={true}
                    style={styles.textInput}
                    onChangeText={(text) => handleInputChange("password", text)}
                    value={user.password}
                />
                <CustomButton 
                    title="Sign Up"
                    onPress={handleFormSubmit} 
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>OR</Text>
                <Text style={styles.minText}>Already have an account? <Text style={{color: '#018CE3'}} onPress={handleLoginNavigation}>Login</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center'
    },
    textContainer: {
        marginTop: 25,
        marginBottom: 25,
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