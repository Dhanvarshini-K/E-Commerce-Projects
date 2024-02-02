
import React, { useState, useEffect } from 'react';
import { databases } from "../../../appwriteConfig";
import "../ServiceCard/Card.scss";

const CardItem = () => {
  const [serviceCard, setServiceCard] = useState({ documents: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments('659681feb0c97e65e766', 'servicecard');
        setServiceCard(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 

  
  const renderCard = serviceCard.documents.map((card, index) => (
    <section key={index} className="card card-body bg-light d-flex flex-column align-items-center border-0 py-3 px-2">
      <img src={`../../src/assets/images/Service/${card.image}`} alt="shipping" />
      <span className="h6 fw-bold">{card.title}</span>
      <p>{card?.description}</p>
    </section>
  ));

  return (
    <section className="customer_service container d-flex justify-content-between gap-3 align-self-center align-items-center flex-wrap p-4">
      {renderCard}
    </section>
  );
};

export default CardItem;


