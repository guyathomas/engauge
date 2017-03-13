import React from 'react';

class CaseStudyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummy: '',
    };
  }

  // {
  //         createdAt:"2017-03-12T09:15:03.396Z",
  //         id:2,
  //         shortCode:"b6cba",
  //         updatedAt:"2017-03-12T09:15:03.396Z",
  //         url:"http://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg",
  //         userId:"a5cbf201-a975-4a96-ac41-79c671fd1910"}

  render() {
    return (
      <div className="case-study" >
        <div>{this.props.caseStudy.url}</div>
        <div className="imgwrapper">
          <img src={this.props.caseStudy.url} />
        </div>
        <div>{this.props.caseStudy.createdAt}</div>
      </div>
    );
  }
}

module.exports = CaseStudyCard;
