import type { ColorValue, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export type ModeOption =
  | 'opacity'
  | 'highlight'
  | 'without-feedback'
  | 'native';

export type PopupEvent = 'dismissed' | 'itemSelected';

export interface PopupMenuProps {
  onPress: (event: PopupEvent | string, index: number | undefined) => void;
  items: string[];
  onError?: () => void | undefined;
  underlayColor?: ColorValue | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  buttonStyle?: StyleProp<ViewStyle> | undefined;
  iconStyle?: StyleProp<TextStyle> | undefined;
  IconComponent?: ({ iconRef, ...props }) => React.ReactNode;
  iconSize?: number | undefined;
  iconColor?: ColorValue | undefined;
  mode?: ModeOption | undefined;
  icon?: keyof typeof MaterialIcons.glyphMap;
}
