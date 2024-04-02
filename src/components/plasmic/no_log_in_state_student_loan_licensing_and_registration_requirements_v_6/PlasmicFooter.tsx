// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: irLhCgyC2jofEreSXAxaJg
// Component: khkBm0HRg1YF

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

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { Popover } from "@plasmicpkgs/radix-ui";
import Button from "../../Button"; // plasmic-import: 5nirPCGmCnRD/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdTextArea_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariants_1I2DpOkk9PUt } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 1I2DpOKK9pUT/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import * as plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import * as projectcss from "./plasmic.module.css"; // plasmic-import: irLhCgyC2jofEreSXAxaJg/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: khkBm0HRg1YF/css

import ChecksvgIcon from "../radix_ui/icons/PlasmicIcon__Checksvg"; // plasmic-import: Wyt3GMMsLefj/icon
import IconIcon from "../radix_ui/icons/PlasmicIcon__Icon"; // plasmic-import: MbDRsJU0e3bw/icon
import CommentsSvgrepoComsvgIcon from "./icons/PlasmicIcon__CommentsSvgrepoComsvg"; // plasmic-import: Iw4ja1TTaHC7/icon
import logoNoBackgroundpngLjAQpZhp9Ty from "./images/logoNoBackgroundpng.png"; // plasmic-import: lj_aQpZhp9ty/picture

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
  popoverCore3?: Flex__<typeof Popover>;
  svg?: Flex__<"svg">;
  commentForm?: Flex__<typeof FormWrapper>;
  textArea?: Flex__<typeof AntdTextArea>;
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

  const $globalActions = useGlobalActions?.();

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "popoverCore.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "popoverCore2.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "popoverCore3.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "commentForm.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "commentForm",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "commentForm.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "commentForm",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
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
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_1I2DpOkk9PUt()
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
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"columns"}
        data-plasmic-override={overrides.columns}
        className={classNames(projectcss.all, sty.columns)}
      >
        <div
          className={classNames(projectcss.all, sty.column__byBbO)}
          onClick={async event => {
            const $steps = {};
          }}
        >
          <PlasmicLink__
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(projectcss.all, projectcss.a, sty.link)}
            component={Link}
            href={"https://www.joshualawfirm.com"}
            platform={"gatsby"}
            target={"_blank"}
          >
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"30px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "auto"
                  : "auto"
              }
              src={{
                src: logoNoBackgroundpngLjAQpZhp9Ty,
                fullWidth: 1000,
                fullHeight: 169,
                aspectRatio: undefined
              }}
            />
          </PlasmicLink__>
        </div>
        <div className={classNames(projectcss.all, sty.column__tkNmt)}>
          <Popover
            data-plasmic-name={"popoverCore"}
            data-plasmic-override={overrides.popoverCore}
            className={classNames("__wab_instance", sty.popoverCore)}
            defaultOpen={false}
            onOpenChange={generateStateOnChangeProp($state, [
              "popoverCore",
              "open"
            ])}
            open={generateStateValueProp($state, ["popoverCore", "open"])}
            overlay={
              <div className={classNames(projectcss.all, sty.freeBox___0Ru9)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__q3FVb
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
              plasmic_antd_5_hostless_css.plasmic_tokens,
              plasmic_plasmic_rich_components_css.plasmic_tokens
            )}
          >
            <Button
              className={classNames("__wab_instance", sty.button__b1GRe)}
              color={"clear"}
              size={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "minimal"
                  : undefined
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__b565D
                )}
              >
                {"Privacy"}
              </div>
            </Button>
          </Popover>
        </div>
        <div className={classNames(projectcss.all, sty.column__dHIgu)}>
          <Popover
            data-plasmic-name={"popoverCore2"}
            data-plasmic-override={overrides.popoverCore2}
            className={classNames("__wab_instance", sty.popoverCore2)}
            defaultOpen={false}
            onOpenChange={generateStateOnChangeProp($state, [
              "popoverCore2",
              "open"
            ])}
            open={generateStateValueProp($state, ["popoverCore2", "open"])}
            overlay={
              <div className={classNames(projectcss.all, sty.freeBox___3GRhT)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rgfNz
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
              plasmic_antd_5_hostless_css.plasmic_tokens,
              plasmic_plasmic_rich_components_css.plasmic_tokens
            )}
          >
            <Button
              color={"clear"}
              size={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "minimal"
                  : undefined
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zdHbj
                )}
              >
                {"Terms  of Use"}
              </div>
            </Button>
          </Popover>
        </div>
        <div className={classNames(projectcss.all, sty.column__kGT)}>
          <Popover
            data-plasmic-name={"popoverCore3"}
            data-plasmic-override={overrides.popoverCore3}
            className={classNames("__wab_instance", sty.popoverCore3)}
            defaultOpen={false}
            onOpenChange={generateStateOnChangeProp($state, [
              "popoverCore3",
              "open"
            ])}
            open={generateStateValueProp($state, ["popoverCore3", "open"])}
            overlay={
              <div className={classNames(projectcss.all, sty.freeBox__kdJof)}>
                {(() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.commentForm),
                    extendedOnValuesChange:
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["commentForm", "value"],
                        FormWrapper_Helpers
                      ),
                    formItems: undefined,
                    labelCol: { span: 8, horizontalOnly: true },
                    layout: "vertical",
                    mode: undefined,
                    onFinish: async values => {
                      const $steps = {};

                      $steps["httpPost"] = true
                        ? (() => {
                            const actionArgs = {
                              dataOp: {
                                sourceId: "r49LQQEGGTHUu7U9UUuJzo",
                                opId: "40e74751-c454-4113-a3f6-a5eb2353b3fa",
                                userArgs: {
                                  body: [
                                    $state.commentForm.value.comment_first_name,
                                    $state.commentForm.value.comment_last_name,
                                    $state.commentForm.value.commentemail,
                                    $state.commentForm.value.message
                                  ]
                                },
                                cacheKey: null,
                                invalidatedKeys: [],
                                roleId: null
                              }
                            };
                            return (async ({ dataOp, continueOnError }) => {
                              try {
                                const response = await executePlasmicDataOp(
                                  dataOp,
                                  {
                                    userAuthToken:
                                      dataSourcesCtx?.userAuthToken,
                                    user: dataSourcesCtx?.user
                                  }
                                );
                                await plasmicInvalidate(dataOp.invalidatedKeys);
                                return response;
                              } catch (e) {
                                if (!continueOnError) {
                                  throw e;
                                }
                                return e;
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["httpPost"] != null &&
                        typeof $steps["httpPost"] === "object" &&
                        typeof $steps["httpPost"].then === "function"
                      ) {
                        $steps["httpPost"] = await $steps["httpPost"];
                      }

                      $steps["invokeGlobalAction"] = true
                        ? (() => {
                            const actionArgs = {
                              args: [
                                "success",
                                "Thanks for your feedback.",
                                undefined,
                                undefined,
                                "top"
                              ]
                            };
                            return $globalActions[
                              "plasmic-antd5-config-provider.showNotification"
                            ]?.apply(null, [...actionArgs.args]);
                          })()
                        : undefined;
                      if (
                        $steps["invokeGlobalAction"] != null &&
                        typeof $steps["invokeGlobalAction"] === "object" &&
                        typeof $steps["invokeGlobalAction"].then === "function"
                      ) {
                        $steps["invokeGlobalAction"] = await $steps[
                          "invokeGlobalAction"
                        ];
                      }

                      $steps["updatePopoverCore3Open"] = true
                        ? (() => {
                            const actionArgs = {
                              variable: {
                                objRoot: $state,
                                variablePath: ["popoverCore3", "open"]
                              },
                              operation: 0,
                              value: false
                            };
                            return (({
                              variable,
                              value,
                              startIndex,
                              deleteCount
                            }) => {
                              if (!variable) {
                                return;
                              }
                              const { objRoot, variablePath } = variable;

                              $stateSet(objRoot, variablePath, value);
                              return value;
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["updatePopoverCore3Open"] != null &&
                        typeof $steps["updatePopoverCore3Open"] === "object" &&
                        typeof $steps["updatePopoverCore3Open"].then ===
                          "function"
                      ) {
                        $steps["updatePopoverCore3Open"] = await $steps[
                          "updatePopoverCore3Open"
                        ];
                      }
                    },
                    onFinishFailed: async data => {
                      const $steps = {};

                      $steps["invokeGlobalAction"] = true
                        ? (() => {
                            const actionArgs = {
                              args: [
                                "info",
                                "Oops.  Something went wrong.  Please try again later."
                              ]
                            };
                            return $globalActions[
                              "plasmic-antd5-config-provider.showNotification"
                            ]?.apply(null, [...actionArgs.args]);
                          })()
                        : undefined;
                      if (
                        $steps["invokeGlobalAction"] != null &&
                        typeof $steps["invokeGlobalAction"] === "object" &&
                        typeof $steps["invokeGlobalAction"].then === "function"
                      ) {
                        $steps["invokeGlobalAction"] = await $steps[
                          "invokeGlobalAction"
                        ];
                      }
                    },
                    onIsSubmittingChange:
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "isSubmitting",
                        ["commentForm", "isSubmitting"],
                        FormWrapper_Helpers
                      ),
                    ref: ref => {
                      $refs["commentForm"] = ref;
                    },
                    wrapperCol: { span: 16, horizontalOnly: true }
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "commentForm.value"
                      },
                      {
                        name: "isSubmitting",
                        plasmicStateName: "commentForm.isSubmitting"
                      }
                    ],
                    [],
                    FormWrapper_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <FormWrapper
                      data-plasmic-name={"commentForm"}
                      data-plasmic-override={overrides.commentForm}
                      {...child$Props}
                    >
                      <FormItemWrapper
                        className={classNames(
                          "__wab_instance",
                          sty.formField___3Qw8N
                        )}
                        label={"First Name"}
                        name={"comment_first_name"}
                        rules={[{ ruleType: "required" }]}
                      >
                        <AntdInput
                          className={classNames(
                            "__wab_instance",
                            sty.input__l3Mbr
                          )}
                        />
                      </FormItemWrapper>
                      <FormItemWrapper
                        className={classNames(
                          "__wab_instance",
                          sty.formField__aYzQy
                        )}
                        label={"Last Name"}
                        name={"comment_last_name"}
                        rules={[{ ruleType: "required" }]}
                      >
                        <AntdInput
                          className={classNames(
                            "__wab_instance",
                            sty.input__sutaR
                          )}
                        />
                      </FormItemWrapper>
                      <FormItemWrapper
                        className={classNames(
                          "__wab_instance",
                          sty.formField__dJJnP
                        )}
                        label={"Email"}
                        name={"commentemail"}
                        rules={[{ ruleType: "required" }]}
                      >
                        <AntdInput
                          className={classNames(
                            "__wab_instance",
                            sty.input__ckkiw
                          )}
                        />
                      </FormItemWrapper>
                      <FormItemWrapper
                        className={classNames(
                          "__wab_instance",
                          sty.formField___4XQWn
                        )}
                        label={"Message"}
                        name={"message"}
                        rules={[{ ruleType: "required" }]}
                      >
                        <AntdTextArea
                          className={classNames("__wab_instance", sty.textArea)}
                        />
                      </FormItemWrapper>
                      <AntdButton
                        className={classNames(
                          "__wab_instance",
                          sty.button__fryxr
                        )}
                        submitsForm={true}
                        type={"primary"}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___3HDok
                          )}
                        >
                          {"Submit"}
                        </div>
                      </AntdButton>
                    </FormWrapper>
                  );
                })()}
              </div>
            }
            themeResetClass={classNames(
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              plasmic_antd_5_hostless_css.plasmic_tokens,
              plasmic_plasmic_rich_components_css.plasmic_tokens
            )}
          >
            <Button
              className={classNames("__wab_instance")}
              color={"clear"}
              endIcon={
                <CommentsSvgrepoComsvgIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              }
              showEndIcon={true}
              size={
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "minimal"
                  : undefined
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__de9D
                )}
              >
                {"Feedback?"}
              </div>
            </Button>
          </Popover>
        </div>
        <div className={classNames(projectcss.all, sty.column__juPry)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__sz57G
            )}
          >
            {hasVariant(globalVariants, "screen", "mobileOnly")
              ? "Joshua Law Firm LLC.  Attorney Advertising\n320 Washington Ave, Brooklyn NY 11205"
              : "Attorney Advertising\n320 Washington Ave, Brooklyn NY 11205"}
          </div>
        </div>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "columns",
    "link",
    "img",
    "popoverCore",
    "popoverCore2",
    "popoverCore3",
    "svg",
    "commentForm",
    "textArea"
  ],
  columns: [
    "columns",
    "link",
    "img",
    "popoverCore",
    "popoverCore2",
    "popoverCore3",
    "svg",
    "commentForm",
    "textArea"
  ],
  link: ["link", "img"],
  img: ["img"],
  popoverCore: ["popoverCore"],
  popoverCore2: ["popoverCore2"],
  popoverCore3: ["popoverCore3", "svg", "commentForm", "textArea"],
  svg: ["svg"],
  commentForm: ["commentForm", "textArea"],
  textArea: ["textArea"]
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
  popoverCore3: typeof Popover;
  svg: "svg";
  commentForm: typeof FormWrapper;
  textArea: typeof AntdTextArea;
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
    popoverCore3: makeNodeComponent("popoverCore3"),
    svg: makeNodeComponent("svg"),
    commentForm: makeNodeComponent("commentForm"),
    textArea: makeNodeComponent("textArea"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
