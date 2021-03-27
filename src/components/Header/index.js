/* eslint-disable react-native/no-inline-styles */
/**
 * @flow
 */

import * as React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Block, Text } from 'galio-framework'
import GojekIcon from '../Icon'
import Icon from 'react-native-vector-icons/Ionicons'

const makeStyles = (iconSize = 10) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    walletWrapper: {
      backgroundColor: '#00AED6',
      borderRadius: iconSize / 2,
      borderWidth: 2,
      borderColor: '#FFF',
      width: iconSize,
      height: iconSize,
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonIcon: {
      paddingHorizontal: 8,
    },
  })

const Header: () => React$Node = () => {
  const iconSize = 50
  const styles = makeStyles(iconSize)

  return (
    <Block style={styles.wrapper}>
      <Block style={styles.walletWrapper}>
        <GojekIcon name="gopay" size={iconSize / 1.4} color="#FFF" />
      </Block>
      <Block style={{ paddingHorizontal: 8 }}>
        <Block style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text p bold>
            108.000,00
          </Text>
          <Text muted style={{ marginLeft: 3 }}>
            IDR
          </Text>
        </Block>
        <Text muted bold>
          My Ballance
        </Text>
      </Block>
      <Block style={{ marginLeft: 'auto', flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity style={styles.buttonIcon}>
          <Icon name="search-outline" size={iconSize / 2} color="#888888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon}>
          <Icon name="mail-open-outline" size={iconSize / 2} color="#888888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon}>
          <Icon name="archive-outline" size={iconSize / 2} color="#888888" />
        </TouchableOpacity>
      </Block>
    </Block>
  )
}

export default Header
