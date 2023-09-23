import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}>
        <Image
          source={require("../../assets/settings.png")}
          style={styles.iconImage}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/logo.png")}
        />
      </TouchableOpacity>
  
      <TouchableOpacity style={styles.icon}>
        <View style={styles.unredBadge}>
          <Text style={styles.unredBadgeText}>11</Text>
        </View>
        <Image
          source={require("../../assets/message.png")}
          style={styles.iconImage}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  icon: {
    width: 29,
    height: 29,
    marginHorizontal: 10,
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  unredBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },

  unredBadgeText: {
    color: 'white',
    fontWeight: '600',
  },
})

export default Header
