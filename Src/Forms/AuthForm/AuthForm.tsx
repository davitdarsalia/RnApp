import React from "react";
import { Formik } from "formik";
import { View } from "react-native";

import GenericInput from "../../Primitives/GenericInput/GenericInput";
import { Button } from "../../Primitives/Button/Button";
import { LoginSchema } from "./Validation";
import { RWidth } from "../../Generics/ResponsiveUnits";

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
        console.log(errors.email, errors.password);
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
              disabled={
                errors.email === undefined && errors.password === undefined
                  ? false
                  : true
              }
              style={{
                marginTop: RWidth(5),
              }}
              onPress={handleSubmit}
              onLongPress={() => console.log("Long Press")}
              title={"Submit"}
            />
          </View>
        );
      }}
    </Formik>
  );
};
