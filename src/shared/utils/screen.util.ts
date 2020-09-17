import { Dimensions } from 'react-native';

class ScreenUtil {
  private static _screenSize = Dimensions.get('screen');

  public static get width() {
    return this._screenSize.width;
  }
  public static get height() {
    return this._screenSize.height;
  }
}

export default ScreenUtil;
