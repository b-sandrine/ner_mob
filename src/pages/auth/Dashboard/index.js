import { View, Text } from "react-native"
import authService from "../../../service/authService"
import CustomButton from "../../../components/CustomButton"

export default function Dashboard({navigation}) {

    const handleAddCandate = () => {
        navigation.navigate('addCandidate')
    }

    return (
        <View>
            <Text>Welcome back {authService.getRole()}!</Text>
            <CustomButton
                title="Add Candidate"
                onPress={handleAddCandate}
            />
        </View>
    )
}