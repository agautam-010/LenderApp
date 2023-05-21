import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 99,
  },
  outerContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  toolBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
    borderBottomWidth: 0.5,
  },
  toolBarButton: {
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  toolBarButtonText: {
    fontSize: 15,
    color: '#2d4664',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  picker: {
    flex: 1,
  },
});

export default styles;
