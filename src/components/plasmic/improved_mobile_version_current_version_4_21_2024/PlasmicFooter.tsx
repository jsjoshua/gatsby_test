// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: iceCZNERGwb45EFQXuutPV
// Component: zGCAPA1Eaq0H

import * as React from "react";

import {
  Link,
  GatsbyLinkProps as LinkProps,
  navigate as __gatsbyNavigate
} from "gatsby";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { Popover } from "@plasmicpkgs/radix-ui";
import Button2 from "../../Button2"; // plasmic-import: hQy9QSkyPxTG/component

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import * as projectcss from "./plasmic.module.css"; // plasmic-import: iceCZNERGwb45EFQXuutPV/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: zGCAPA1Eaq0H/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: kSTxHZgue3mB/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: 1qt9N7eZyk9K/icon
import logoNoBackgroundpngZXw2KafmeQa from "./images/logoNoBackgroundpng.png"; // plasmic-import: zXw2_kafmeQa/picture

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: Flex__<"section">;
  columns?: Flex__<"div">;
  link?: Flex__<"a"> & Partial<LinkProps>;
  img?: Flex__<typeof PlasmicImg__>;
  popoverCore?: Flex__<typeof Popover>;
  popoverCore2?: Flex__<typeof Popover>;
};

export interface DefaultFooterProps {
  className?: string;
}

const $$ = {};

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "popoverCore.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "popoverCore2.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div className={classNames(projectcss.all, sty.column__qi4Go)}>
          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link)}
            component={Link}
            platform={"gatsby"}
          >
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: logoNoBackgroundpngZXw2KafmeQa,
                fullWidth: 1000,
                fullHeight: 169,
                aspectRatio: undefined
              }}
            />
          </PlasmicLink__>
        </div>
        <div className={classNames(projectcss.all, sty.column__x1GNh)}>
          <Popover
            data-plasmic-name={"popoverCore"}
            data-plasmic-override={overrides.popoverCore}
            className={classNames("__wab_instance", sty.popoverCore)}
            onOpenChange={generateStateOnChangeProp($state, [
              "popoverCore",
              "open"
            ])}
            open={generateStateValueProp($state, ["popoverCore", "open"])}
            overlay={
              <div className={classNames(projectcss.all, sty.freeBox__tmMq)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___7NkEr
                  )}
                >
                  {
                    "Any information you submit via this website will be used to manage the website, and for no other purpose.  This is an expirimental website.  I have invested no time into making it secure and make absolutely no guarantees with respect to the privacy or security of any information you provide.  Please don't reuse your password on this site. No tracking cookies or other mechanisms are used.  This site does not honor browser do-not-track signals because it doesn't track anyone.  "
                  }
                </div>
              </div>
            }
            themeResetClass={classNames(
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              plasmic_antd_5_hostless_css.plasmic_tokens
            )}
          >
            <Button2 color={"clear"} size={"minimal"}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yF9Va
                )}
              >
                {"Privacy"}
              </div>
            </Button2>
          </Popover>
        </div>
        <div className={classNames(projectcss.all, sty.column__yrEcP)}>
          <Popover
            data-plasmic-name={"popoverCore2"}
            data-plasmic-override={overrides.popoverCore2}
            className={classNames("__wab_instance", sty.popoverCore2)}
            onOpenChange={generateStateOnChangeProp($state, [
              "popoverCore2",
              "open"
            ])}
            open={generateStateValueProp($state, ["popoverCore2", "open"])}
            overlay={
              <div className={classNames(projectcss.all, sty.freeBox___0KMq6)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ufRuA
                  )}
                >
                  {
                    "This site is provided as-is with no warranties that any of the information is correct or complete.  This website is not intended to be, and should not be construed as, legal advice.  This website likewise does not create an attorney-client relationship between Joshua Law Firm LLC and any user of this site.  "
                  }
                </div>
              </div>
            }
            themeResetClass={classNames(
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              plasmic_antd_5_hostless_css.plasmic_tokens
            )}
          >
            <Button2 color={"clear"} size={"minimal"}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jOUb
                )}
              >
                {"Terms of Use"}
              </div>
            </Button2>
          </Popover>
        </div>
        <div className={classNames(projectcss.all, sty.column__fbPUm)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__sDAa5
            )}
          >
            {"Attorney Advertising\n320 Washington Ave\nBrooklyn NY 11205"}
          </div>
        </div>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "link", "img", "popoverCore", "popoverCore2"],
  columns: ["columns", "link", "img", "popoverCore", "popoverCore2"],
  link: ["link", "img"],
  img: ["img"],
  popoverCore: ["popoverCore"],
  popoverCore2: ["popoverCore2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "section";
  columns: "div";
  link: "a";
  img: typeof PlasmicImg__;
  popoverCore: typeof Popover;
  popoverCore2: typeof Popover;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    link: makeNodeComponent("link"),
    img: makeNodeComponent("img"),
    popoverCore: makeNodeComponent("popoverCore"),
    popoverCore2: makeNodeComponent("popoverCore2"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */