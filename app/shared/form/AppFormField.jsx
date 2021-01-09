import React from "react";
import { useFormikContext } from "formik";
import AppInputField from "../AppInputField";

function AppFormField({ name, ...otherProps }) {
  const { handleChange, errors, touched, setFieldTouched } = useFormikContext();
  return (
    <AppInputField
      {...otherProps}
      onChangeText={handleChange(name)}
      errorMsg={errors[name]}
      touched={touched[name]}
      onBlur={() => {
        setFieldTouched(name);
      }}
    />
  );
}

export default AppFormField;
