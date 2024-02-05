
import React, { useState, useEffect } from "react";
import "./HomeArticle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { databases } from "../../../../appwriteConfig";

interface Article {
  image:string;
  title : string;
  link : string;
}

const HomeArticle = () => {
  const [articleData, setArticleData] = useState<any>({ documents: [] });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await databases.listDocuments(
          "659681feb0c97e65e766",
          "article"
        );

        setArticleData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchArticle();
  }, []);

  const handleArticlePage = (title: string, image: string) => {
    navigate("/article", { state: [title, image] });
  };

  const renderArticle = articleData.documents
    .slice(0, 3)
    .map((article : Article, index : number) => (
      <section
        key={index}
        className="article container d-flex  flex-column gap-3"
      >
        <img
          src={`../../src/assets/images/Article/${article.image}`}
          alt="article"
          className="img-fluid  mx-auto d-block"
        />
        <div className=" d-flex flex-column align-items-center ">
          <span className="h6 fw-bold">{article.title}</span>
          <div className="link d-flex justify-content-center align-items-center w-50">
            <button
              className="fw-normal border-0 bg-transparent fw-bold border-bottom border-dark text-dark"
              onClick={() => handleArticlePage(article.title, article.image)}
            >
              {article.link}
            </button>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </section>
    ));

  return (
    <section>
      <div className="articles_container container d-flex justify-content-between pt-4 align-items-center">
        <span className="h3 fw-bold">Articles</span>
        <div className="link d-flex align-items-center">
          <Link
            to="/blog"
            className="fw-medium text-decoration-none  border-bottom border-dark text-dark"
          >
            MoreArticles
          </Link>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className="article_list container d-flex gap-3 justify-content-between p-3 flex-wrap flex-md-nowrap">
        {renderArticle}
      </div>
    </section>
  );
};

export default HomeArticle;
