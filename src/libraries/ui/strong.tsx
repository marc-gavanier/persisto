import { Text } from 'react-native';
import type { TextProps } from 'react-native/Libraries/Text/Text';
import { cn } from '@/src/libraries/utils/cn';

export const Strong = ({ className, ...props }: TextProps) => <Text className={cn('font-bold', className)} {...props} />;
