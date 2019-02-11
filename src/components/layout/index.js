import { View } from "react-native";
import React from "react";

// import styles
import styles from "./layout.style";

const layout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default layout;