// @flow

import React, { Component } from "react";
import { Text } from 'react-native';
// import { Provider } from "react-redux";
import Layout from "./components/layout/index";
import Root from "./navigation/containers";
// import myStore from "./myStore";

export default class MyApp extends Component {
  render() {
    return (
      <Layout>
        <Root></Root>
      </Layout>
    );
  }
}