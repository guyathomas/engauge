import React from 'react';

const FormFeedback = (props) => {
    const {
        validations, fieldText,
    } = props;
    let isValid = true;
    let errorMessage = '';
    // console.log('props, validations', props, props.validations);
    for (let i = 0; i < validations.length; i++) {
        if (!validations[i].condition(fieldText)) {
            errorMessage = validations[i].message;
            isValid = false;
            break;
        }
    }


    if (isValid) {
        return (<div className="hidden" />);
    } else {
        return (<div className="form-message">
            <div className="text-box">
            {errorMessage}
            </div>
            </div>);
    }
};

module.exports = FormFeedback;
