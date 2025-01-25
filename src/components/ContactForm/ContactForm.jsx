import css from './ContactForm.module.scss';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineInfo } from 'react-icons/md';

const toastsSettings = {
    duration: 3000,
    icon: <MdOutlineInfo size={20} />,
    style: {},
};

const initialValues = {
    name: '',
    number: '',
};
const phoneNumRegExp =
    /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,3}\)?[-.\s]?\d{2,3}[-.\s]?\d{2,4}[-.\s]?\d{2,4})$/;
const spacesOnStartRegExp = /^[^\s].*$/;
const contactsSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required!')
        .matches(spacesOnStartRegExp, 'Please clear spaces before the name!')
        .min(3, 'Name must have at least 3 letters!')
        .max(50, "Name can't have more than 50 letters!"),
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
            toast('This name is already in phonebook', toastsSettings);
            return;
        }
        if (duplicateVerify.number) {
            toast('This number is already in phonebook', toastsSettings);
            return;
        }

        onAddContact(values);
        action.resetForm();
    }

    return (
        <div className={css.formContainer}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={contactsSchema}
            >
                <Form className={css.contactForm}>
                    <ul className={css.formList}>
                        <li>
                            <label htmlFor={nameId}>Name</label>
                            <Field
                                name="name"
                                type="text"
                                id={nameId}
                                className={css.contactInput}
                            />
                            <ErrorMessage
                                name="name"
                                component={'p'}
                                className={css.errorMessage}
                            />
                        </li>
                        <li>
                            <label htmlFor={numberId}>Number</label>
                            <Field
                                name="number"
                                type="tel"
                                id={numberId}
                                className={css.contactInput}
                            />
                            <ErrorMessage
                                name="number"
                                component={'p'}
                                className={css.errorMessage}
                            />
                        </li>
                    </ul>
                    <button type="submit">Add contact</button>
                </Form>
            </Formik>
            <div>
                <Toaster />
            </div>
        </div>
    );
}
