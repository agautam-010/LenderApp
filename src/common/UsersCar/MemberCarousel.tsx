import { Ionicons } from '@expo/vector-icons'
import { User } from '@zionchat/use-zion'
import { SCREEN_WIDTH } from 'lib/constants'
import { FlatList, Pressable, Text, View } from 'react-native'
import { NoRecordFound } from 'views/common'

import { MemberItem } from './MemberItem'

interface Props {
  members: User[]
  communityZid?: string
}

export const MemberCarousel = ({ members, communityZid }: Props) => {
  return (
    <>
      <View
        style={{
          marginTop: 30,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={{ flexDirection: 'row', marginBottom: 14 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Members</Text>
        </View>
        <Pressable
          style={{
            flexDirection: 'row',
            marginBottom: 14,
            paddingHorizontal: 8,
            paddingVertical: 4,
          }}
          onPress={() => console.log('hello')}
        >
          <Text style={{ fontSize: 13, paddingRight: 2, color: '#8A8A8F' }}>
            See all {members.length}
          </Text>
          <Ionicons name='chevron-forward' size={14} color='#8A8A8F' style={{ marginTop: 1 }} />
        </Pressable>
      </View>
      <FlatList
        scrollEnabled={members && members?.length ? true : false}
        horizontal
        data={members}
        renderItem={({ item }) => (
          <MemberItem
            key={item.did}
            member={item}
            style={{ marginRight: 20 }}
            communityZid={communityZid || ''}
          />
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.did}`}
        ListEmptyComponent={
          <View style={{ width: SCREEN_WIDTH - 30 }}>
            <NoRecordFound
              text='As memebers join the community, the recently active ones will show up here.
              Invite Friends'
              buttonLabel={'Invite friends'}
              onPress={() => {}}
            />
          </View>
        }
      />
    </>
  )
}
