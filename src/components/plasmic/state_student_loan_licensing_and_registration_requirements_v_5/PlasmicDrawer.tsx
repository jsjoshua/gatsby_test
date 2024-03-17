// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bgrEjR4gGnPuYqLGQjeP4y
// Component: 4zIZYOBjXrxT

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

import { Dialog } from "@plasmicpkgs/radix-ui";
import Button from "../../Button"; // plasmic-import: Cz4UVbn1HIIn/component
import { SheetContent } from "@plasmicpkgs/radix-ui";
import { DialogTitle } from "@plasmicpkgs/radix-ui";
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdTextArea_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { DialogClose } from "@plasmicpkgs/radix-ui";

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import * as plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import * as projectcss from "./plasmic.module.css"; // plasmic-import: bgrEjR4gGnPuYqLGQjeP4y/projectcss
import * as sty from "./PlasmicDrawer.module.css"; // plasmic-import: 4zIZYOBjXrxT/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: U2IBHMUDKU1z/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: MYRX8LPNKk6g/icon

createPlasmicElementProxy;

export type PlasmicDrawer__VariantMembers = {
  noTrigger: "noTrigger";
};
export type PlasmicDrawer__VariantsArgs = {
  noTrigger?: SingleBooleanChoiceArg<"noTrigger">;
};
type VariantPropType = keyof PlasmicDrawer__VariantsArgs;
export const PlasmicDrawer__VariantProps = new Array<VariantPropType>(
  "noTrigger"
);

export type PlasmicDrawer__ArgsType = {
  open?: boolean;
  onOpenChange?: (val: boolean) => void;
  children?: React.ReactNode;
  trigger?: React.ReactNode;
};
type ArgPropType = keyof PlasmicDrawer__ArgsType;
export const PlasmicDrawer__ArgProps = new Array<ArgPropType>(
  "open",
  "onOpenChange",
  "children",
  "trigger"
);

export type PlasmicDrawer__OverridesType = {
  dialog?: Flex__<typeof Dialog>;
  drawerContent?: Flex__<typeof SheetContent>;
  freeBox?: Flex__<"div">;
  dialogTitle?: Flex__<typeof DialogTitle>;
  commentForm?: Flex__<typeof FormWrapper>;
  textArea?: Flex__<typeof AntdTextArea>;
  button?: Flex__<typeof AntdButton>;
  text?: Flex__<"div">;
  dialogClose?: Flex__<typeof DialogClose>;
};

export interface DefaultDrawerProps {
  open?: boolean;
  onOpenChange?: (val: boolean) => void;
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  noTrigger?: SingleBooleanChoiceArg<"noTrigger">;
  className?: string;
}

const $$ = {};

