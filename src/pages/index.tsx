// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/state_student_loan_licensing_and_registration_requirements_v_5/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/state_student_loan_licensing_and_registration_requirements_v_5/PlasmicGlobalVariant__Screen";
import {
  PlasmicHomepage,
  Head
} from "../components/plasmic/state_student_loan_licensing_and_registration_requirements_v_5/PlasmicHomepage";
import type { PageProps } from "gatsby";
export { Head };

function Homepage({ location, path, params }: PageProps) {
  // Use PlasmicHomepage to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicHomepage are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicHomepage is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Gatsby "wrapRootElement" function
  // (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr#wrapRootElement).
  return (
    <GlobalContextsProvider>
      <PageParamsProvider__
        route={path}
        params={params}
        query={Object.fromEntries(new URLSearchParams(location.search))}
      >
        <PlasmicHomepage />
      </PageParamsProvider__>
    </GlobalContextsProvider>
  );
}

export default Homepage;
