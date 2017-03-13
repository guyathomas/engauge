import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { Link } from 'react-router';

class ReviewCaseStudies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caseStudies: [{
        createdAt:"2017-03-12T09:15:03.396Z",
        id:1,
        shortCode:"b6cba",
        updatedAt:"2017-03-12T09:15:03.396Z",
        url:"http://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg",
        userId:"a5cbf201-a975-4a96-ac41-79c671fd1910"},
        {
                createdAt:"2017-03-12T09:15:03.396Z",
                id:2,
                shortCode:"b6cba",
                updatedAt:"2017-03-12T09:15:03.396Z",
                url:"http://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg",
                userId:"a5cbf201-a975-4a96-ac41-79c671fd1910"},
                {
                        createdAt:"2017-03-12T09:15:03.396Z",
                        id:3,
                        shortCode:"b6cba",
                        updatedAt:"2017-03-12T09:15:03.396Z",
                        url:"http://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg",
                        userId:"a5cbf201-a975-4a96-ac41-79c671fd1910"},
                        {
                                createdAt:"2017-03-12T09:15:03.396Z",
                                id:4,
                                shortCode:"b6cba",
                                updatedAt:"2017-03-12T09:15:03.396Z",
                                url:"http://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg",
                                userId:"a5cbf201-a975-4a96-ac41-79c671fd1910"}],
    };
  }


  getCaseStudies() {
    fetch('/api/casestudys', {
      headers: {
        'Content-Type': 'application/JSON',
      },
    })
    .then(response => response.json())
    .then((caseStudies) => {
      console.log(caseStudies);
      this.setState({ caseStudies: caseStudies });
    });
  }

  componentDidMount() {
    this.getCaseStudies();
  }

  render() {
    return (
      <div>
        <div className="title">casestudies</div>
        <div className="casestudies">
        {this.state.caseStudies.map((caseStudy) => (
            <Link to={'/review/' + caseStudy.shortCode}>
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy}>
          </CaseStudyCard>
            </Link>
        ))}
        </div>
      </div>
    );
  }
}

module.exports = ReviewCaseStudies;
