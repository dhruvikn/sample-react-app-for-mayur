import React from 'react';
import { Formik, Form, Field } from 'formik';

class FormComponent extends React.Component {
    constructor() {
        super();

        this.state = {}
    }

    // Formik docs - https://jaredpalmer.com/formik/

    handleChange = ({ target }) => {
        this.setState(prevState => {
            let newState = prevState;

            target.type === 'checkbox' ? newState[target.name] = target.checked : newState[target.name] = target.value;

            return newState;
        });
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Formik
                                initialValues={{
                                    email: '',
                                    color: 'red',
                                    firstName: '',
                                    lastName: ''
                                }}
                                onSubmit={(values, actions) => {
                                    setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        actions.setSubmitting(false);
                                    }, 5000);
                                }}>
                                {
                                    (props) => (
                                        <Form>
                                            <Field type="text" name="fullName" placeholder="Name" className="form-control" />
                                            <br />
                                            <Field type="email" name="email" placeholder="Email" className="form-control" />
                                            <br />
                                            <button type="submit" className="btn btn-primary" disabled={props.isSubmitting}>
                                                {
                                                    props.isSubmitting ?
                                                        "Submitting form"
                                                        :
                                                        "Submit"
                                                }
                                            </button>
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default FormComponent;