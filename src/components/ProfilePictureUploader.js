import React, { useState } from "react";
import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

const ProfilePictureUploader = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const imagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      }
    };

    launchImageLibrary(options, response => {
      if (response?.assets?.length > 0) {
        setProfilePicture(response.assets[0].url);
        console.log(response.assets[0].url);
      }
    });
  }

  return (
    <SafeAreaView>
      <View>
        {profilePicture && <Image source={{ uri: profilePicture }} style={{ width: 200, height: 200 }} />}
        <TouchableOpacity onPress={imagePicker} style={styles.button}>
          <Text style={styles.buttonText}>Select Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    height: 50,
    width: '60%',
    backgroundColor: 'skyblue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default ProfilePictureUploader;
