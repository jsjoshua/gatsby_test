import * as React from "react";
import {
  PlasmicSelect,
  DefaultSelectProps
} from "./plasmic/no_log_in_state_student_loan_licensing_and_registration_requirements_v_6/PlasmicSelect";

import { SelectRef } from "@plasmicapp/react-web";
import Select__Option from "./Select__Option";
import Select__OptionGroup from "./Select__OptionGroup";

export interface SelectProps extends DefaultSelectProps {
  // Feel free to add any additional props that this component should receive
}
function Select_(props: SelectProps, ref: SelectRef) {
  const { plasmicProps, state } = PlasmicSelect.useBehavior(props, ref);
  return <PlasmicSelect {...plasmicProps} />;
}

const Select = React.forwardRef(Select_);

export default Object.assign(
  Select,

  {
    Option: Select__Option,
    OptionGroup: Select__OptionGroup,
    __plumeType: "select"
  }
);
