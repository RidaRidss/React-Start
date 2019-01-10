// @flow
import React from "react";

import { TouchableOpacity, Image, View, BackHandler } from "react-native";
import { connect } from "react-redux";
import { Navigator } from "react-native-deprecated-custom-components";
import {
  Stack,
  Scene,
  Router,
  Actions,
  ActionConst,
  Route,
  Schema,
  Drawer
} from "react-native-router-flux";
import { Keyboard, Animated, Easing } from "react-native";
import { Colors } from "../theme";
import { Home } from "../container";
import styles from "./styles";

// const BACK_SCENES = "home";

function onBackPress() {
  const scene = Actions.currentScene;
  if (BACK_SCENES.includes(scene)) {
    return false;
  }
  Actions.pop();
  return true;
}

const mapStateToProps = state => {
  return null;
};

// let MyTransition = (index, position) => {
//   const inputRange = [index - 1, index, index + 1];
//   const opacity = position.interpolate({
//     inputRange,
//     // outputRange: [0.8, 1, 1]
//     outputRange: [0, 1, 0.5]
//   });

//   const scaleY = position.interpolate({
//     inputRange,
//     // outputRange: [0.8, 1, 1]
//     outputRange: [0, 1, 0.5]
//   });

//   return {
//     opacity,
//     transform: [{ scaleY }]
//   };
// };

let TransitionConfiguration = () => {
  // return {
  //   screenInterpolator: sceneProps => {
  //     const { position, scene } = sceneProps;
  //     const { index } = scene;

  //     return MyTransition(index, position);
  //   }
  // };

  // new setted transformation for app

  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { position, layout, scene, index, scenes } = sceneProps;
      const toIndex = index;
      const thisSceneIndex = scene.index;
      const height = layout.initHeight;
      const width = layout.initWidth;
    }
  };
};
const navigator = Actions.create(
  <Stack
    transitionConfig={TransitionConfiguration}
    swipeEnabled
    gestureEnabled
    animationEnabled
    direction="horizontal"
    lazy
    titleStyle={styles.title}
    headerStyle={styles.header}
    key="root"
    tintColor={Colors.primary}
  >
    <Scene initial hideNavBar key="home" component={Home} />
  </Stack>
);

export default () => (
  <AppNavigator backAndroidHandler={onBackPress} navigator={navigator} />
);

const AppNavigator = connect()(Router);
