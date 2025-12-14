import { Text } from 'react-native';
import type { TextProps } from 'react-native/Libraries/Text/Text';
import { color } from '@/src/libraries/theme';
import { cn } from '@/src/libraries/utils/cn';

type Size = 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

type TitleProps = TextProps & {
  size?: Size;
};

export const Title = ({ className, size = 'base', ...props }: TitleProps) => {
  const sizeMap = {
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl'
  } as const;

  return <Text className={cn('font-semibold', sizeMap[size], className)} {...color({ fg: 'primary' })} {...props} />;
};
