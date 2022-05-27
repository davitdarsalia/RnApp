import React from "react";
import { Formik } from "formik";
import { View } from "react-native";

import GenericInput from "../../Primitives/GenericInput/GenericInput";
import { Button } from "../../Primitives/Button/Button";
import { LoginSchema } from "./Validation";

interface Props {}

export const AuthForm: React.FC<Props> = ({}) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {}}
      validationSchema={LoginSchema}
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
              errors={touched.email && errors.email ? errors.email : ""}
              placeholder={"Enter An Email"}
              onChangeText={handleChange("email")}
              onBlur={() => {
                handleBlur("email");
                setFieldTouched("email");
              }}
              errorText={errors.email}
            />
            <GenericInput
              value={values.password}
              touched={touched.password}
              errors={
                touched.password && errors.password ? errors.password : ""
              }
              placeholder={"Enter A Password"}
              onChangeText={handleChange("password")}
              onBlur={() => {
                handleBlur("password");
                setFieldTouched("password");
              }}
              errorText={errors.password}
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
