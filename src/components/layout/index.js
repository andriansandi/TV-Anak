import React from "react";
import { View, ImageBackground } from "react-native";

// import styles
import styles from "./layout.style";

const layout = ({ children }) => {
  return (
    <View style={styles.container}>
        <ImageBackground
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode='stretch'
          source={require('../../assets/images/kiddos-bg.png')}
        >
          {children}
        </ImageBackground>
    </View>
  );
};

export default layout;