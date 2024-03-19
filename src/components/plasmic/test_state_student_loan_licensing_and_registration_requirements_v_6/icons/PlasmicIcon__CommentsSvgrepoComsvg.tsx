// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CommentsSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CommentsSvgrepoComsvgIcon(
  props: CommentsSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.0"}
      viewBox={"0 0 64 64"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"}>
        <path
          d={
            "M60 0H16c-2.211 0-4 1.789-4 4v6H4c-2.211 0-4 1.789-4 4v30c0 2.211 1.789 4 4 4h7a1 1 0 011 1v11a3.996 3.996 0 004 4 3.998 3.998 0 002.828-1.172l14.156-14.156S33.5 48 34.656 48H50c2.211 0 4-1.789 4-4v-8h6c2.211 0 4-1.789 4-4V4c0-2.211-1.789-4-4-4zm-8 44a2 2 0 01-2 2H34.656C32.709 46 32 47 32 47L18 61c-2.141 2.141-4 .391-4-1V48a2 2 0 00-2-2H4a2 2 0 01-2-2V14a2 2 0 012-2h46a2 2 0 012 2v30zm10-12a2 2 0 01-2 2h-6V14c0-2.211-1.789-4-4-4H14V4a2 2 0 012-2h44a2 2 0 012 2v28z"
          }
        ></path>

        <path
          d={
            "M13 24h13a1 1 0 100-2H13a1 1 0 100 2zm28 4H13a1 1 0 100 2h28a1 1 0 100-2zm-7 6H13a1 1 0 100 2h21a1 1 0 100-2z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default CommentsSvgrepoComsvgIcon;
/* prettier-ignore-end */
