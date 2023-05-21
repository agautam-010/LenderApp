import React, {useRef} from 'react';
import {
  SafeAreaView,
  Alert,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {WebView} from 'react-native-webview';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

export default function App() {
  const webviewRef = useRef();
  const HTML_CONTENT = ` 
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body
    style="
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background-color:#EDEEF3;
    "
  >
    <button
    onclick="sendDataToReactNativeApp()"
      style="
        padding: 10;
        padding-top: 10px;
        padding-right: 20px;
        padding-bottom: 10px;
        padding-left: 20px;
        font-size: 16;
        color: white;
        background-color: #01B99F;
        border-radius: 25px;
      "
    >
    Native Alert
    </button>
    <script>
      const sendDataToReactNativeApp = async () => {
        window.ReactNativeWebView.postMessage('Clicked in webview page');
      };
      window.addEventListener("message", message => {
        alert(message.data) 
      });
    </script>
  </body>
</html> `;

  const onMessage = data => Alert.alert(data.nativeEvent.data);

  const sendDataToWebView = () =>
    webviewRef.current.postMessage('Sent from React Native App');

  const Tegs = ({tags}) => {
    return tags.map((tag, index) => (
      <View
        style={[styles.tagBody, {marginLeft: index ? 5 : 0}]}
        key={`${tag}-${index}`}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '600',
            color: '#5A6B87',
          }}>{`#${tag}`}</Text>
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Entypo name="chevron-thin-left" size={24} color="black" />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>자유톡</Text>
        <FontAwesome5 name="bell" size={24} color="#AFB9CA" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.body}>
          <View>
            <View style={styles.commentHead}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.imageView}>
                  <Image
                    source={require('./assets/test/자산9.png')}
                    style={{width: 40, height: 40}}
                  />
                </View>
                <View style={{marginLeft: 5}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold'}}>안녕 나 응애</Text>
                    <AntDesign
                      name="checkcircle"
                      size={14}
                      color="#01B99F"
                      style={{marginLeft: 5}}
                    />
                    <Text
                      style={{fontSize: 11, color: '#919EB6', marginLeft: 5}}>
                      1일전
                    </Text>
                  </View>
                  <Text style={{color: '#919EB6', fontSize: 13}}>
                    165cm - 53kg
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.commHeadBtn}>
                <Text style={{color: '#fff'}}>팔로우</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 250,
              justifyContent: 'space-evenly',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?
            </Text>
            <Text style={styles.commentText}>
              지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
              혹시 어떤 상품이 제일 괜찮았어?
            </Text>
            <Text style={styles.commentText}>
              후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이
              제일 재밌었다던데 맞아???
            </Text>
            <Text style={styles.commentText}>
              올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
              아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
              있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!
            </Text>
          </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Tegs
              tags={['2023', 'TODAYISMONDAY', 'TOP', 'POPS!', 'WOW', 'ROW']}
            />
          </View>
        </View>
        <View
          style={{
            height: 400,
            backgroundColor: '#EDEEF3',
            marginTop: 15,
          }}>
          <WebView
            source={{
              html: HTML_CONTENT,
            }}
            ref={webviewRef}
            scalesPageToFit={false}
            mixedContentMode="compatibility"
            onMessage={onMessage}
          />
        </View>
        <View style={[styles.body]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.wvAlertBody}>
              <Octicons name="heart" size={24} color="#AFB9CA" />
              <Text style={styles.commActBtn}>5</Text>
              <MaterialCommunityIcons
                name="comment-processing-outline"
                size={24}
                color="#AFB9CA"
                style={{marginLeft: 15}}
              />
              <Text style={styles.commActBtn}>5</Text>
              <Feather
                name="bookmark"
                size={24}
                color="#AFB9CA"
                style={{marginLeft: 15}}
              />

              <Entypo
                name="dots-three-horizontal"
                size={16}
                color="#AFB9CA"
                style={{marginLeft: 30}}
              />
            </View>
            <TouchableOpacity style={[styles.btn]} onPress={sendDataToWebView}>
              <Text style={{color: '#fff'}}>WV Alert</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.comments}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.imageView}>
                  <Image
                    source={require('./assets/test/자산9.png')}
                    style={{width: 40, height: 40}}
                  />
                </View>
                <View style={{marginLeft: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold'}}>안녕 나 응애</Text>
                    <AntDesign
                      name="checkcircle"
                      size={14}
                      color="#01B99F"
                      style={{marginLeft: 5}}
                    />
                    <Text
                      style={{fontSize: 11, color: '#919EB6', marginLeft: 5}}>
                      1일전
                    </Text>
                  </View>
                </View>
              </View>
              <Entypo name="dots-three-horizontal" size={16} color="#AFB9CA" />
            </View>
            <View style={{marginLeft: 60}}>
              <Text style={styles.commentText}>
                어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
                아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런
                제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브
                리뷰 올라온다고 하니 꼭 봐주세용~!
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Octicons name="heart" size={20} color="#AFB9CA" />
                <Text style={styles.commActBtn}>5</Text>
                <MaterialCommunityIcons
                  name="comment-processing-outline"
                  size={20}
                  color="#AFB9CA"
                  style={{marginLeft: 15}}
                />
                <Text style={styles.commActBtn}>5</Text>
              </View>
              <View style={styles.newComment}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={[styles.imageView, {backgroundColor: '#FBB0AE'}]}>
                      <Image
                        source={require('./assets/test/자산10.png')}
                        style={{width: 40, height: 40}}
                      />
                    </View>
                    <View style={{marginLeft: 10}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                          ㅇㅅㅇ
                        </Text>
                        <Text style={{color: '#919EB6'}}>1일전</Text>
                      </View>
                    </View>
                  </View>
                  <Entypo
                    name="dots-three-horizontal"
                    size={16}
                    color="#AFB9CA"
                  />
                </View>
                <View style={{marginLeft: 60}}>
                  <Text style={styles.commentText}>
                    오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <Octicons name="heart" size={20} color="#AFB9CA" />
                    <Text style={styles.commActBtn}>5</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginVertical: 5}}>
          <TextInput
            style={styles.commInput}
            placeholder="댓글을 남겨주세요."
          />
          <Octicons
            name="image"
            size={25}
            color="#919EB6"
            style={{position: 'absolute', margin: 13}}
          />
          <Text style={styles.inputRightText}>등록</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  body: {paddingHorizontal: 15},
  tagBody: {
    height: 30,
    backgroundColor: '#F7F8FA',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#CED3DE',
    borderWidth: 1,
  },
  comments: {marginTop: 15},
  imageView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFDCA9',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  commentHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,

    alignItems: 'center',
  },
  commHeadBtn: {
    width: 70,
    height: 30,
    backgroundColor: '#01B99F',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 33,
    backgroundColor: '#01B99F',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  newComment: {marginTop: 15},
  commentText: {color: '#313B49'},
  commActBtn: {marginLeft: 5, fontSize: 11, color: '#AFB9CA'},
  wvAlertBody: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderBottomColor: '#F7F8FA',
    borderBottomWidth: 2,
  },
  commInput: {
    borderWidth: 2,
    borderColor: '#fff',
    height: 50,
    borderTopColor: '#F7F8FA',
    paddingLeft: 60,
  },
  inputRightText: {
    position: 'absolute',
    right: 0,
    margin: 20,
    color: '#919EB6',
  },
});
