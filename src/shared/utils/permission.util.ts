import { Platform } from 'react-native';
import * as Permissions from 'expo-permissions';

class PermissionUtil {
  private static async _getPermissions(permission: Permissions.PermissionType[]) {
    if (Platform.OS === 'web') {
      return;
    }

    const {
      granted
    } = await Permissions.askAsync(...permission);

    if (granted) {
      return;
    } else {
      throw new Error("Permission not granted");
    }
  }

  public static async getImagePermission() {
    await this._getPermissions([
      'camera',
      'cameraRoll'
    ]);
  }
}

export default PermissionUtil;
