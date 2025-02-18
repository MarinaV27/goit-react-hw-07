import { useId } from "react"
import css from "./ContactForm.module.css"
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useDispatch} from "react-redux"
import { addContact } from '../../redux/contactsOps'
//import { nanoid } from "@reduxjs/toolkit"
   
    
export default function ContactForm() {
   
    const dispatch = useDispatch();
    const fieldId = useId();
        
        const UserSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Мінімальна кількість символів - 3')
            .max(50, 'Максимальна кількість символів - 50')
            .required('Поле обовʼязкове для заповнення!'),
        number: Yup.string()
            .min(3, 'Мінімальна кількість символів - 3')
            .max(9, 'Максимальна кількість символів - 9')
            .required('Поле обовʼязкове для заповнення!'),
    });


    return (
        <Formik
            initialValues={{ name: "", number: "" }}
            validationSchema={UserSchema}
            onSubmit={(values, options) => {
                const onAdd = {
                   // id: nanoid(),
                    name: values.name,
                    number: values.number,
                }
                dispatch(addContact(onAdd))
                options.resetForm()
            }}
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