function PlasmicDrawer__RenderFunc(props: {
  variants: PlasmicDrawer__VariantsArgs;
  args: PlasmicDrawer__ArgsType;
  overrides: PlasmicDrawer__OverridesType;
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
        path: "dialog.open",
        type: "writable",
        variableType: "boolean",

        valueProp: "open",
        onChangeProp: "onOpenChange"
      },
      {
        path: "noTrigger",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTrigger
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

  return (
    <Dialog
      data-plasmic-name={"dialog"}
      data-plasmic-override={overrides.dialog}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.dialog,
        { [sty.dialognoTrigger]: hasVariant($state, "noTrigger", "noTrigger") }
      )}
      noContain={true}
      onOpenChange={generateStateOnChangeProp($state, ["dialog", "open"])}
      open={generateStateValueProp($state, ["dialog", "open"])}
      overlayClassName={classNames({ [sty["pcls_8Jwh736jLmq-"]]: true })}
      themeResetClass={classNames(
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens
      )}
      triggerSlot={
        (hasVariant($state, "noTrigger", "noTrigger") ? false : true)
          ? renderPlasmicSlot({
              defaultContents: (
                <Button>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pkE4A
                    )}
                  >
                    {"Show dialog"}
                  </div>
                </Button>
              ),
              value: args.trigger
            })
          : null
      }
    >
      <SheetContent
        data-plasmic-name={"drawerContent"}
        data-plasmic-override={overrides.drawerContent}
        className={classNames("__wab_instance", sty.drawerContent)}
        themeResetClass={classNames(
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens,
          plasmic_plasmic_rich_components_css.plasmic_tokens
        )}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <DialogTitle
            data-plasmic-name={"dialogTitle"}
            data-plasmic-override={overrides.dialogTitle}
            className={classNames("__wab_instance", sty.dialogTitle)}
          >
            {renderPlasmicSlot({
              defaultContents: "Drawer title",
              value: args.children
            })}
          </DialogTitle>
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
                          const response = await executePlasmicDataOp(dataOp, {
                            userAuthToken: dataSourcesCtx?.userAuthToken,
                            user: dataSourcesCtx?.user
                          });
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
              },
              onIsSubmittingChange: generateStateOnChangePropForCodeComponents(
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
                    sty.formField___8JyMy
                  )}
                  label={"First Name"}
                  name={"comment_first_name"}
                  rules={[{ ruleType: "required" }]}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input__pNb2H)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames(
                    "__wab_instance",
                    sty.formField___3LqAp
                  )}
                  label={"Last Name"}
                  name={"comment_last_name"}
                  rules={[{ ruleType: "required" }]}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input___6XzhU)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__ph68H)}
                  label={"Email"}
                  name={"commentemail"}
                  rules={[{ ruleType: "required" }]}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input__ksFoJ)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__mIvsS)}
                  label={"Message"}
                  name={"message"}
                  rules={[{ ruleType: "required" }]}
                >
                  <AntdTextArea
                    className={classNames("__wab_instance", sty.textArea)}
                  />
                </FormItemWrapper>
                <AntdButton
                  className={classNames("__wab_instance", sty.button)}
                  submitsForm={true}
                  type={"primary"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    {"Submit"}
                  </div>
                </AntdButton>
              </FormWrapper>
            );
          })()}
        </Stack__>
        <DialogClose
          data-plasmic-name={"dialogClose"}
          data-plasmic-override={overrides.dialogClose}
          className={classNames("__wab_instance", sty.dialogClose)}
        />
      </SheetContent>
    </Dialog>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  dialog: [
    "dialog",
    "drawerContent",
    "freeBox",
    "dialogTitle",
    "commentForm",
    "textArea",
    "button",
    "text",
    "dialogClose"
  ],
  drawerContent: [
    "drawerContent",
    "freeBox",
    "dialogTitle",
    "commentForm",
    "textArea",
    "button",
    "text",
    "dialogClose"
  ],
  freeBox: [
    "freeBox",
    "dialogTitle",
    "commentForm",
    "textArea",
    "button",
    "text"
  ],
  dialogTitle: ["dialogTitle"],
  commentForm: ["commentForm", "textArea", "button", "text"],
  textArea: ["textArea"],
  button: ["button", "text"],
  text: ["text"],
  dialogClose: ["dialogClose"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  dialog: typeof Dialog;
  drawerContent: typeof SheetContent;
  freeBox: "div";
  dialogTitle: typeof DialogTitle;
  commentForm: typeof FormWrapper;
  textArea: typeof AntdTextArea;
  button: typeof AntdButton;
  text: "div";
  dialogClose: typeof DialogClose;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDrawer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDrawer__VariantsArgs;
    args?: PlasmicDrawer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDrawer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDrawer__ArgsType,
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
          internalArgPropNames: PlasmicDrawer__ArgProps,
          internalVariantPropNames: PlasmicDrawer__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDrawer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "dialog") {
    func.displayName = "PlasmicDrawer";
  } else {
    func.displayName = `PlasmicDrawer.${nodeName}`;
  }
  return func;
}

export const PlasmicDrawer = Object.assign(
  // Top-level PlasmicDrawer renders the root element
  makeNodeComponent("dialog"),
  {
    // Helper components rendering sub-elements
    drawerContent: makeNodeComponent("drawerContent"),
    freeBox: makeNodeComponent("freeBox"),
    dialogTitle: makeNodeComponent("dialogTitle"),
    commentForm: makeNodeComponent("commentForm"),
    textArea: makeNodeComponent("textArea"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    dialogClose: makeNodeComponent("dialogClose"),

    // Metadata about props expected for PlasmicDrawer
    internalVariantProps: PlasmicDrawer__VariantProps,
    internalArgProps: PlasmicDrawer__ArgProps
  }
);

export default PlasmicDrawer;
/* prettier-ignore-end */
