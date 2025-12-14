import { View, type ViewProps } from 'react-native';
import { color } from '@/src/libraries/theme';

export const Body = (props: ViewProps) => <View {...color({ bg: 'body' })} {...props} />;
