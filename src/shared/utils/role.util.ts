import { EUserRoles } from '../types/user.types';

class RoleUtil {
  public static isRoleAllowed(role: EUserRoles, allowedRoles: EUserRoles[]) {
    return allowedRoles.includes(role);
  }
}

export default RoleUtil;
