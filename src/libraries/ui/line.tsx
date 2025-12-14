import { Text } from 'react-native';
import type { TextProps } from 'react-native/Libraries/Text/Text';
import { color, type ThemeColor } from '@/src/libraries/theme';
import { cn } from '@/src/libraries/utils/cn';

type LineProps = TextProps & {
  color?: ThemeColor;
};

export const Line = ({ color: fg = 'base', className, ...props }: LineProps) => (
  <Text className={cn(className)} {...color({ fg })} {...props} />
);
