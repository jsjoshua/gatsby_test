// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UntitledsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UntitledsvgIcon(props: UntitledsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 55 55"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#03C4EB"}
        opacity={"1"}
        d={
          "M39 1c4.025 0 8.05 0 12.632.33 1.537 1.439 2.515 2.547 3.421 4.12-.019 15.831.034 31.198.021 46.917-.402 1.446-.738 2.54-1.074 3.633-4.69 0-9.379 0-14.404-.453C39.173 37.062 39.086 19.03 39 1z"
        }
      ></path>

      <path
        fill={"#41D3EF"}
        opacity={"1"}
        d={
          "M36 56c-4.69 0-9.379 0-14.628-.46C20.874 37.051 20.937 19.025 21 1c4.69 0 9.379 0 14.533.469C36 19.959 36 37.979 36 56z"
        }
      ></path>

      <path
        fill={"#81E1F5"}
        opacity={"1"}
        d={
          "M17 56c-4.833 0-9.669.06-14.497-.088-.52-.016-1.003-1.245-1.198-2.7.38-16.28.453-31.769.585-47.617C3.3 3.825 4.65 2.412 6 1c3.361 0 6.723 0 10.564.468.466 18.49.45 36.51.436 54.532z"
        }
      ></path>

      <path
        fill={"#FEFFFF"}
        opacity={"1"}
        d={
          "M17.4 56c-.385-18.021-.37-36.042-.378-54.532C18.067 1 19.133 1 20.6 1c.337 18.026.274 36.052.306 54.54-.973.46-2.04.46-3.506.46z"
        }
      ></path>

      <path
        fill={"#FDFEFF"}
        opacity={"1"}
        d={
          "M36.375 56c-.375-18.02-.376-36.042-.376-54.531C36.75 1 37.5 1 38.625 1c.462 18.031.548 36.062.505 54.547-.88.453-1.63.453-2.755.453z"
        }
      ></path>

      <path
        fill={"#E6F9FD"}
        opacity={"1"}
        d={
          "M55.14 52.015c-.053-15.367-.106-30.734.132-46.567C55.563 4.98 56 5 56 5c0 15.354 0 30.708-.215 46.54-.215.478-.645.475-.645.475z"
        }
      ></path>

      <path
        fill={"#E3F8FD"}
        opacity={"1"}
        d={
          "M1.832 5.954c-.074 15.49-.148 30.979-.527 46.757C1 37.646 1 22.291 1.207 6.45c.208-.488.625-.496.625-.496z"
        }
      ></path>

      <path
        fill={"#FEFFFF"}
        opacity={"1"}
        d={
          "M1.89 5.595c-.058.359-.475.367-.683.386C1 4.421 1 2.842 1 1h4.5c-.85 1.412-2.2 2.824-3.61 4.595zM56 4.5c0 .5-.437.48-.655.483-1.198-1.106-2.176-2.214-3.25-3.653C54.02 1.085 56.895.03 56 4.5z"
        }
      ></path>

      <path
        fill={"#FDFEFF"}
        opacity={"1"}
        d={
          "M55.074 52.367c.066-.352.496-.35.711-.358-.118 1.324-.452 2.658-1.285 3.991-.164-1.094.172-2.187.574-3.633z"
        }
      ></path>
    </svg>
  );
}

export default UntitledsvgIcon;
/* prettier-ignore-end */
