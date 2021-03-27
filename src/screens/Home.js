/* eslint-disable react-native/no-inline-styles */
/**
 * @format
 * @flow
 */

import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon as GojekIcon, Card, Header } from '../components'
import { Block, Text } from 'galio-framework'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const cards = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1494252713559-f26b4bf0b174?w=840&q=300',
    title: 'Discounts for Monday',
    caption: 'Et voluptate eu id ipsum qui mollit eu.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1503631285924-e1544dce8b28?&w=1200&h=1600&fit=crop&crop=entropy&q=300',
    title: 'Discounts for Monday',
    caption: 'Cupidatat sint anim in irure qui.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300',
    title: 'Discounts for Monday',
    caption:
      'Laboris Lorem ullamco ad ad pariatur ea labore ut elit incididunt amet adipisicing enim.',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1490049350474-498de43bc885?&w=1600&h=900&fit=crop&crop=entropy&q=300',
    title: 'Discounts for Monday',
    caption: 'Sint ex occaecat ipsum veniam enim eu irure.',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1493612216891-65cbf3b5c420?&w=1500&h=900&fit=crop&crop=entropy&q=300',
    title: 'Discounts for Monday',
    caption: 'Duis nulla laborum esse sint nostrud esse consectetur enim enim magna do.',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1506321806993-0e39f809ae59?&w=1500&h=1900&fit=crop&crop=entropy&q=300',
    title: 'Discounts for Monday',
    caption:
      'Mollit dolore ad consequat eu id voluptate voluptate commodo tempor ex sunt exercitation.',
  },
]

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#00AED6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardButtonIcon: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  cardButtonIconText: {
    marginTop: 4,
    color: '#FFF',
  },
  buttonIcon: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonIconBox: {
    backgroundColor: '#FFF',
    marginVertical: 10,
    shadowColor: '#888',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsCard: {
    marginBottom: 20,
  },
  newsCardFooter: {
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
})

const Home: () => React$Node = () => {
  const insets = useSafeAreaInsets()

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f9f9f9' }}
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom + 80,
        paddingHorizontal: 15,
        marginTop: 15,
        marginLeft: insets.left,
        marginRight: insets.right,
      }}>
      <Header />
      <ImageBackground source={require('../images/bg-card.png')} style={styles.card}>
        <TouchableOpacity style={styles.cardButtonIcon}>
          <Icon name="card-outline" size={30} color="#FFF" />
          <Text muted style={styles.cardButtonIconText} bold>
            Payment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButtonIcon}>
          <Icon name="pricetags-outline" size={30} color="#FFF" />
          <Text muted style={styles.cardButtonIconText} bold>
            Promo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButtonIcon}>
          <Icon name="add-circle-outline" size={30} color="#FFF" />
          <Text muted style={styles.cardButtonIconText} bold>
            Top Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButtonIcon}>
          <Icon name="apps-outline" size={30} color="#FFF" />
          <Text muted style={styles.cardButtonIconText} bold>
            More
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <Block style={{ marginTop: 12, flexWrap: 'wrap', flexDirection: 'row' }}>
        <TouchableOpacity style={styles.buttonIcon}>
          <Block style={styles.buttonIconBox}>
            <GojekIcon name="gocar" size={35} color="#00AA13" />
          </Block>
          <Text muted bold>
            GoCar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon}>
          <Block style={styles.buttonIconBox}>
            <GojekIcon name="goride" size={35} color="#00AA13" />
          </Block>
          <Text muted bold>
            GoRide
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon}>
          <Block style={styles.buttonIconBox}>
            <GojekIcon name="gofood" size={35} color="#EE2737" />
          </Block>
          <Text muted bold>
            GoFood
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon}>
          <Block style={styles.buttonIconBox}>
            <GojekIcon name="gotix" size={35} color="#DF1995" />
          </Block>
          <Text muted bold>
            GoTix
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon}>
          <Block style={styles.buttonIconBox}>
            <GojekIcon name="gobiz" size={35} color="#93328e" />
          </Block>
          <Text muted bold>
            GoBiz
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon}>
          <Block style={styles.buttonIconBox}>
            <GojekIcon name="paylater" size={35} color="#00AED6" />
          </Block>
          <Text muted bold>
            Paylater
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon}>
          <Block style={styles.buttonIconBox}>
            <GojekIcon name="gosend" size={35} color="#00AA13" />
          </Block>
          <Text muted bold>
            GoSend
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonIcon}>
          <Block style={styles.buttonIconBox}>
            <GojekIcon name="gomed" size={35} color="#EE2737" />
          </Block>
          <Text muted bold>
            GoMed
          </Text>
        </TouchableOpacity>
      </Block>
      <Block style={{ marginTop: 24 }}>
        <Text p bold style={{ marginBottom: 8 }}>
          Recommend for you
        </Text>
        <Block flex space="between">
          {cards &&
            cards.map((card, id) => (
              <Card
                flex
                shadow
                borderless
                key={`card-${card.image}`}
                shadowColor={'#000'}
                titleColor={'#000'}
                style={styles.newsCard}
                title={card.title}
                caption={card.caption}
                image={card.image}
                footerStyle={styles.newsCardFooter}
                avatarStyle={{ width: 0 }}
              />
            ))}
        </Block>
      </Block>
    </ScrollView>
  )
}

export default Home
