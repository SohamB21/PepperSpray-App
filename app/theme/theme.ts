interface Color {
  PrimaryText: string;
  SecondaryText: string;
  SpecialText: string;
  ForegroundElement: string;
  SpecialForegroundElement: string;
  SpecialForegroundElement2: string;
  Background: string;
}

export const COLORS: Color = {
  PrimaryText: '#1E1E1E', // black
  SecondaryText: '#FEFEFE', // light white
  SpecialText: '#B42F2F', // brownish red
  ForegroundElement: '#FFFFFF', // pure white
  SpecialForegroundElement: '#91A8D0', // blue
  SpecialForegroundElement2: '#F7CAC9', // pink
  Background: '#F5F5F5', // off-white
};

// To add a new font family:
// 1. Place the font file in the project, e.g., 'NewFont-Regular.ttf', in the 'assets/fonts' directory.
// 2. Add the new font entry in the FONTFAMILY object, e.g., newfont_regular: 'NewFont-Regular'.
// 3. Update 'react-native.config.js' to include the new font using 'npx react-native-asset'.

interface FontFamily {
  courgette_regular: string;

  poppins_black: string;
  poppins_blackitalic: string;

  poppins_bold: string;
  poppins_bolditalic: string;

  poppins_extrabold: string;
  poppins_extrabolditalic: string;

  poppins_extralight: string;
  poppins_extralightitalic: string;

  poppins_italic: string;
  poppins_light: string;
  poppins_lightitalic: string;

  poppins_medium: string;
  poppins_mediumitalic: string;

  poppins_regular: string;

  poppins_semibold: string;
  poppins_semibolditalic: string;

  poppins_thin: string;
  poppins_thinitalic: string;
}

export const FONTFAMILY: FontFamily = {
  courgette_regular: 'Courgette-Regular',

  poppins_black: 'Poppins-Black',
  poppins_blackitalic: 'Poppins-BlackItalic',

  poppins_bold: 'Poppins-Bold',
  poppins_bolditalic: 'Poppins-BoldItalic',

  poppins_extrabold: 'Poppins-ExtraBold',
  poppins_extrabolditalic: 'Poppins-ExtraBoldItalic',

  poppins_extralight: 'Poppins-ExtraLight',
  poppins_extralightitalic: 'Poppins-ExtraLightItalic',

  poppins_italic: 'Poppins-Italic',
  poppins_light: 'Poppins-Light',
  poppins_lightitalic: 'Poppins-LightItalic',

  poppins_medium: 'Poppins-Medium',
  poppins_mediumitalic: 'Poppins-MediumItalic',

  poppins_regular: 'Poppins-Regular',

  poppins_semibold: 'Poppins-SemiBold',
  poppins_semibolditalic: 'Poppins-SemiBoldItalic',

  poppins_thin: 'Poppins-Thin',
  poppins_thinitalic: 'Poppins-ThinItalic',
};