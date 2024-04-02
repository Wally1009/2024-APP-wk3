import React from "react";
import BookDetail from "../conponents/BookDetail";
import { SectionList, FlatList, Text, StyleSheet } from "react-native";

const BookList = ({list}) => {
    const renderSection = ({section}) => (
        <>
            <Text style={style.title}>{section.title}</Text>
            <FlatList
                horizontal={true}
                data={section.data}
                renderItem={({ item }) => <BookDetail Book={item} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.key}
            />
        </>
    );
    const render = () => {
        return null;
    };
    return(
        <SectionList
        sections={list}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        stickySectionHeadersEnabled={false}
        showsHorizontalScrollIndicator={false}
        renderSectionHeader={renderSection}
        renderItem={render}
        keyExtractor={item => item.title}
        />
    );
    
};

const style = StyleSheet.create({
    title: {
      fontFamily: "Roboto",
      fontSize: 24,
      fontWeight: "bold",
      paddingLeft: 10,
      paddingTop:10
    }
  })
  


  export default BookList;