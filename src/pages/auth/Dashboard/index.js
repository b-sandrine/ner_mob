import { View, Text } from "react-native"
import authService from "../../../service/authService"
import AdminPortal from "../AdminPortal/admin";
import VoterPortal from "../VoterPortal";

export default function Dashboard({navigation}) {
    
    const role = authService.getRole();

    return (
        <View>
            {role === 'admin' ? <AdminPortal navigation={navigation}/> : <VoterPortal/>}
        </View>
    )
}