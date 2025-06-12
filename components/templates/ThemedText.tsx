import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({style, lightColor, darkColor, type = 'default', ...rest }: ThemedTextProps) {

  // To get the appropriate color based on the current theme
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  // Determine the base style based on the `type` prop
  const typeStyle =
    type === 'title' ? styles.title :
    type === 'subtitle' ? styles.subtitle :
    type === 'defaultSemiBold' ? styles.defaultSemiBold :
    type === 'link' ? styles.link :
    styles.default;

  return (
    <Text style={[{ color }, typeStyle, style]} {...rest}/>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
    color: '#000000',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    fontSize: 16,
    lineHeight: 30,
    color: '#0a7ea4',
  },
});
