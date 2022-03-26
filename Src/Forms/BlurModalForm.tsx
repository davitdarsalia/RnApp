import React from 'react';
import {Formik} from 'formik';

import {Input} from '../Primitives/Input/Input';

import {searchValue} from '../ValidationSchemas/AuthValidations';

interface Props {
   onSubmit?: () => void;
}

export const BlurModalForm: React.FC<Props> = ({onSubmit = () => {}}) => {
   return (
      <Formik
         initialValues={{
            searchValue: '',
         }}
         onSubmit={() => {
            onSubmit();
         }}
         validationSchema={searchValue}>
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
            return (
               <>
                  <Input
                     placeholder={'Help'}
                     value={values.searchValue}
                     onChangeText={(val) => {
                        setFieldValue('searchValue', val);
                     }}
                     maxLength={65}
                  />
               </>
            );
         }}
      </Formik>
   );
};
