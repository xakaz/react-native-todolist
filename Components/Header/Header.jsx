import { Image, Text } from 'react-native'
import {s} from './Header.style'
import Logo from '../../assets/logo.png'

export default function Header() {
  return (
    <>
        <Image source={Logo} style={s.img} resizeMode='contain'/>
        <Text style={s.subtitle}>U got sumthin' 2 do !</Text>
    </>
  )
}
