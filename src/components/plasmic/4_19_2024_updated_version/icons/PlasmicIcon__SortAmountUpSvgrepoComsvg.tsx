// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SortAmountUpSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SortAmountUpSvgrepoComsvgIcon(
  props: SortAmountUpSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M13 12h8m-8-4h8m-8 8h8M6 7v10M6 7l-3 3m3-3l3 3"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SortAmountUpSvgrepoComsvgIcon;
/* prettier-ignore-end */
