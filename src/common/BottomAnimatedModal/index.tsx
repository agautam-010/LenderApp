import { useEffect } from 'react'
import { BUTTON_TYPE } from 'lib/enums'
import { AnimatePresence, MotiView } from 'moti'
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native'
import { Button } from 'views/common'
import { COLORS } from 'views/theme'
import { useStore } from 'lib/store'

interface BottomAnimatedModalProps {
  onToggle?: () => void
  title?: string
  buttonTitle?: string
  buttonType?: string
  children?: JSX.Element
  extraText?: string
  containerStyle?: ViewStyle
  buttonVisibility?: boolean
  buttonColor?: string
  onPress?: () => void
  keyText: string
  visible: boolean
}

const BottomAnimatedModal = ({
  onToggle,
  title,
  buttonTitle,
  buttonType,
  children,
  extraText,
  containerStyle,
  buttonVisibility = true,
  buttonColor,
  onPress,
  keyText,
  visible = false,
}: BottomAnimatedModalProps) => {
  const setIsBottomModalActive = useStore().setIsBottomModalActive

  useEffect(() => {
    setIsBottomModalActive(visible)
  }, [visible])

  const buttonStyle: ViewStyle =
    buttonType === BUTTON_TYPE.SECONDARY
      ? {
          borderColor: '#0069B9',
          borderWidth: 2,
        }
      : {}
  const labelStyle: TextStyle = {
    color: buttonType === BUTTON_TYPE.PRIMARY ? '#fff' : '#0069B9',
  }

  return (
    <>
      {visible ? (
        <AnimatePresence exitBeforeEnter>
          <>
            <TouchableWithoutFeedback onPress={onToggle} key={`'AnimatePresence_key_1_'${keyText}`}>
              <MotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={styles.overlay}
              />
            </TouchableWithoutFeedback>
            <MotiView
              from={{ opacity: 1, bottom: -300 }}
              animate={{ opacity: 1, bottom: 0 }}
              exit={{ opacity: 0, bottom: -300 }}
              transition={{ type: 'timing' }}
              style={{ flex: 1 }}
              key={`'AnimatePresence_key_2_'${keyText}`}
            >
              <View style={[styles.modalView, containerStyle]}>
                <Text style={styles.title}>{title}</Text>
                <View style={{ paddingHorizontal: 20 }}>{children}</View>
                <View style={styles.buttonContainer}>
                  {buttonVisibility && (
                    <Button
                      mode={buttonType === BUTTON_TYPE.SECONDARY ? 'outlined' : 'contained'}
                      color={
                        !buttonColor
                          ? buttonType === BUTTON_TYPE.PRIMARY
                            ? COLORS.themeBlue
                            : '#fff'
                          : buttonColor
                      }
                      fs={18}
                      fw='600'
                      round={buttonType === BUTTON_TYPE.SECONDARY ? 5 : 8}
                      onPress={onPress}
                      style={{ marginTop: 18, ...buttonStyle }}
                      labelStyle={labelStyle}
                    >
                      {buttonTitle}
                    </Button>
                  )}

                  {extraText && <Text style={styles.extraText}>{extraText}</Text>}
                </View>
              </View>
            </MotiView>
          </>
        </AnimatePresence>
      ) : null}
    </>
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: '100%',
    height: '100%',
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    width: '80%',
    alignSelf: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 34,
    paddingVertical: 20,
  },
  extraText: { color: '#8a8a8f', paddingLeft: 5, marginTop: 10 },
})

export default BottomAnimatedModal
