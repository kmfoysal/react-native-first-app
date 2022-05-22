import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Text from '../components/Text/Text'
import { PLANET_LIST } from '../data/planetList'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'

const Home= () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.black}}>
            <View>
                <Header />
                <FlatList 
                    contentContainerStyle={styles.list}
                    data={PLANET_LIST}
                    keyExtractor = {(item) => item.name }
                    renderItem={({item}) => {
                        return(
                            <Pressable onPress={() => navigation.navigate('Details') } style={styles.container}>
                                <View style={styles.left}>
                                    <View style={[styles.circle, {backgroundColor: item.color}]} />
                                    <Text preset='h4' style={styles.itemName}>{item.name}</Text>
                                </View>
                                <Feather name="chevron-right" size={24} color="white" />
                            </Pressable>
                        )
                    }}
                    ItemSeparatorComponent = {() => <View style={styles.separator}/>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    list : {
        padding: spacing[5],
    },

    left : {
        flexDirection : 'row',
        alignItems: 'center',
        padding: 20,
        paddingLeft : 0
    },

    circle : {
        height: 30,
        width: 30,
        borderRadius : 50,
        marginRight : spacing[9]
    },

    itemName : {
        textTransform : 'uppercase'
    },
    separator :{
        borderBottomColor : colors.offWhite,
        borderWidth : 0.2
    }

})

export default Home
