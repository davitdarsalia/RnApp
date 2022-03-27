import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';

import {Formik} from 'formik';

import {Input} from '../Primitives/Input/Input';

import {searchValue} from '../ValidationSchemas/AuthValidations';
import {GenericVidget} from '../Components/GenericVidget/GenericVidget';
import {BlurView} from '@react-native-community/blur';

interface Props {
   onSubmit?: () => void;
}

const data = [
   {
      id: `${Math.random() * Math.random() + 31}`,
   },
   {
      id: `${Math.random() * Math.random() + 31}`,
   },
   {
      id: `${Math.random() * Math.random() + 31}`,
   },
   {
      id: `${Math.random() * Math.random() + 31}`,
   },
   {
      id: `${Math.random() * Math.random() + 31}`,
   },
   {
      id: `${Math.random() * Math.random() + 31}`,
   },
   {
      id: `${Math.random() * Math.random() + 31}`,
   },
   {
      id: `${Math.random() * Math.random() + 31}`,
   },
   {
      id: `${Math.random() * Math.random() + 31}`,
   },
   {
      id: `${Math.random() * Math.random() + 31}`,
   },
];

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
                     style={{
                        marginBottom: '3%',
                     }}
                     placeholder={'Help'}
                     value={values.searchValue}
                     onChangeText={(val) => {
                        setFieldValue('searchValue', val);
                     }}
                     maxLength={65}
                  />

                  <FlatList
                     style={{
                        flex: 1,
                     }}
                     numColumns={2}
                     initialNumToRender={8}
                     renderItem={({item}) => (
                        <GenericVidget
                           key={item.id}
                           onLongPress={() => {}}
                           onPress={() => {}}>
                           <Text>DD</Text>
                        </GenericVidget>
                     )}
                     data={data}
                  />
               </>
            );
         }}
      </Formik>
   );
};
