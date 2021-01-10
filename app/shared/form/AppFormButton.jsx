import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";

function AppFormButton({ name, onPress, ...otherProps }) {
  const { handleSubmit, errors } = useFormikContext();
  return <AppButton {...otherProps} onPress={handleSubmit} />;
}

export default AppFormButton;
