// import { article_user, calendar } from "../../../assets/resources/icons";
import { useLocation } from "react-router-dom";
import HomeArticle from "../../HomePageMain/HomeArticle/HomeArticle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCircleUser } from "@fortawesome/free-regular-svg-icons";

const ArticleDetails = () => {
  const articleLocation = useLocation();
  const articleDetails = articleLocation.state;
  console.log(articleDetails);
  return (
    <>
    <section className="container d-flex flex-column gap-3 pt-4">
      <span className="h5 fw-bold">ARTICLE</span>
      <span className="h3 fw-bold ">{articleDetails[0]}</span>
      <div className="d-flex gap-3">
        <div className="d-flex align-items-baseline gap-2">
          <FontAwesomeIcon icon={faCircleUser} className="text-secondary"/>
          <span className="h5 text-secondary">Henrik Annemark</span>
        </div>
        <div className="d-flex align-items-baseline gap-2">
          <FontAwesomeIcon icon={faCalendar} className="text-secondary"/>
          <span className="h5 text-secondary">October 16, 2023</span>
        </div>
      </div>
      <div className="d-flex flex-column gap-4">
        <img src={`../../src/assets/images/Article/${articleDetails[1]}`} alt="" className="article_main_image" />
        <span className="h5">
          Your bathroom serves a string of busy functions on a daily basis. See
          how you can make all of them work, and still have room for comfort and
          relaxation.
        </span>
        <span className="h5 fw-bold">
          A cleaning hub with built-in ventilation
        </span>
        <span className="h5">
          Use a rod and a shower curtain to create a complement to your cleaning
          cupboard. Unsightly equipment is stored out of sight yet accessibly
          close-while the air flow helps dry any dampness.
        </span>
      </div>
      <div className="d-flex flex-column gap-4">
        <div className="d-flex justify-content-between">
          <img src={`../../src/assets/images/Article/${articleDetails[1]}`} alt="article_image" />
          <img src={`../../src/assets/images/Article/${articleDetails[1]}`} alt="article_image" className="d-none d-md-block" />
        </div>
        <span className="h5 fw-bold">Storage with a calming effect</span>
        <span className="h5">
          Having a lot to store doesn’t mean it all has to go in a cupboard.
          Many bathroom items are better kept out in the open – either to be
          close at hand or are nice to look at. Add a plant or two to set a calm
          mood for the entire room (and they’ll thrive in the humid air).
        </span>
        <span className="h5 fw-bold">Kit your clutter for easy access</span>
        <span className="h5">
          Even if you have a cabinet ready to swallow the clutter, it’s worth
          resisting a little. Let containers hold kits for different activities
          – home spa, make-up, personal hygiene – to bring out or put back at a
          moment’s notice.
        </span>
      </div>
      <div className="d-flex  gap-4">
        <div>
          <img src={`../../src/assets/images/Article/${articleDetails[1]}`} alt="article_image" />
        </div>
        <div className="d-flex flex-column gap-4">
          <span className="h5 fw-bold">An ecosystem of towels</span>
          <span className="h5">
            Racks or hooks that allow air to circulate around each towel prolong
            their freshness. They dry quick and the need for frequent washing is
            minimized.
          </span>
          <span className="h5 fw-bold">Make your mop disappear</span>
          <span className="h5">
            Having your cleaning tools organized makes them easier to both use
            and return to. When they’re not needed, close the curtain and feel
            the peace of mind it brings.
          </span>
        </div>
      </div>
    </section>
    <HomeArticle/>
    </>
  );
};

export default ArticleDetails;
