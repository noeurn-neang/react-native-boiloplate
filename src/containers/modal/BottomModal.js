import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Modal,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import {Feather} from '@expo/vector-icons'
import EStyleSheet from 'react-native-extended-stylesheet';
import { withTheme } from 'react-native-paper';

const {height: heightWindow} = Dimensions.get('window');

const getHeightView = (heightFull = heightWindow, ratio = 0.5) => {
  const getRatio = ratio < 0.3 || ratio > 1 ? 0.5 : ratio;
  return heightFull * getRatio;
};

class BottomModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: this.props.visible,
      opacity: new Animated.Value(0),
      height: getHeightView(heightWindow, props.ratio),
    };
  }

  animation = (type = 'open', cb = () => {}) => {
    const toValue = type === 'open' ? 0.5 : 0;
    const duration = 150;
    Animated.timing(this.state.opacity, {
      toValue,
      duration,
      useNativeDriver: false
    }).start(cb);
  };

  onShow = () => {
    this.animation();
  };

  componentDidUpdate(preProps) {
    const {visible} = this.props;
    // Close
    if (!visible && preProps.visible !== visible) {
      this.animation('close', () => this.setState({visible}));
    }
    // Open
    if (visible && preProps.visible !== visible) {
      this.setState({visible});
    }
  }

  render() {
    const {
      topLeftElement,
      topRightElement,
      underTopElement,
      ratioHeight,
      children,
      setModalVisible,
      backgroundColor,
    } = this.props;
    const {opacity, visible, height} = this.state;
    const {colors, dimens} = this.props.theme;

    const topRight = topRightElement ? (
      topRightElement
    ) : (
      <TouchableOpacity
        onPress={() => setModalVisible(false)}
        style={{padding: dimens.paddingL}}>
        <Feather color={colors.text} name="x" size={dimens.icon} />
      </TouchableOpacity>
    );

    const topLeft = topLeftElement ? topLeftElement : null;

    const bottom = opacity.interpolate({
      inputRange: [0, 0.5],
      outputRange: [-height, 0],
    });

    return (
      <Modal transparent visible={visible} onShow={this.onShow}>
        <View
          style={styles.container}
          onLayout={event => {
            let {height: heightFull} = event.nativeEvent.layout;
            this.setState({
              height: getHeightView(heightFull, ratioHeight),
            });
          }}>
          <Animated.View
            style={{
              flex: 1,
              backgroundColor: 'black',
              opacity: opacity,
            }}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => setModalVisible(false)}
            />
          </Animated.View>
          <Animated.View
            style={[
              styles.modal,
              {
                height: height,
                backgroundColor: backgroundColor,
                bottom: bottom,
              },
            ]}>
            {/*Header*/}
            <View style={styles.header}>
              {topLeft}
              {topRight}
            </View>

            {underTopElement}

            {/*Content*/}
            <View style={{flex: 1}}>{children}</View>
          </Animated.View>
        </View>
      </Modal>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

BottomModal.propTypes = {
  visible: PropTypes.bool,
  setModalVisible: PropTypes.func,
  ratioHeight: PropTypes.number,
  topLeftElement: PropTypes.node,
};

BottomModal.defaultProps = {
  topBottomElement: null,
  visible: false,
  ratioHeight: 0.5,
};

export default withTheme(BottomModal);