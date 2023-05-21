import { Image, Text, TouchableOpacity, ViewStyle } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { User } from '@zionchat/use-zion'
import { images } from 'lib/images'
import React from 'react'
import { isValidBase64Img } from 'lib/helpers'

interface CommunityMembersProps {
  member: User
  communityZid: string
  name?: string
  style?: ViewStyle
}

export const MemberItem = ({ member, style, communityZid }: CommunityMembersProps) => {
  const navigation = useNavigation()
  const goToProfile = (did: string) => {
    navigation.navigate('Profile', { did, communityZid })
  }
  const imgSrc = isValidBase64Img(member.img as never)
    ? { uri: member.img }
    : images.avatarPlaceholder
  return (
    <TouchableOpacity
      style={{ width: 100, height: 150, ...style }}
      activeOpacity={0.8}
      onPress={() => goToProfile(member.did as never)}
    >
      <Image
        source={imgSrc}
        style={{ height: 100, width: 100 }}
        resizeMode='cover'
        borderRadius={50}
      />
      <Text
        style={{ color: '#666', fontSize: 15, alignSelf: 'center', marginTop: 10 }}
        numberOfLines={2}
      >
        {member.name}
      </Text>
    </TouchableOpacity>
  )
}
