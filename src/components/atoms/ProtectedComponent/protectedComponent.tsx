import React, { Fragment } from 'react';
import { IProtectedComponentProps } from './protectedComponent.types';
import useRole from '../../../shared/hooks/useRole.hook';

const ProtectedComponent: React.FC<IProtectedComponentProps> = (props) => {

  const { allowedRoles } = props;

  const { isRoleAllowed } = useRole({ allowedRoles })

  if (isRoleAllowed) {
    return (
      <Fragment>
        {props.children}
      </Fragment>
    )
  } else {
    return null;
  }
}

export default ProtectedComponent;
