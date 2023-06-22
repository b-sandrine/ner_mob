import CustomButton from "../../../components/CustomButton"
import { Text, View } from "react-native"
import { useState } from "react"
// import candidateService from "../../../service/candidateServices"
import { useEffect } from "react"
import APP_URL from "../../../config/url"
import axios from "axios"

export default function AdminPortal ({navigation}) {
    const handleAddCandate = () => {
        navigation.navigate('addCandidate')
    }

    const [candidates, setCandidates] = useState([]);
    
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
            <Text>Welcome back admin portal</Text>
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