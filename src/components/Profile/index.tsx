import React, { useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { useAuth } from '../../hooks/auth'
import { RectButton } from 'react-native-gesture-handler'
import { LogoutView } from '../LogoutView'
import { ButtonOut } from '../ButtonOut'

import { Avatar } from '../Avatar'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'


export function Profile() {
    const { user, signOut } = useAuth()


    function handleSignOut() {
        Alert.alert('Logout', 'Deseja sair do gameplay?',
            [
                {
                    text: 'Não',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => signOut()
                }
            ]

        )
    }


    return (
        <View style={styles.container}>

            <RectButton onPress={handleSignOut}>
                <Avatar
                    urlImage={user.avatar}
                />
            </RectButton>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    )
}

