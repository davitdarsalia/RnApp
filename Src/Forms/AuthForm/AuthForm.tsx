import React from "react";
import { Formik } from "formik";
import { View } from "react-native";

import GenericInput from "../../Primitives/GenericInput/GenericInput";
import { Button } from "../../Primitives/Button/Button";

interface Props {}

export const AuthForm: React.FC<Props> = ({}) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {}}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        setFieldTouched,
        handleSubmit,
      }) => {
        return (
          <View>
            <GenericInput
              value={values.email}
              touched={touched.email}
              errors={errors.email}
              placeholder={"Enter An Email"}
              onChangeText={handleChange("email")}
              onBlur={() => {
                handleBlur("email");
                setFieldTouched("email");
              }}
            />
            <GenericInput
              value={values.password}
              touched={touched.password}
              errors={errors.password}
              placeholder={"Enter A Password"}
              onChangeText={handleChange("password")}
              onBlur={() => {
                handleBlur("password");
                setFieldTouched("password");
              }}
            />
            <Button
              onPress={handleSubmit}
              onLongPress={function (): void {
                throw new Error("Function not implemented.");
              }}
              title={"Submit"}
            />
          </View>
        );
      }}
    </Formik>
  );
};
