import { useId } from "react"
import css from "./ContactForm.module.css"
import { nanoid } from 'nanoid'
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"


export default function ContactForm ({ onAdd }) { 
    const fieldId = useId();

    const UserSchema = Yup.object().shape({
        name: Yup.string()
          .min(3, 'Мінімальна кількість символів - 3')
          .max(50, 'Максимальна кількість символів - 50')
          .required('Поле обовʼязкове для заповнення!'),
        number: Yup.string()
          .min(3, 'Мінімальна кількість символів - 3')
          .max(50, 'Максимальна кількість символів - 50')
          .required('Поле обовʼязкове для заповнення!'),
      });

    const handleSubmit = (values, actions) => { 
        onAdd ({
            id: nanoid(),
            name: values.name,
            number: values.number,
        })
        actions.resetForm();
    }

    return (
        <Formik 
           initialValues={{ name: "", number: "" }}
           onSubmit = {handleSubmit}
           validationSchema = {UserSchema}
         >
        < Form className={css.form}>
            <div className={css.formGroup}>
             <label className={css.label} htmlFor={`${fieldId}-name`}>Name</label>
             <Field className={css.input} type="text" name="name" id={`${fieldId}-name`} /> 
             <ErrorMessage className={css.error} name="name" component="span"/>
            </div>

            <div className={css.formGroup}>
             <label className={css.label} htmlFor={`${fieldId}-number`}>Number</label>
             <Field className={css.input} type="text" name="number" id={`${fieldId}-number`} />
             <ErrorMessage className={css.error} name="number" component="span"/> 
            </div>

            <button className={css.btn} type="submit">Add contact</button> 

        </Form>
        
        </Formik> 
    )
}