import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { TBaseIconProps } from './types'
export const IconHistory = ({ size, color }: TBaseIconProps) => {
  return (
    <Svg width={size ?? 24} height={size ?? 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.65341 8.99059H6.75C7.16421 8.99059 7.5 9.32638 7.5 9.74059C7.5 10.1548 7.16421 10.4906 6.75 10.4906H1.75C1.33579 10.4906 1 10.1548 1 9.74059V4.74059C1 4.32638 1.33579 3.99059 1.75 3.99059C2.16421 3.99059 2.5 4.32638 2.5 4.74059V8.01626L5.86467 4.85509C8.94335 1.78177 13.6752 1.11602 17.4757 3.21697C21.2762 5.31792 23.2291 9.67908 22.2655 13.9134C21.302 18.1477 17.6542 21.2343 13.3188 21.4838C8.98344 21.7333 5.00562 19.0856 3.56262 14.9898C3.42497 14.5991 3.6301 14.1708 4.02078 14.0332C4.41145 13.8956 4.83974 14.1007 4.97738 14.4914C6.19839 17.957 9.56423 20.1974 13.2326 19.9863C16.901 19.7752 19.9876 17.1634 20.8029 13.5805C21.6182 9.99767 19.9658 6.30746 16.75 4.52973C13.5303 2.74988 9.52719 3.31846 6.90817 5.93239L4.11335 8.5584L3.65341 8.99059ZM12.01 6.74968C12.01 6.33547 12.3458 5.99968 12.76 5.99968C13.1742 5.99968 13.51 6.33547 13.51 6.74968V11.4846C13.5732 11.5185 13.6327 11.5622 13.686 11.6155L15.686 13.6155C15.9789 13.9084 15.9789 14.3833 15.686 14.6762C15.3931 14.9691 14.9183 14.9691 14.6254 14.6762L12.6254 12.6762C12.5553 12.6061 12.5019 12.5256 12.4654 12.4396C12.1976 12.3251 12.01 12.0593 12.01 11.7497V6.74968Z"
        fill={color ?? 'rgba(0, 0, 0, 0.54)'}
      />
    </Svg>
  )
}