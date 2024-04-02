import React from "react";
import BookList from "../conponents/BookList";
import BookData from "../json/Book.json";
import { Box } from "@gluestack-ui/themed";


const BookScreen = () => {
    return(
        <Box style={{ backgroundColor: "#fff", height: 800 }}>
            <BookList list={BookData} />
        </Box>
    );
};

export default BookScreen;