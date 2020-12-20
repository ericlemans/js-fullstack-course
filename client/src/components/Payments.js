import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
    render () {
        // debugger;
        return (
            <StripeCheckout
                name="Emaily"
                description="$5 for 5 email credits"
                amount={500} //in cents -> this is 5 dolars in US currency
                //token={token => console.log(token)} - stripe response when the user is charged
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY} >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions) (Payments);