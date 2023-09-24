import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { USERS } from '../../data/Users'


const Stories = () => {
    return (
        <View style={{ marginTop: 13 }}>
            {/* <View style={{ marginBottom: 13 }}>  */}
            <ScrollView
                horizontal
                showHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index} style={{ alignItems: 'center' }}>
                        <Image source={{ uri: story.image }}
                            style={styles.story} />
                        <Text style={styles.userNames}>{
                            story.user.length > 15 ? story.user.slice(0, 10).toLowerCase()
                                : story.user.toLowerCase()}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginLeft: 9,
        borderWidth: 3,
        borderColor: '#ff8701'
    },
    userNames: {
        color: 'white',
        fontSize: 12,
    }
})

export default Stories