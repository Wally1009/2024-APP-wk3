import React from "react";
import { StyleSheet, Image } from "react-native";
import { Box, Text, VStack, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";


import img0 from '../../src/img/img_book_fashinopolis.png';
import img1 from '../../src/img/img_book_chanel.png';
import img2 from '../../src/img/img_book_calligraphy.png';
import img3 from '../../src/img/img_book_ysl.png';
import img4 from '../../src/img/img_book_tbos.png';
import img5 from '../../src/img/img_book_stitchedup.png';

import Stars from './Star.js';

const imgs = [img0, img1, img2, img3, img4, img5];

const BookDetail = ({Book}) => {
    const { navigate } = useNavigation();
    return(
        <Box p={10} marginX={1} marginBottom={2} borderRadius={3} shadow={2}>
            <VStack bg="#fff">
                <VStack marginBottom={10}>
                    <Pressable onPress={() => navigate('Detail', Book) }>
                        <Image
                            source={imgs[Book.key]}
                            style={{ width: 140, height: 200 }}
                        />
                    </Pressable>
                </VStack>
                <VStack marginTop={0} marginBottom={5} paddingLeft={2} >
                    {Book.star > 0 ? <Stars count={Book.star} /> : null}
                    <Text bold style={styles.title}>{Book.title}</Text>
                    <Text style={styles.artist}>{Book.artist}</Text>
                </VStack>
            </VStack>
        </Box>
    )
};
 
const styles = StyleSheet.create({
    title: {
        fontFamily: "Roboto",
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5
      },
      artist: {
        fontFamily: "Roboto",
        fontSize: 14
      }
})

export default BookDetail;
