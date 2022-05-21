import React from 'react'
import { StyleSheet, Text as RnText, View } from 'react-native'
import { presets } from './Text.Preset'

const Text = ({children, preset = 'default', style }) => {

    const textStyles = StyleSheet.compose(presets[preset], style)

    return (
        <View>
           <RnText style={textStyles}>
            {children}
           </RnText>
        </View>
    )
}

export default Text
