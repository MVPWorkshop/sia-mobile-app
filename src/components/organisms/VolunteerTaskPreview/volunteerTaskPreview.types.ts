import { IVolunteerTask } from '../../../shared/types/aidProject.types';
import { IWithStyle } from '../../../shared/types/common.types';

export interface IVolunteerTaskPreviewProps extends IWithStyle {
  cardTitle: string;
  task: IVolunteerTask;
  onClick: () => void;
}
