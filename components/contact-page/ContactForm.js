import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { Button } from '../shared/Button';

const errorIcon = '/assets/contact/desktop/icon-error.svg';

const validate = (values) => {
   const errors = {};
   if (!values.name) {
      errors.name = `Can't be empty`;
   } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
   }

   if (!values.email) {
      errors.email = 'Email Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email Invalid';
   }

   if (!values.phone) {
      errors.phone = `Can't be empty`;
   }

   if (!values.message) {
      errors.message = `Can't be empty`;
   }

   return errors;
};

const ContactForm = () => {
   const formik = useFormik({
      initialValues: {
         name: '',
         email: '',
         phone: '',
         message: '',
      },
      validate,
      onSubmit: (values) => {
         alert(JSON.stringify(values, null, 2));
      },
   });
   return (
      <Form onSubmit={formik.handleSubmit}>
         <div className='form-group'>
            <input
               id='name'
               name='name'
               type='text'
               placeholder='Name'
               aria-label='name'
               onChange={formik.handleChange}
               value={formik.values.name}
            />
            {formik.errors.name ? (
               <span>
                  {formik.errors.name} <img src={errorIcon} alt='' />
               </span>
            ) : null}
         </div>

         <div className='form-group'>
            <input
               id='email'
               name='email'
               type='email'
               placeholder='Email Address'
               aria-label='email'
               onChange={formik.handleChange}
               value={formik.values.email}
            />
            {formik.errors.email ? (
               <span>
                  {formik.errors.email} <img src={errorIcon} alt='' />
               </span>
            ) : null}
         </div>

         <div className='form-group'>
            <input
               id='phone'
               name='phone'
               type='text'
               placeholder='Phone'
               aria-label='phone'
               onChange={formik.handleChange}
               value={formik.values.phone}
            />
            {formik.errors.phone ? (
               <span>
                  {formik.errors.phone} <img src={errorIcon} alt='' />
               </span>
            ) : null}
         </div>

         <div className='form-group'>
            <textarea
               id='message'
               name='message'
               type='text'
               placeholder='Your Message'
               aria-label='message'
               onChange={formik.handleChange}
               value={formik.values.message}
               rows='5'
            ></textarea>
            {formik.errors.message ? (
               <span>
                  {formik.errors.message} <img src={errorIcon} alt='' />
               </span>
            ) : null}
         </div>

         <Button type='submit' alternate='true' text='Submit' />
      </Form>
   );
};

export default ContactForm;

const Form = styled.form`
   display: grid;

   .form-group {
      position: relative;

      input,
      textarea {
         width: 100%;
         border: none;
         background: transparent;
         border-bottom: 1px solid white;
         color: ${(props) => props.theme.white};
         outline: none;
         padding: 2rem 1rem 1rem;
         font-size: 1rem;

         &::placeholder {
            color: ${(props) => props.theme.white};
            opacity: 0.5;
         }

         &:focus {
            border-bottom: 2px solid white;
         }
      }

      span {
         position: absolute;
         right: 0;
         top: 2rem;
         display: flex;
         align-items: center;
         font-style: italic;

         img {
            margin-left: 0.5rem;
         }
      }
   }

   button {
      justify-self: end;
      margin-top: 1rem;
      padding-left: 3rem;
      padding-right: 3rem;
   }
`;
