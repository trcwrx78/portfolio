import React from 'react';
import { Formik } from 'formik'
import * as yup from 'yup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    textarea: yup.string().required()
  });

function EmailForm() {
    return (
    <div>
        <Formik
            validationSchema={schema}
            onSubmit={values => {
                fetch('https://api.formik.com/submit/tcform/email', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                })
            }}
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                textarea: ''
            }}
            >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <Form noValidate onSubmit={handleSubmit} >
                <Form.Row className="text-left">
                    <Form.Group as={Col} md="6" controlId="validationFormik01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        type="text"
                        name="firstName"
                        placeholder="First"
                        value={values.firstName}
                        onChange={handleChange}
                        isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormik02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        type="text"
                        name="lastName"
                        placeholder="Last"
                        value={values.lastName}
                        onChange={handleChange}
                        isValid={touched.lastName && !errors.lastName}
                    />

                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                </Form.Row>
                <Form.Row className="text-left">
                    <Form.Group as={Col} md="6" controlId="validationFormik03">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="E-mail"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="validationFormik04">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="111-222-3333"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                    />

                    <Form.Control.Feedback type="invalid">
                        {errors.phone}
                    </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Row className="text-left">
                    <Form.Group as={Col} md="12" controlId="validationFormik05">
                    <Form.Label>Brief Message</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows="6"
                        name="textarea"
                        value={values.textarea}
                        onChange={handleChange}
                        isInvalid={!!errors.textarea}
                            />
                    <Form.Control.Feedback type="invalid">
                        {errors.textarea}
                    </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Button type="submit">Submit</Button>
                </Form>
            )}
        </Formik>
    </div>
    );
}

export default EmailForm;
