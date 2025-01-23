import css from './ContactForm.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';

const phoneNumRegExp =
    /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,3}\)?[-.\s]?\d{2,3}[-.\s]?\d{2,4}[-.\s]?\d{2,4})$/;
const spacesOnStartRegExp = /^[^\s].*$/;
const initialValues = {
    name: '',
    number: '',
};
const contactsSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required!')
        .min(2, 'Name must have at least 2 letters!')
        .matches(spacesOnStartRegExp, 'Please clear spaces before the name!')
        .max(30, "Name can't have more than 30 letters!"),
    number: Yup.string()
        .required('Required!')
        .matches(spacesOnStartRegExp, 'Please clear spaces before the number!')
        .matches(phoneNumRegExp, 'Invalid phone number!'),
});

export default function ContactForm({ onAddContact, contacts }) {
    const nameId = useId();
    const numberId = useId();

    function handleSubmit(values, action) {
        values.id = crypto.randomUUID();
        const { name, number } = values;
        const duplicateVerify = {
            name: contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase()
            ),
            number: contacts.find(contact => contact.number === number),
        };

        if (duplicateVerify.name) {
            console.log('This name is already in phonebook');
            return;
        }
        if (duplicateVerify.number) {
            console.log('This number is already in phonebook');
            return;
        }

        onAddContact(values);
        action.resetForm();
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={contactsSchema}
            >
                <Form>
                    <ul className="list">
                        <li>
                            <label htmlFor="nameId">Name</label>
                            <Field
                                name="name"
                                type="text"
                                id={nameId}
                                className={css.input}
                            />
                            <ErrorMessage name="name" component={'p'} />
                        </li>
                        <li>
                            <label htmlFor="">Phone number</label>
                            <Field name="number" type="tel" id={numberId} />
                            <ErrorMessage name="number" component={'p'} />
                        </li>
                    </ul>
                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>
    );
}
