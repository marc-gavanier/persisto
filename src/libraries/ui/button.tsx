import { type StyleProp, Text, type TextStyle, TouchableOpacity, type ViewStyle } from 'react-native';
import type { TouchableOpacityProps } from 'react-native/Libraries/Components/Touchable/TouchableOpacity';
import { color } from '@/src/libraries/theme';
import { cn } from '@/src/libraries/utils/cn';

type Kind = 'plain' | 'outline';

type Color = 'base' | 'primary';

type KindProps = {
  container: { style: StyleProp<ViewStyle> };
  text: { style: StyleProp<TextStyle> };
};

type ButtonProps = TouchableOpacityProps & {
  kind?: Kind;
  color?: Color;
};

export const Button = ({ kind = 'plain', color: variant = 'primary', className, children, ...props }: ButtonProps) => {
  const kindMap: Record<Kind, KindProps> = {
    plain: {
      container: color({ bg: variant, border: variant }),
      text: color({ fg: `on${variant}` })
    },
    outline: {
      container: color({ border: variant }),
      text: color({ fg: variant })
    }
  } as const;

  return (
    <TouchableOpacity className={cn('p-3 rounded-lg items-center border', className)} {...kindMap[kind].container} {...props}>
      <Text className='font-bold' {...kindMap[kind].text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};
