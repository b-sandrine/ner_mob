import { TouchableOpacity , Text, StyleSheet} from "react-native";

export default function CustomButton ({title,onPress, style}) {
    return (
        <TouchableOpacity style={[styles.button, style]}  onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#40A8EA',
        height: 50,
        width: 250,
        borderRadius: 10,
        margin: 10,
        paddingTop: 8,
        textAlign: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
    }
})