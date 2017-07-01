import React from 'react';

const FormFeedback = (props) => {
  const {
    validations, field,
  } = props;
  let isValid = true;
  let errorMessage = '';

  for (let i = 0; i < validations.length; i++) {
    if (!validations[i].condition(field)) {
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
