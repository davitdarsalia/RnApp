import * as Yup from 'yup';

export const registrationSchema = Yup.object({
   firstName: Yup.string().required().min(1).max(35),
   lastName: Yup.string().required().min(1).max(100),
});

export const searchValue = Yup.object({
   searchValue: Yup.string().required().min(1).max(50),
});
