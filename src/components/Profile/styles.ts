import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    user: {
        flexDirection: 'row',

    },
    greeting: {
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 6,
    },

    username: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading
    },

    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    },
    messageW: {
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.heading,
        textAlign: 'center',
        marginTop: 20
    },
    messageR: {
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: theme.colors.primary
    },
    buttonholder: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 13
    }
})