// import { chevron_right_icon } from "../../../assets/resources/icons";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BreadCrums = (props: any) => {
  const { product } = props;
  return (
    <div className="container p-3">
      Home <FontAwesomeIcon icon={faChevronRight}/> Shop <FontAwesomeIcon icon={faChevronRight}/> {product?.category} <FontAwesomeIcon icon={faChevronRight}/> <span className="fw-bold">{product?.ProductTitle}</span>
    </div>
  );
};

export default BreadCrums;
