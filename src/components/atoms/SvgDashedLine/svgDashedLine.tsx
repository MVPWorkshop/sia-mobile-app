import React from 'react';
import Svg, { Line, SvgProps } from 'react-native-svg';

const SvgDashedLine: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1 100" {...props}>
      <Line
        x1={0}
        x2={0}
        y1={0}
        y2={100}
        strokeDasharray={6}
        strokeWidth={4}
        stroke={'white'}
      />
    </Svg>
  )
}

export default SvgDashedLine;
