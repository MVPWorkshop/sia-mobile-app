import { ISelectionOption } from '../types/input.types';
import { padNumber } from '../utils/common.util';

export let hourPickerOptions: ISelectionOption[] = [];
export let minutePickerOptions: ISelectionOption[] = [];
for (let i = 0; i < 60; i++) {
  if (i < 24) {
    hourPickerOptions.push({
      value: i.toString(),
      label: padNumber(i)
    })
  }

  minutePickerOptions.push({
    value: i.toString(),
    label: padNumber(i)
  })
}
