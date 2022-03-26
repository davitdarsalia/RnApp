import {Formik} from 'formik';
import React from 'react';
import {BlurButton} from '../Components/BlurButton/BlurButton';
import {BlurButtonVariant} from '../Constants/Enums';

import {Input} from '../Primitives/Input/Input';
import {registrationSchema} from '../ValidationSchemas/AuthValidations';

interface Props {
   onSubmit: () => void;
}

export const AuthForm: React.FC<Props> = ({onSubmit = () => {}}) => {
   return (
      <Formik
         initialValues={{
            firstName: '',
            lastName: '',
         }}
         onSubmit={() => {
            onSubmit();
         }}
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
            console.log(errors);
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
                  <BlurButton
                     wrapperStyle={{
                        // backgroundColor: '#fff',
                        borderRadius: 5,
                        backgroundColor: 'rgba(255,0,0,.8)',
                     }}
                     variant={BlurButtonVariant.large}
                     btnLabel={'Submit'}
                  />
               </>
            );
         }}
      </Formik>
   );
};
