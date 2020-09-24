import { useSelector } from 'react-redux';
import { RootState } from '../../redux/redux.types';
import { EUserRoles } from '../types/user.types';
import RoleUtil from '../utils/role.util';

const useRole = (params?: {
  allowedRoles: EUserRoles[]
}) => {
  const currentUserRole = useSelector<RootState, EUserRoles>(state => state.auth.user.role);

  const isNgo = currentUserRole === EUserRoles.NGO;
  const isVolunteer = currentUserRole === EUserRoles.VOLUNTEER;
  const isBeneficiary = currentUserRole === EUserRoles.BENEFICIARY;

  let isRoleAllowed = true;
  if (params) {
    isRoleAllowed = RoleUtil.isRoleAllowed(currentUserRole, params.allowedRoles)
  }

  return {
    isNgo,
    isVolunteer,
    isBeneficiary,
    currentUserRole,
    isRoleAllowed
  }
}

export default useRole;
