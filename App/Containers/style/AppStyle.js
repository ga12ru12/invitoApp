import {  StyleSheet, Dimensions, PixelRatio } from 'react-native';
import {Fonts ,Metrics, Colors, Scale } from '../../Themes/index';
const { width, height } = Dimensions.get('window');
const _MARGIN = 40;
export default {
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingTop: 64,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  scrollViewWithTabs: {
    marginBottom: 50
  },
  row: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  indicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.blur
  },
  button: {
    borderRadius: 5,
    backgroundColor:'#00B4FB',
    width:131,
    height:40,
  },
  buttonView: {
    alignItems: 'center',
    marginTop: 50,
  },
  
}
