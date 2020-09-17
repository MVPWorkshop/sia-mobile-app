export type InputChange<V> = {
  name: string;
  value: V;
};

export type onInputChange<V> = (callbackValue: InputChange<V>) => void;

export interface ISelectionOption {
  value: string;
  label?: string;
}
