import type { Component, Ref } from "vue";

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ButtonSize = 'small' | 'default' | 'large';
export type NativeType = 'button' | 'submit' | 'reset';

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: ButtonSize;
  nativeType?: NativeType;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  circle?: boolean;
  plain?: boolean;
  round?: boolean;
  autofocus?: boolean;
  loadingIcon?: string;
  useThrottle?: boolean;
  throttleDuration?: number;
}

export interface ButtonEmits {
  (e: "click", val: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
}

export interface ButtonGroupProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
}

export interface ButtonGroupContext {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
}

export interface ButtonGroupEmits {
  (e: "click", val: MouseEvent): void;
}

export interface ButtonGroupInstance {
  ref: Ref<HTMLButtonElement | void>;
}
