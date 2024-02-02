import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { databases } from "../../../../appwriteConfig";

const HomeSaleUp = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const [firstSaleUp, setFirstSaleUp] = useState<any>(null);

  useEffect(() => {
    const fetchFirstSaleUp = async () => {
      try {
        const response = await databases.listDocuments(
          "659681feb0c97e65e766",
          "Saleup"
        );
        if (response.documents.length > 0) {
          setFirstSaleUp(response.documents[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchFirstSaleUp();
  }, []);

  return (
    <div>
      {firstSaleUp && (
        <section className="saleup_container bg-light d-flex align-items-center flex-wrap flex-lg-nowrap gap-3 p-1">
          <img
            src={`../../src/assets/images/SaleUp/${firstSaleUp.image}`}
            alt="sale_up"
            className="img-fluid saleup_image"
          />
          <div className="saleup_content d-flex flex-column p-2">
            <span className="h5 text-primary">{firstSaleUp.offer}</span>
            <span className="h2 fw-bold">{firstSaleUp.title}</span>
            <p>{firstSaleUp.description}</p>
            <div className="sale_up_link d-flex gap-1 align-items-center ">
              <Link
                to="/shop"
                className="text-decoration-none text-dark fw-bold border-bottom border-dark"
              >
                {firstSaleUp.link}
              </Link>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomeSaleUp;
