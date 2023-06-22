import axios from "axios";
import { View, Text , StyleSheet} from "react-native";
import APP_URL from "../../../config/url";
import { useState, useEffect } from "react";

export default function VoterPortal () {
    const [candidates, setCandidates] = useState([]);
    const [votes, setVotes] = useState(0);
    const [error,setError] = useState('')

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

    const fetchVotes = async(id) => {
        try {

            await axios.get(`${APP_URL}/votes/number/${id}`)
            .then((response) => {
                console.log(response)
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
            <Text>All Available Candidates</Text>
            {error && <Text style={styles.error}>{error}</Text>}
            {candidates.map((candidate) => {
                return (
                    <View key={candidate._id}>
                        <Text>{candidate.fullnames}</Text>
                        <Text>{candidate.email}</Text>
                        <Text onPress={() => fetchVotes(candidate._id)}>view votes</Text>
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