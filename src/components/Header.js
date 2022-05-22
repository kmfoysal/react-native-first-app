import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import Text from './Text/Text';

const Header= ({backBtn, title='The Planet'}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            { backBtn &&
            <Pressable onPress={()=> {navigation.goBack()}}>
                <Feather name="chevrons-left" size={40} color="white" />
            </Pressable>
            }
            <Text preset='h2' style={styles.h2}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: spacing[5],
        borderBottomWidth : 0.2,
        borderBottomColor: colors.offWhite,
        flexDirection : 'row',
        alignItems : 'center',
    },

    h2: {
        textTransform: 'uppercase',
        marginLeft : spacing[5]
    }

})

export default Header
