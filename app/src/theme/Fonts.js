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
  AvenirNextMedium: "AvenirNext-Medium"
};

// Metrics.generatedFontSize(ios, android)

const size = {
  eighteen: Metrics.generatedFontSize(18)
};

export default {
  type,
  size
};
