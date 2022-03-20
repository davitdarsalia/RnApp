import {Formik} from 'formik';
import React from 'react';

import {Input} from '../Primitives/Input/Input';
import {registrationSchema} from '../ValidationSchemas/AuthValidations';

interface Props {}

export const AuthForm: React.FC<Props> = ({}) => {
   return (
      <Formik
         initialValues={{
            firstName: '',
            lastName: '',
         }}
         onSubmit={() => {}}
         validationSchema={registrationSchema}>
         {({
            handleBlur,
            handleChange,
            setFieldValue,
            errors,
            values,
            touched,
            handleSubmit,
            setFieldTouched,
            setFieldError,
         }) => {
            console.log(values);
            return (
               <>
                  <Input
                     placeholder={'First Name'}
                     value={values.firstName}
                     onChangeText={(val) => {
                        setFieldValue('firstName', val);
                     }}
                     maxLength={65}
                  />
                  <Input
                     placeholder={'Last Name'}
                     value={values.lastName}
                     onChangeText={(val) => {
                        setFieldValue('lastName', val);
                     }}
                     maxLength={65}
                  />
               </>
            );
         }}
      </Formik>
   );
};
