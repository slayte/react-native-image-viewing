 import React from "react";
 import {
   StyleSheet,
   SafeAreaView,
   View,
   Text,
   TouchableOpacity
 } from "react-native";

 type LocationZoomType = { x: number, y: number, zoom: number };
 
 type Props = {
   image?: any;
   locationZoom: LocationZoomType;
   setLocationZoom: (LocationZoomType) => void;
   onRequestClose: () => void;
 };
 
 const HIT_SLOP = { top: 16, left: 16, bottom: 16, right: 16 };

 const updateLocation = (setLocationZoom: (LocationZoomType) => void) => () => {
  const x = -Math.round(Math.random() * 500)
  const y = -Math.round(Math.random() * 500)
  const zoom = 2

  setLocationZoom({ x, y, zoom })
 }
 
 const ImageHeader = ({ locationZoom, setLocationZoom, image, onRequestClose }: Props) => (
   <SafeAreaView style={styles.root}>
     <View style={styles.container}>
       <View style={styles.space} />
       {image.title && <Text style={styles.text}>{image.title}</Text>}
       <Text style={styles.locationText}>
        x:{locationZoom.x}&nbsp;
        y:{locationZoom.y}&nbsp;
        zoom:{locationZoom.zoom}
      </Text>
       <TouchableOpacity
         style={styles.updateLocationButton}
         onPress={updateLocation(setLocationZoom)}
         hitSlop={HIT_SLOP}
       >
         <Text style={styles.updateLocationText}>Update Location</Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.closeButton}
         onPress={onRequestClose}
         hitSlop={HIT_SLOP}
       >
         <Text style={styles.closeText}>✕</Text>
       </TouchableOpacity>
     </View>
   </SafeAreaView>
 );
 
 const styles = StyleSheet.create({
   root: {
     backgroundColor: "#00000077"
   },
   container: {
     flex: 1,
     padding: 8,
     flexDirection: "row",
     justifyContent: "space-between"
   },
   space: {
     width: 45,
     height: 45
   },
   closeButton: {
     width: 45,
     height: 45,
     alignItems: "center",
     justifyContent: "center"
   },
   closeText: {
     lineHeight: 25,
     fontSize: 25,
     paddingTop: 2,
     includeFontPadding: false,
     color: "#FFF"
   },
   text: {
     maxWidth: 240,
     marginTop: 12,
     flex: 1,
     flexWrap: "wrap",
     textAlign: "center",
     fontSize: 17,
     lineHeight: 17,
     color: "#FFF"
   },
   updateLocationText: {
    fontSize: 17,
    lineHeight: 17,
    color: "#FFF"
   },
   updateLocationButton: {
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
   },
   locationText: {
    fontSize: 17,
    lineHeight: 17,
    color: "red"
   },
 });
 
 export default ImageHeader;
 