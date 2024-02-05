import React, { useEffect, useState } from "react";
import { databases } from "../../../../appwriteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState<any>(null);

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await databases.listDocuments(
          "659681feb0c97e65e766",
          "Saleup"
        );
        if (response.documents.length > 0) {
          setAboutUs(response.documents[1]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAboutUs();
  }, []);

  return (
    <div>
      {aboutUs && (
        <section className="saleup_container bg-light d-flex align-items-center flex-wrap flex-lg-nowrap gap-3 p-1">
          <img
            src={`../../src/assets/images/SaleUp/${aboutUs.image}`}
            alt="sale_up"
            className="img-fluid saleup_image"
          />
          <div className="saleup_content d-flex flex-column px-5 py-3 gap-3">
            <span className="h3 fw-bold">{aboutUs.title}</span>
            <p>{aboutUs.description}</p>
            <div className="sale_up_link border-bottom border-dark">
              <a href="#" className="text-decoration-none text-dark fw-bold">
                {aboutUs.link}
              </a>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AboutUs;

