import React from 'react';

const FormFeedback = (props) => {
  console.log(props.form);
  const {
    validations, field,
  } = props;
  let isValid = true;
  let errorMessage = '';
  // console.log('props, validations', props, props.validations);
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
