import { useState } from "react";

import * as Yup from 'yup';
import { TextError } from "../styles/Typography";

const useFormValidator = () => {
    const [errors, setErrors] = useState({});

    let yupSchema = null;

    Yup.setLocale({
        mixed: {
            required: 'Campo obrigatório',
            email: 'Email inválido'
        }
    });

    const setSchema = (newSchema) => {
        yupSchema = Yup.object().shape(newSchema);
    };

    const validate = async (values) => {
        if(!yupSchema) {
            return false;
        }

        try {
            await yupSchema.validate(values, { abortEarly: false });
            return true
        } catch (err) {
            const currentErrors = {};
            err.inner.forEach((error) => {
                currentErrors[error.path] = error.message;
            });
            setErrors(currentErrors);
            return false;
        }
    };

    const textFieldErrorHandler = (field) => {
        return {
            error: !!errors[field],
            helperText: <TextError>{errors[field]}</TextError>,
            onFocus: () => setErrors({...errors, [field]: null})

        };
    };

    return {
        Yup, 
        errors, 
        setSchema,
        validate, 
        textFieldErrorHandler
    };
};

export default useFormValidator;