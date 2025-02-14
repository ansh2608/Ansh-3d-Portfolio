import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Intern</h4>
                <h5>Company Name</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
            Analyzed and categorized over 25,000 Twitter sentences into abusive, non- abusive, and mixed categories, 
            leveraging Python and advanced Natural Language Processing (NLP) techniques.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science Tutor</h4>
                <h5>Chegg Inc.</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            Enhanced understanding of computer science concepts by providing solutions to 
            complex academic problems, leveraging strong problem-solving skills and advanced subject knowledge.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & President</h4>
                <h5>Blockchain Club Vitb</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            Led collaboration among 50 team members across six divisions, using data analysis 
            to improve communication and resolve bottlenecks, boosting efficiency by 30% in three months.
            </p>  
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
