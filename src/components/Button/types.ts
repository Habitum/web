export interface iButton {
  name: string | JSX.Element;
  onClick?: () => void;
  variant: string;
}

export interface iButtonStyles {
  variant: string;
}
