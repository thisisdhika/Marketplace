import * as React from 'react'
import PropTypes from 'prop-types'
import { Block, Text } from 'galio-framework'
import { Image, StyleSheet } from 'react-native'
import GalioTheme, { withGalio } from 'galio-framework/src/theme'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const Card = ({
  isLoading,
  avatar,
  borderless,
  caption,
  captionColor,
  card,
  children,
  footerStyle,
  image,
  imageBlockStyle,
  imageStyle,
  shadow,
  style,
  styles,
  title,
  titleColor,
  theme,
  ...props
}) => {
  function renderImage() {
    if (!image) {
      return null
    }

    return (
      <Block card style={[styles.imageBlock, imageBlockStyle]}>
        {isLoading ? (
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item {...styles.image} {...imageStyle} />
          </SkeletonPlaceholder>
        ) : (
          <Image source={{ uri: image }} style={[styles.image, imageStyle]} />
        )}
      </Block>
    )
  }

  function renderAuthor() {
    return (
      <Block flex row style={[styles.footer, footerStyle]} space="between">
        <Block flex={1.7}>
          <Block style={styles.title}>
            {isLoading ? (
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  marginBottom={4}
                  height={theme.SIZES.FONT * 0.875}
                  borderRadius={3}
                  width={150}
                />
              </SkeletonPlaceholder>
            ) : (
              <Text size={theme.SIZES.FONT * 0.875} color={titleColor}>
                {title}
              </Text>
            )}
          </Block>
          <Block row space="between">
            <Block row right>
              {isLoading ? (
                <SkeletonPlaceholder>
                  <SkeletonPlaceholder.Item
                    marginTop={4}
                    height={theme.SIZES.FONT * 0.725}
                    borderRadius={3}
                    width={200}
                  />
                  <SkeletonPlaceholder.Item
                    marginTop={4}
                    height={theme.SIZES.FONT * 0.725}
                    borderRadius={3}
                    width={150}
                  />
                </SkeletonPlaceholder>
              ) : (
                <Text p muted size={theme.SIZES.FONT * 0.875} color={captionColor}>
                  {caption}
                </Text>
              )}
            </Block>
          </Block>
        </Block>
      </Block>
    )
  }

  const styleCard = [borderless && { borderWidth: 0 }, style]

  return (
    <Block {...props} card={card} shadow={shadow} style={styleCard}>
      {renderImage()}
      {renderAuthor()}
      {children}
    </Block>
  )
}

Card.defaultProps = {
  card: true,
  shadow: true,
  borderless: false,
  isLoading: false,
  styles: {},
  theme: GalioTheme,
  title: '',
  titleColor: '',
  caption: '',
  captionColor: '',
  footerStyle: {},
}

Card.propTypes = {
  card: PropTypes.bool,
  shadow: PropTypes.bool,
  borderless: PropTypes.bool,
  isLoading: PropTypes.bool,
  styles: PropTypes.any,
  theme: PropTypes.any,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  caption: PropTypes.string,
  captionColor: PropTypes.string,
  footerStyle: PropTypes.object,
}

const styles = theme =>
  StyleSheet.create({
    card: {
      borderWidth: 0,
      backgroundColor: theme.COLORS.WHITE,
      width: theme.SIZES.CARD_WIDTH,
      marginVertical: theme.SIZES.CARD_MARGIN_VERTICAL,
    },
    footer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingHorizontal: theme.SIZES.CARD_FOOTER_HORIZONTAL,
      paddingVertical: theme.SIZES.CARD_FOOTER_VERTICAL,
      backgroundColor: theme.COLORS.TRANSPARENT,
      zIndex: 1,
    },
    avatar: {
      width: theme.SIZES.CARD_AVATAR_WIDTH,
      height: theme.SIZES.CARD_AVATAR_HEIGHT,
      borderRadius: theme.SIZES.CARD_AVATAR_RADIUS,
    },
    title: {
      justifyContent: 'center',
    },
    imageBlock: {
      borderWidth: 0,
      overflow: 'hidden',
    },
    image: {
      width: 'auto',
      height: theme.SIZES.CARD_IMAGE_HEIGHT,
    },
    round: {
      borderRadius: theme.SIZES.CARD_ROUND,
    },
    rounded: {
      borderRadius: theme.SIZES.CARD_ROUNDED,
    },
  })

export default withGalio(Card, styles)
