import React from "react";
import "./Article.css";

const Article = () => {
  return (
    <div className="article">
      <h4>Notable works</h4>
      <p>Based on the popularity of articles</p>
      <div className="article-slider">
        <div className="article-details">
          <img
            src="https://res.cloudinary.com/diqcnmefm/image/upload/v1607430663/images/stevejobs_butuw4.png"
            alt="article-img"
          />
          <p>Nature</p>
          <h5>Let us plant more trees from this year</h5>
        </div>

        <div className="article-details">
          <img
            src="https://res.cloudinary.com/diqcnmefm/image/upload/v1607430663/images/stevejobs_butuw4.png"
            alt="article-img"
          />
          <p>Travel</p>
          <h5>Let us plant more trees from this year</h5>
        </div>

        <div className="article-details">
          <img
            src="https://res.cloudinary.com/diqcnmefm/image/upload/v1607430663/images/stevejobs_butuw4.png"
            alt="article-img"
          />
          <p>Technology</p>
          <h5>Let us plant more trees from this year</h5>
        </div>
      </div>
    </div>
  );
};

export default Article;
