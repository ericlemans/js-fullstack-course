//SurveyField contains logic to render the fields with labels and text input
import React from 'react';

export default ({ input, label, meta: { error, touched }}) => {
    // console.log(meta);
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            {/*If touched is true and error contains a string*/}
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>

        </div>
    )
}