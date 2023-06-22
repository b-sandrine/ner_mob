import { View, Text } from "react-native"
import authService from "../../../service/authService"
import CustomButton from "../../../components/CustomButton"
// import candidateService from "../../../service/candidateServices"
import { useEffect, useState } from "react"
import APP_URL from "../../../config/url"
import axios from "axios"

export default function Dashboard({ navigation }) {

    const handleAddCandate = () => {
        navigation.navigate('addCandidate')
    }

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        fetchCandidates();
    }, [])

    const fetchCandidates = async () => {
        try {
            await axios.get(`${APP_URL}/candidates/list`)
            .then((response) => {
                console.log(response.data.result)
                setCandidates(response.data.result);
            })
            .catch((err) => {
                console.log(err)
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <View>
            <Text>Welcome back {authService.getRole()}!</Text>
            <CustomButton
                title="Add Candidate"
                onPress={handleAddCandate}
            />
            <Text>All Available Candidates</Text>
            {candidates.map((candidate) => {
                return (
                    <View key={candidate._id}>
                        <Text>{candidate.fullnames}</Text>
                        <Text>{candidate.email}</Text>
                    </View>
                )
            })}
        </View>
    )
}