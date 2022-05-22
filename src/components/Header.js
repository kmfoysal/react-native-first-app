import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from './Text/Text';

const Header= () => {
    return (
        <View style={styles.container}>
            <Text preset='h2' style={styles.h2}>The Planet</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: spacing[5],
        borderBottomWidth : 0.2,
        borderBottomColor: colors.offWhite
    },

    h2: {
        textTransform: 'uppercase'
    }

})

export default Header
