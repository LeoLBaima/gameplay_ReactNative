import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'



export function GuildIcon() {
    const uri = 'https://www.pngarts.com/files/12/Blue-Discord-Logo-Icon-PNG-Free-Download.png';

    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode='cover'
        />
    )
}

