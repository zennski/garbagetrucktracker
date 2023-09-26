import { View, Text , TextInput, StyleSheet} from 'react-native'
import React from 'react'

const CustomInput = () => {
  return (
    <View style={StyleSheet.container}>
      <TextInput placeholder="placeholder" style={styles.input} />
    </View>
  );
};

const styles= StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: '100%', 
        flex: 1,
        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        
    },
    input: {},
});

export default CustomInput