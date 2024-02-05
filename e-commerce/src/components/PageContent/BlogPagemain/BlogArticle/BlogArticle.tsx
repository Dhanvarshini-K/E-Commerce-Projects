import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { databases } from "../../../../appwriteConfig";
interface Props {
  view: String;
  addArticle: Boolean;
}

interface Blog {
  image:string;
  title :string;
  date:string;
}
const BlogArticle = ({ view, addArticle }: Props) => {
  const [blogArticle, setBlogArticle] = useState<any>({ documents: [] });

  useEffect(() => {
    const fetchBlogArticle = async () => {
      try {
        const response = await databases.listDocuments(
          "659681feb0c97e65e766",
          "article"
        );
        setBlogArticle(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogArticle();
  }, []);

  const navigate = useNavigate();
  const handleArticlePage = (title: string, image: string) => {
    navigate("/article", { state: [title, image] });
  };

  const renderBlogArticle = blogArticle.documents.map((blogarticle : Blog, index : null) => {
    return (
      <div
        key={index}
        className={`col article container d-flex flex-column gap-3`}
      >
        <img
          src={`../../src/assets/images/Article/${blogarticle.image}`}
          alt="home"
          className="img-fluid article_image  mx-auto d-block"
          onClick={() =>
            handleArticlePage(blogarticle.title, blogarticle.image)
          }
        />
        <div className="container d-flex flex-column align-items-center text-center ">
          <span className="h6 fw-bold">{blogarticle.title} </span>
          <p>{blogarticle.date}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className={`row row-cols-1 ${view}`}>
        {renderBlogArticle}
        {addArticle ? renderBlogArticle : null}
      </div>
    </div>
  );
};
export default BlogArticle;
