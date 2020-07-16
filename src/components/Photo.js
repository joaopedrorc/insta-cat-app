import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Photo = ({ file, count }) => {
  const [like, setLike] = useState(count);


  const increment = () => {
    setLike(like + 1);
  }



  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={file}
      />

      <TouchableOpacity onPress={increment}>
        <Text style={styles.text}>{like} Likes</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 180,
    width: 180,
  },
  text: {
    fontSize: 20,
    marginVertical: 20,
  }
});


export default Photo;











