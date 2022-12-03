/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from "react";
import { GestureResponderEvent } from "react-native";
import { ImageSource } from "../../@types";

declare type Props = {
  image: { src: ImageSource, width: number, height: number };
  onRequestClose: () => void;
  zoomLevel?: number;
  xOffset?: number;
  yOffset?: number;
  onZoom: (isZoomed: boolean, scaleZoom: number) => void;
  onLongPress: (image: ImageSource) => void;
  delayLongPress: number;
  swipeToCloseEnabled?: boolean;
  doubleTapToZoomEnabled?: boolean;
};

declare const _default: React.MemoExoticComponent<({
  image,
  onZoom,
  onRequestClose,
  onLongPress,
  delayLongPress,
  zoomLevel,
  xOffset,
  yOffset,
  swipeToCloseEnabled,
}: Props) => JSX.Element>;

export default _default;
