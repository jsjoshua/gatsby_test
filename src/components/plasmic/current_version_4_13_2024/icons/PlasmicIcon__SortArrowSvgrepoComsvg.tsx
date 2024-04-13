// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SortArrowSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SortArrowSvgrepoComsvgIcon(
  props: SortArrowSvgrepoComsvgIconProps
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
        d={
          "M8 2l-.707-.707L8 .586l.707.707L8 2zm1 15a1 1 0 11-2 0h2zM2.293 6.293l5-5 1.414 1.414-5 5-1.414-1.414zm6.414-5l5 5-1.414 1.414-5-5 1.414-1.414zM9 2v15H7V2h2zm7 20l-.707.707.707.707.707-.707L16 22zm1-15a1 1 0 10-2 0h2zm-6.707 10.707l5 5 1.414-1.414-5-5-1.414 1.414zm6.414 5l5-5-1.414-1.414-5 5 1.414 1.414zM17 22V7h-2v15h2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SortArrowSvgrepoComsvgIcon;
/* prettier-ignore-end */
