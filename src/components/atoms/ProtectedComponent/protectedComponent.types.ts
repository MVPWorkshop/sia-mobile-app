import { EUserRoles } from '../../../shared/types/user.types';

export interface IProtectedComponentProps {
  allowedRoles: EUserRoles[];
}
