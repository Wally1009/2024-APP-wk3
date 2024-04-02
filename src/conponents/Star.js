import React from "react";
import { Image, StyleSheet } from "react-native";
import { Box } from "@gluestack-ui/themed";

const Stars = ({count}) => {
    const starlist =[];
    for (let i = 0; i < count; i++) {
        starlist.push(<Image source={require("../img/icon_star_filled.png")} style={styles.star} />)
    }
    let s = starlist.length;
    while (s < 5) {
        starlist.push(<Image source={require("../img/icon_star_empty.png")} style={styles.star} />)
        s = starlist.length;
    }
    
    return (
        <Box style={{ flexDirection: "row" }}>
            {starlist}
        </Box>
    )
}

const styles = StyleSheet.create({
    star: {
      marginLeft: 1,
      marginRight: 2
    }
  })
  
  export default Stars;