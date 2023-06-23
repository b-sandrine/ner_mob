import CustomButton from "../../../components/CustomButton"
import { Text, View, StyleSheet } from "react-native"
import { useState } from "react"
// import candidateService from "../../../service/candidateServices"
import { useEffect } from "react"
import APP_URL from "../../../config/url"
import axios from "axios"

export default function AdminPortal({ navigation }) {
    const handleAddCandate = () => {
        navigation.navigate('addCandidate')
    }

    const [candidates, setCandidates] = useState([]);
    const [error, setError] = useState('')
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

    const createCandidateVotes = async (id) => {
        try {
            const [votes, setVotes] = [{
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
        catch (err) {
            console.log(err)
        }
    }

    return (
        <View>
            <Text style={styles.header}>Welcome back admin portal</Text>
            <CustomButton
                title="Add Candidate"
                onPress={handleAddCandate}
                style={styles.button}
            />
            <Text style={styles.header}>All Available Candidates</Text>
            {error && <Text style={styles.error}>{error}</Text>}
            {candidates.map((candidate) => {
                return (
                    <View key={candidate._id} style={styles.candidate}>
                        <View style={styles.image}>
                            <Text>Image holder</Text>
                        </View>
                        <View style={styles.flex}>
                            <View style={styles.details}>
                                <Text style={styles.textBlack}>{candidate.fullnames}</Text>
                                <Text style={{color: '#4F4F4F'}}>{candidate.email}</Text>
                            </View>
                            <View>
                                <Text>View Votes</Text>
                                <Text onPress={() => createCandidateVotes(candidate._id)}>{approve}</Text>
                            </View>
                        </View>
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
    },
    header: {
        margin: 10,
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 700,
    },
    button: {
        alignSelf: 'center'
    },
    candidate: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        // height: 150,
        marginTop: 20,
        marginBottom: 10,
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    details: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    image : {
        height: 150,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding:10,
        borderRadius: 5
    },
    textBlack: {
        fontSize: 20,
        fontWeight: 500,
        color: '#4F4F4F'
    }
})