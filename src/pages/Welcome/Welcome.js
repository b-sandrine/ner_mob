import { Button, View, Text, StyleSheet } from "react-native-web";
import CustomButton from "../../components/CustomButton";

export default function Welcome() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to NEC Voting System</Text>
            <View style={styles.buttonContainer}>
                <CustomButton title="Login" style={{width: 100 }} />
                <CustomButton title="Register" style={{width: 100}}  />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 100,
        textAlign: 'center'
    },
    text: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})