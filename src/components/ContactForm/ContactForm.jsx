import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid'

const initialValues = {
  name: "",
  number: ""
};

export const ContactForm = ({onAdd, validationSchema}) => {
    const nameFieldId = useId();
    const numberFieldId = useId();
    
    const handleSubmit = (values, actions) => {
        onAdd({ id: nanoid(), ...values });
        actions.resetForm();
}
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
            <Form>
                <Field type='text' name='name' id={nameFieldId} />
                <ErrorMessage name='name' component='span'/>
                <Field type='tel' name='number' id={numberFieldId} />
                <ErrorMessage name='number' component='span'/>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>
    )
}