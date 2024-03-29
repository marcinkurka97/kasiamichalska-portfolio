import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useAlert } from 'react-alert';
import StyledWrapper from 'components/SectionTemplate';
import { colors, media } from 'utils';
import Waves from 'assets/images/FALA.svg';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  subject: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  content: Yup.string()
    .min(5, 'Too Short!')
    .required('Required'),
});

const SectionTemplateWhite = styled(StyledWrapper)`
  height: 70vh;
  background: ${colors.light};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.laptop`
    height: 85vh;
  `}

  ${media.tablet`
    height: 60vh;
  `}

  ${media.phone`
    height: 80vh;
  `}
`;

const ContactTitle = styled.h2`
  position: relative;
  width: 100vw;
  font-size: 50px;
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px solid ${colors.dark};
  font-style: italic;
  margin: 30px 0 0 0;

  ${media.tablet`
    margin: 20px 0 0 0;
  `}

  ${media.phone`
    width: 70vw;
    left: 15vw;
    margin: 10px 0;
    font-size: 40px;
    text-align: left;
  `}
`;

const ContactWrapper = styled.div`
  width: 60vw;
  margin: auto auto;
  position: relative;
  z-index: 5;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 13%;
    width: 45%;
    height: 64%;
    background-image: url(${Waves});
    background-size: cover;
    z-index: -1;
  }

  form {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .contact-inputs {
      display: flex;
      justify-content: space-evenly;

      input {
        color: ${colors.dark};
        border: 1px solid ${colors.dark};
        background: ${colors.light};
        font-size: 24px;
        padding: 10px;
        margin: 0 0 40px 0;
      }
    }

    .single-input {
      position: relative;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      width: 35%;
    }

    .input-textarea {
      width: 80%;
      margin: 0 auto;
    }

    .input-error {
      position: absolute;
      top: 55px;
      color: ${colors.dark};
      text-align: left;
      font-size: 16px;
      font-weight: 500;
      text-transform: uppercase;
    }

    .error-textarea {
      top: 21vh;
    }

    textarea {
      width: 100%;
      height: 20vh;
      color: ${colors.dark};
      border: 1px solid ${colors.dark};
      background: ${colors.light};
      font-size: 18px;
      padding: 10px;
      margin: 0 0 40px 0;
      resize: none;
      font-family: 'Roboto', sans-serif;
    }

    button {
      position: relative;
      background: none;
      border: none;
      margin: 10px auto 0 auto;
      padding: 10px 25px;
      color: ${colors.dark};
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 24px;
      width: 200px;
      height: 80px;
      z-index: 5;
    }

    button::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 10px;
      right: 10px;
      background-color: ${colors.lead};
      z-index: -1;
      transition: transform 0.15s ease-out 0s;
    }

    button::after {
      content: '';
      left: 0px;
      top: 0px;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 1;
      border: 1px solid ${colors.dark};
      border-image: initial;
      transition: transform 0.15s ease-out 0s;
    }

    button:hover {
      cursor: pointer;

      &:before {
        transform: translate(10px, -10px);
      }

      &:after {
        transform: translate(-10px, 10px);
      }
    }
  }

  ${media.laptop`
    width: 90%;

    &:after {
      left: 50%;
      top: 17%;
      width: 45%;
      height: 54%;
    }
  `}

  ${media.tablet`
    width: 90%;

    &:after {
      left: 50%;
      top: 11.5%;
      width: 45%;
      height: 68.5%;
    }
  `}

  ${media.phone`
    width: 90%;

    &:after {
      left: -10%;
      top: 15%;
      width: 110vw;
      height: 47.5%;
    }

    form {
      .contact-inputs {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
  
        .single-input {
          width: 80%;

          input {
            margin: 0 0 30px 0;
          }
        }
      }

      textarea {
        margin: 0 0 20px 0;
      }

      button {
        margin: 0 auto;
        width: 150px;
        height: 60px;
      }
    }
  `}
`;

const Contact = ({ id }) => {
  const alert = useAlert();
  return (
    <SectionTemplateWhite id={id}>
      <ContactTitle>kontakt</ContactTitle>
      <ContactWrapper>
        <Formik
          initialValues={{ email: '', subject: '', content: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            SignupSchema.isValid({
              email: values.email,
              subject: values.subject,
              content: values.content,
            })
              .then(function() {
                axios({
                  method: 'post',
                  url:
                    'https://cors-anywhere.herokuapp.com/https://o30d2yrza3.execute-api.eu-west-1.amazonaws.com/default/portfolio_lambda',
                  data: {
                    email: values.email,
                    subject: values.subject,
                    content: values.content,
                  },
                })
                  .then(function() {
                    resetForm();
                    alert.success('Message sent!');
                  })
                  .catch(function() {
                    alert.error('Error :/');
                  });
              })
              .catch(function() {
                alert.show('Fill in all the fields');
              });
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="contact-inputs">
                <div className="single-input">
                  <Field name="email" type="email" placeholder="E-mail" />
                  {errors.email && touched.email ? (
                    <div className="input-error">{errors.email}</div>
                  ) : null}
                </div>
                <div className="single-input">
                  <Field name="subject" type="text" placeholder="Temat" />
                  {errors.subject && touched.subject ? (
                    <div className="input-error">{errors.subject}</div>
                  ) : null}
                </div>
              </div>
              <div className="single-input input-textarea">
                <Field
                  name="content"
                  component="textarea"
                  placeholder="Wiadomość"
                />
                {errors.content && touched.content ? (
                  <div className="input-error error-textarea">
                    {errors.content}
                  </div>
                ) : null}
              </div>
              <button type="submit">Wyślij</button>
            </Form>
          )}
        </Formik>
      </ContactWrapper>
    </SectionTemplateWhite>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
};

Contact.defaultProps = {
  id: 'contact',
};

export default Contact;
