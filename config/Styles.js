import { Platform } from 'react-native';

import colors from './Colors';

export default {
    colors, 
    text: {
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        fontSize: 18,
        color: colors.dark,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    }
};
