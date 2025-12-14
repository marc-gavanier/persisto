import { inject } from '@/src/libraries/injection';
import { THEME } from './theme.key';

type HexColor = `#${string}`;

export type Theme = {
  body: HexColor;
  base: HexColor;
  onbase: HexColor;
  primary: HexColor;
  onprimary: HexColor;
  muted: HexColor;
  input: HexColor;
};

export type ThemeColor = keyof Theme;

export const color = ({ fg, bg, border }: { fg?: ThemeColor; bg?: ThemeColor; border?: ThemeColor }) => {
  const theme: Theme = inject(THEME);
  return {
    style: {
      color: fg ? theme[fg] : undefined,
      backgroundColor: bg ? theme[bg] : undefined,
      borderColor: border ? theme[border] : undefined
    }
  };
};

export const themeColor = (property: ThemeColor): HexColor => {
  const theme: Theme = inject(THEME);
  return theme[property];
};
