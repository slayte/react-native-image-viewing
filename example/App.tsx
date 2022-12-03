/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from "react";
import {
  Alert,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import ImageViewing from "../src/ImageViewing";
import ImageList from "./components/ImageList";
import LocationSelect from './components/LocationSelect'

export default function App() {
  const [currentImageIndex, setImageIndex] = useState(0);
  const factor = 3
  const images = [
    {
      thumbnail:
        "https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1424&q=80",
      src: require("./data/floorplan.jpg"),
      width: 212 * factor,
      height: 140 * factor,
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const [locationZoom, setLocationZoom] = useState({ x: 0, y: 0, zoom: 1 })

  const onSelect = (images, index) => {
    setImageIndex(index);
    // setImages(images);
    setIsVisible(true);
  };

  const onRequestClose = () => setIsVisible(false);
  const onLongPress = (image) => {
    Alert.alert("Long Pressed", image.uri);
  };

  return (
    <SafeAreaView style={styles.root}>
      <ImageList
        images={images.map((image) => image.thumbnail)}
        onPress={(index) => onSelect(images, index)}
        shift={0.75}
      />
      <ImageViewing
        images={images}
        imageIndex={currentImageIndex}
        HeaderComponent={({ imageIndex }) => (
          <LocationSelect
            onRequestClose={onRequestClose}
            image={images[imageIndex]}
            locationZoom={locationZoom}
            setLocationZoom={setLocationZoom}
          />
        )}
        zoomLevel={locationZoom.zoom}
        xOffset={locationZoom.x}
        yOffset={locationZoom.y}
        presentationStyle="overFullScreen"
        visible={isVisible}
        onRequestClose={onRequestClose}
        onLongPress={onLongPress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000",
    ...Platform.select({
      android: { paddingTop: StatusBar.currentHeight },
      default: null,
    }),
  },
  about: {
    flex: 1,
    marginTop: -12,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "200",
    color: "#FFFFFFEE",
  },
});
