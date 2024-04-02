import React from 'react';
import { StyleSheet } from "react-native";
import { Box } from '@gluestack-ui/themed';

const Header = () => {
  return (
    <Box style={styles.header}/>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    height: 60,
    shadowColor: "#000"
  }
})

export default Header;