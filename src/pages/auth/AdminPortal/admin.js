import CustomButton from "../../../components/CustomButton"
import { Text, View , StyleSheet} from "react-native"
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
    const [error,setError] = useState('')
    const [approve, setApprove] = useState('approve')
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

    const createCandidateVotes = async(id) => {
        try {
            const [votes, setVotes]  = [{
                votes: 0,
                candidateId: id
            }]

            await axios.post(`${APP_URL}/votes/create`, votes)
            .then((response) => {
                console.log(response)
                setApprove('approved')
            }) 
            .catch((err) => {
                console.log(err)
                setError(err.response.data.error)
            })
        }
        catch(err) {
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
            {error && <Text style={styles.error}>{error}</Text>}
            {candidates.map((candidate) => {
                return (
                    <View key={candidate._id}>
                        <Text>{candidate.fullnames}</Text>
                        <Text>{candidate.email}</Text>
                        <Text onPress={() => createCandidateVotes(candidate._id)}>{approve}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        color: "red",
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center'
    }
})