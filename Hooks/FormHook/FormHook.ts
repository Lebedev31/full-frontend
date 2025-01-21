import { FormRegister } from '@/types/types';
import { useForm } from "react-hook-form";
import { validationLogin, validationPassword, validationEmail } from './validation'

const useCustomForm = () => {
    const {register, reset, handleSubmit, watch, formState: {errors} } = useForm<FormRegister>(
        {mode: 'onChange'}
       );
 

   const password = watch('password');


   return {
     
     validationEmail,
     validationPassword,
     validationLogin,
     errors,
     register, 
     reset,
     handleSubmit,
     password
   }
}

export default useCustomForm;

