/* eslint-disable react-native/no-inline-styles */
import * as React from 'react'
import GojekIcon from '../Icon'
import PropTypes from 'prop-types'
import { Block, Text } from 'galio-framework'
import Icon from 'react-native-vector-icons/Ionicons'
import { StyleSheet, TouchableOpacity } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

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

const Header = ({ isLoading, ...props }) => {
  const iconSize = 50
  const styles = makeStyles(iconSize)

  return (
    <Block style={styles.wrapper}>
      <Block style={styles.walletWrapper}>
        <GojekIcon name="gopay" size={iconSize / 1.4} color="#FFF" />
      </Block>
      {isLoading ? (
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item marginLeft={8}>
            <SkeletonPlaceholder.Item width={110} height={16} borderRadius={4} />
            <SkeletonPlaceholder.Item marginTop={4} width={80} height={14} borderRadius={4} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      ) : (
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
      )}
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

Header.defaultProps = {
  isLoading: false,
}

Header.propTypes = {
  isLoading: PropTypes.bool,
}

export default Header
