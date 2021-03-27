/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Block, Text } from 'galio-framework'

const Screen404 = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
      <Block flex justifyContent="center" alignItems="center">
        <Text h2 bold style={{ color: '#00AA13' }}>
          404
        </Text>
      </Block>
    </SafeAreaView>
  )
}

export default Screen404
