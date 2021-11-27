import { Platform, TextStyle } from 'react-native';

import { colors } from './colors';
import { responsive } from './responsive';

const bold: TextStyle = {
  fontWeight: Platform.OS === 'ios' ? '700' : undefined,
  fontFamily: 'SVN-GilroyBold',
  color: colors.BLACK,
};
const semiBold: TextStyle = {
  fontFamily: 'SVN-GilroySemiBold',
  color: colors.BLACK,
  fontWeight: Platform.OS === 'ios' ? '600' : undefined,
};
const regular: TextStyle = {
  fontFamily: 'SVN-Gilroy',
  color: colors.BLACK,
  fontWeight: Platform.OS === 'ios' ? '400' : undefined,
};

export const typos = {
  xl4: { ...bold, fontSize: responsive(48), lineHeight: responsive(51) },
  xl3: { ...bold, fontSize: responsive(36), lineHeight: responsive(39) },
  xl2: {
    bold: { ...bold, fontSize: responsive(30), lineHeight: responsive(33) },
  },
  xxl: {
    regular: {
      ...regular,
      fontSize: responsive(26),
      lineHeight: responsive(29),
    },
    semiBold: {
      ...semiBold,
      fontSize: responsive(26),
      lineHeight: responsive(29),
    },
    bold: { ...bold, fontSize: responsive(26), lineHeight: responsive(29) },
  },
  xl: {
    regular: {
      ...regular,
      fontSize: responsive(20),
      lineHeight: responsive(23),
    },
    semiBold: {
      ...semiBold,
      fontSize: responsive(20),
      lineHeight: responsive(23),
    },
    bold: { ...bold, fontSize: responsive(20), lineHeight: responsive(23) },
  },
  lg: {
    regular: {
      ...regular,
      fontSize: responsive(16),
      lineHeight: responsive(19),
    },
    semiBold: {
      ...semiBold,
      fontSize: responsive(16),
      lineHeight: responsive(19),
    },
    bold: { ...bold, fontSize: responsive(16), lineHeight: responsive(19) },
  },
  sm: {
    regular: {
      ...regular,
      fontSize: responsive(14),
      lineHeight: responsive(17),
    },
    semiBold: {
      ...semiBold,
      fontSize: responsive(14),
      lineHeight: responsive(19),
    },
    bold: { ...bold, fontSize: responsive(14), lineHeight: responsive(17) },
  },
  xs: {
    regular: {
      ...regular,
      fontSize: responsive(13),
      lineHeight: responsive(16),
    },
    semiBold: {
      ...semiBold,
      fontSize: responsive(13),
      lineHeight: responsive(16),
    },
    bold: { ...bold, fontSize: responsive(13), lineHeight: responsive(16) },
  },
  xs2: {
    regular: {
      ...regular,
      fontSize: responsive(11),
      lineHeight: responsive(13),
    },
    semiBold: {
      ...semiBold,
      fontSize: responsive(11),
      lineHeight: responsive(13),
    },
    bold: {
      ...bold,
      fontSize: responsive(11),
      lineHeight: responsive(13),
    },
  },
};
