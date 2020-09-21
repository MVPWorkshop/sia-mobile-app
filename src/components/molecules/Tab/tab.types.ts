import { IWithStyle } from '../../../shared/types/common.types';

export interface ITabProps extends IWithStyle {
  name: string;
  label: string;
  onClick?: (tabName: string) => void;
  selectedName?: string;
}
