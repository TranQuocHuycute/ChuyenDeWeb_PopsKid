import React from 'react'
import Cookies from 'js-cookie'
import Menu from '../../Layout/Popper/Menu'
import images from '../../../assets/images'

function ProfileButton() {
  const ITEMS = [
    {
      title: 'POPS kid learn',
      icon: images.learnIcon,
      to: '/learn',
    },
  ]
  const profile =
    'https://products.popsww.com/api/v2/containers/file2/profiles/pk20_profile_picture__1_-0727741cd4d3-1640912661200-l305wzS2.jpg?maxW=120&format=webp'
  const notProfile =
    'https://products.popsww.com/api/v2/containers/file2/profiles/icon-85c962223c75-1652689721090-fqJEDegy.png?maxW=120&format=webp'

  const isAuthenticated = () => {
    return Cookies.get('authToken') !== undefined
  }

  return (
    <Menu items={ITEMS} profile={profile}>
      <img
        className="w-9 h-9 mx-4"
        src={isAuthenticated() ? profile : notProfile}
        alt=""
      ></img>
    </Menu>
  )
}

export default ProfileButton
