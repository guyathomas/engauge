import React from 'react';

const FormFeedback = (props) => {
  let isValid = true;
  let errorMessage = '';
  // console.log('props, props.validations', props, props.validations);
  for (let i = 0; i < props.validations.length; i++) {
    if (!props.validations[i].condition(props.fieldText)) {
      errorMessage = props.validations[i].message;
      isValid = false;
      break;
    }
  }

  if (isValid) {
    return (<div className="hidden"/>);
  } else {
    return (<div className="form-message">
              <div className="text-box">
                {errorMessage}
              </div>
            </div>);
  }
};

module.exports = FormFeedback;
