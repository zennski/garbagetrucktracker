import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import React from 'react'
import Logo from  '../../../assets/images/company_logo.png'
import CustomInput from '../../components/CustomInput';

const SignInScreen = () => {
  const {height} = useWindowDimensions();

  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]}
      />

      <CustomInput />
      <CustomInput />
    </View>
  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 250,
    },
});

export default SignInScreen