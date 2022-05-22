import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import { colors } from '../theme/colors'

const Home= () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.black}}>
            <View>
                <Header />
            </View>
        </SafeAreaView>
    )
}

export default Home
