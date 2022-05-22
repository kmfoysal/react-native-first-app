import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import Text from '../components/Text/Text'
import { colors } from '../theme/colors'

const Details= () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.black}}>
            <View>
                <Header backBtn={true} title='Details'/>
                <Text>Details</Text>
            </View>
        </SafeAreaView>
    )
}

export default Details
