import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        light400: '#6200EE',
        primary700: '#666666',
    },
};

export default MyTheme;