// SurveyForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from "./SurveyField";
import { Link } from 'react-router-dom';
import validateEmails from "../../utils/validateEmails";

class SurveyForm extends Component {
    renderFields() {
        return(
            <div>
                <Field
                    label="Survey Title"
                    type="text"
                    name="title"
                    component={SurveyField}
                />
                <Field
                    label="Subject Line"
                    type="text"
                    name="subject"
                    component={SurveyField}
                />
                <Field
                    label="Email Body"
                    type="text"
                    name="body"
                    component={SurveyField}
                />
                <Field
                    label="Recipient List"
                    type="text"
                    name="recipients"
                    component={SurveyField}
                />
            </div>
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)} >
                    {/*<Field type="text" name="surveyTitle" component="input" />*/}
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Submit
                        <i className="material-icons right">done</i>
                    </button>
                </form>

            </div>
        );
    }
}

// field validation
function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'You must provide a title';
    }
    if (!values.subject) {
        errors.subject = 'You must provide a subject';
    }
    if (!values.body) {
        errors.body = 'You must provide an email body';
    }
    if (!values.recipients) {
        errors.recipients = 'You must provide an email';
    } else {
        //emails are validated in a separate file called valdateEmails.js in Utils folder
        errors.recipients = validateEmails(values.recipients || '');
    }


    return errors;
}

export default reduxForm({validate, form:'surveyForm', destroyOnUnmount: false})(SurveyForm);