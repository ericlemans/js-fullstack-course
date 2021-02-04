//SurveyNew shows SurveyForm and SurveyFormReview

import React, { Component } from 'react';
import SurveyForm from "./SurveyForm";
import { reduxForm } from 'redux-form';
import SurveyFormReview from "./SurveyFormReview";
import {connect} from "react-redux";

class SurveyNew extends Component {

    state = { showFormReview: false };

    renderContent() {
            if (this.state.showFormReview) {
                return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false }) } />;
            } else {
                return <SurveyForm onSurveySubmit={ ()=> this.setState({ showFormReview: true }) } />;
            }
    }

    render() {
        switch(this.props.auth) {
            case null:
                return 'Checking access';
            case false:
                return 'You need to log in';
            default:
                return (
                    <div>
                        {this.renderContent()}
                    </div>
                )};
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(reduxForm({form: 'surveyForm'})(SurveyNew));