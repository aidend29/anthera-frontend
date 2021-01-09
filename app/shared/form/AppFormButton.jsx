import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

function AppFormButton({ name, ...otherProps }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton {...otherProps} onPress={handleSubmit} />;
}

export default AppFormButton;
