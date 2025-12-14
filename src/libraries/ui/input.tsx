import { TextInput, type TextInputProps } from 'react-native';
import { color, themeColor } from '@/src/libraries/theme';
import { cn } from '@/src/libraries/utils/cn';

export const Input = ({ className, ...props }: TextInputProps) => (
  <TextInput
    className={cn('rounded-lg px-4 py-3 mb-3 border', className)}
    placeholderTextColor={themeColor('muted')}
    {...color({ fg: 'base', border: 'primary' })}
    {...props}
  />
);
