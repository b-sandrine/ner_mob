import React, { useState } from "react";
import { View, Image, Button } from "react-native";
import ImagePicker from 'react-native-image-picker'

const ProfilePictureUploader = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const selectImage = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        setProfilePicture(source);
      }
    });
  };

  return (
    <View>
      {profilePicture && <Image source={profilePicture} style={{ width: 200, height: 200 }} />}
      <Button title="Select Image" onPress={selectImage} />
    </View>
  );
};

export default ProfilePictureUploader;
