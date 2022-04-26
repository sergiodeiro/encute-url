import {Platform, Dimensions} from 'react-native';

const DEVICES_DIMENSIONS = {
  iPhoneX: {
    width: 375,
    height: 812,
  },
  iPhoneXR: {
    width: 414,
    height: 896,
  },
  iPhoneXS: {
    width: 375,
    height: 812,
  },
  iPhoneXSMAX: {
    width: 414,
    height: 896,
  },
};

const {height: D_HEIGHT, width: D_WIDTH} = Dimensions.get('window');

const barTopHeight = 10;
const barBottomHeight = 12;

export default class DeviceInfo {
  static get safeAreaInsets() {
    if (this.needsSafeArea()) {
      return {
        top: barTopHeight,
        bottom: barBottomHeight,
      };
    }
    return {
      top: 0,
      bottom: 0,
    };
  }

  static needsSafeArea() {
    return DeviceInfo.isIphoneX();
  }

  static isIphoneX() {
    if (Platform.OS === 'web') {
      return false;
    }

    return this._checkDeviceDimensions();
  }

  static isIphoneSE() {
    if (Platform.OS === 'web') {
      return false;
    } else if (Platform.OS === 'ios' && D_HEIGHT === 568 && D_WIDTH === 320) {
      return true;
    }
    return false;
  }

  static _checkDeviceDimensions() {
    let isNotchDevice = false;
    Object.keys(DEVICES_DIMENSIONS).forEach(device => {
      const {width, height} = DEVICES_DIMENSIONS[device];
      if (
        (Platform.OS === 'ios' && D_HEIGHT === height && D_WIDTH === width) ||
        (D_HEIGHT === width && D_WIDTH === height)
      ) {
        isNotchDevice = true;
      }
    });
    return isNotchDevice;
  }
}
