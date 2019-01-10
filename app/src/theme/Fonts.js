// @flow
// Android
// title 20
// Heading 16
// desc 14

// ios
// title 20
// Heading 20
// desc 17

import { Platform } from "react-native";
import Metrics from "./Metrics";

const type = {
  AvenirNext: "Avenir Next",
  CircularStdBlack: "CircularStd-Black",
  CircularStdBlackItalic: "CircularStd-BlackItalic",
  CircularStdBold: "CircularStd-Bold",
  CircularStdBoldItalic: "CircularStd-BoldItalic",
  CircularStdBook: "CircularStd-Book",
  CircularStdBookItalic: "CircularStd-BookItalic",
  CircularStdMedium: "CircularStd-Medium",
  CircularStdMediumItalic: "CircularStd-MediumItalic",
  fontawesomewebfont: "fontawesome-webfont",
  SourceSansProBlack: "SourceSansPro-Black",
  SourceSansProBlackIt: "SourceSansPro-BlackIt",
  SourceSansProBold: "SourceSansPro-Bold",
  SourceSansProBoldIt: "SourceSansPro-BoldIt",
  SourceSansProExtraLight: "SourceSansPro-ExtraLight",
  SourceSansProExtraLightIt: "SourceSansPro-ExtraLightIt",
  SourceSansProIt: "SourceSansPro-It",
  SourceSansProLight: "SourceSansPro-Light",
  SourceSansProLightIt: "SourceSansPro-LightIt",
  SourceSansProRegular: "SourceSansPro-Regular",
  SourceSansProSemibold: "SourceSansPro-Semibold",
  SourceSansProSemiboldIt: "SourceSansPro-SemiboldIt",
  AvenirNextBold: "AvenirNext-Bold",
  AvenirNextBoldItalic: "AvenirNext-BoldItalic",
  AvenirNextDemiBold: "AvenirNext-DemiBold",
  AvenirNextDemiBoldItalic: "AvenirNext-DemiBoldItalic",
  AvenirNextHeavy: "AvenirNext-Heavy",
  AvenirNextHeavyItalic: "AvenirNext-HeavyItalic",
  AvenirNextItalic: "AvenirNext-Italic",
  AvenirNextMedium: "AvenirNext-Medium",
  AvenirNextRegular: "AvenirNext-Regular",
  AvenirNextUltraLight: "AvenirNext-UltraLight",
  AvenirNextUltraLightItalic: "AvenirNext-UltraLightItalic"
};

// Metrics.generatedFontSize(ios, android)

const size = {
  tiny: Metrics.generatedFontSize(8),
  ten: Metrics.generatedFontSize(10),
  xxxSmall: Metrics.generatedFontSize(11),
  xxSmall: Metrics.generatedFontSize(12),
  twelve: Metrics.generatedFontSize(12),
  thirteen: Metrics.generatedFontSize(13),
  fourteen: Metrics.generatedFontSize(14),
  xSmall: Metrics.generatedFontSize(14),
  small: Metrics.generatedFontSize(15),
  fifteen: Metrics.generatedFontSize(15.11),
  sixteen: Metrics.generatedFontSize(16),
  medium: Metrics.generatedFontSize(16),
  normal: Metrics.generatedFontSize(17),
  eighteen: Metrics.generatedFontSize(18),
  nighteen: Metrics.generatedFontSize(19),
  large: Metrics.generatedFontSize(20),
  xLarge: Metrics.generatedFontSize(25),
  xxLarge: Metrics.generatedFontSize(30),
  xxxLarge: Metrics.generatedFontSize(36),
  xxxxLarge: Metrics.generatedFontSize(50)
};

export default {
  type,
  size
};
