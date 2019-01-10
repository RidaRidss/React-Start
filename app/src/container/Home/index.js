// redux
import { connect } from "react-redux";

// react
import React, { Component } from "react";
import { View } from "react-native";

import PropTypes from "prop-types";

// components
import { Text } from "../../components";

import { Actions } from "react-native-router-flux";

import styles from "./styles";

class Home extends Component<{}> {
  static propTypes = {};
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <View style={styles.container}>
        <Text type="AvenirNextMedium" color="HanBlue" size="eighteen">
          Home
        </Text>
      </View>
    );
  }
}
const mapStateToProps = ({}) => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(Home);
