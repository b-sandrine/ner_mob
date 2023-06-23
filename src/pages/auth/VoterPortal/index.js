import axios from "axios";
import { View, Text, StyleSheet } from "react-native";
import APP_URL from "../../../config/url";
import { useState, useEffect } from "react";

export default function VoterPortal() {
    const [candidates, setCandidates] = useState([]);
    const [votes, setVotes] = useState({
        voteNumber: "",
        candidateId: ""
    });
    const [error, setError] = useState('')

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

    const fetchVotes = async (id) => {
        try {

            await axios.get(`${APP_URL}/votes/number/${id}`)
                .then((response) => {
                    console.log(response)
                    setVotes({
                        voteNumber: response.data.votes,
                        candidateId: id
                    })
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


    const updateVotes = async (id) => {
        try {
            // Increment the vote number
            const updatedVoteNumber = votes.voteNumber + 1;

            // Update the votes state with the new vote number and candidate ID
            setVotes({
                voteNumber: updatedVoteNumber,
                candidateId: id,
            });

            // Send the updated votes to the backend
            await axios
                .put(`${APP_URL}/votes/update/${id}`, { votes: updatedVoteNumber })
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                    setError(err.response.data.error);
                });
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <View>
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
                                <Text>Vote</Text>
                                <Text onPress={() => createCandidateVotes(candidate._id)}>View votes</Text>
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