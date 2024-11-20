import React, { useState } from "react";
import PageHeader from "../../components/pageheader";
import { AiFillSignal } from "react-icons/ai";
import ImageOne from '../../imges/image1.jpg';
import ImageTwo from '../../imges/image2.jpg';
import ImageThree from '../../imges/image3.jpg';
import ImageFour from '../../imges/image4.jpg';
import ImageFive from '../../imges/image5.png';
import "./styles.css";

const portfolioData = [
  { id: 2, name: "Ecommerce", category: "Development", image: ImageOne },
  { id: 3, name: "Notes App", category: "Development", image: ImageTwo },
  { id: 4, name: "Supplier Design", category: "Design", image: ImageThree },
  { id: 5, name: "Ecommerce", category: "Design", image: ImageFour },
  { id: 6, name: "Ecommerce", category: "Development", image: ImageFive },
];

const filterData = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "Development" },
  { filterId: 3, label: "Design" },
];

const Portfolio = () => {
  const [filteredvalue, setfilteredvalue] = useState(1);

  function handleFilter(currentId) {
    setfilteredvalue(currentId);
  }

  const filteredPortfolioData = 
    filteredvalue === 1 
      ? portfolioData 
      : portfolioData.filter(item => 
          item.category === filterData.find(filter => filter.filterId === filteredvalue)?.label
        );

  return (
    <section id="portfolio" className="portfolio">
      <PageHeader headerText="My Portfolio" icon={<AiFillSignal size={40} />} />
      <div className="portfolio_content">
        <ul className="portfolio_content_filter">
          {filterData.map(item => (
            <li 
              onClick={() => handleFilter(item.filterId)} 
              key={item.filterId} 
              className={filteredvalue === item.filterId ? "active" : ""}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio_content_cards">
          {filteredPortfolioData.map(item => (
            <div className="portfolio_content_cards_item" key={item.id}>
              <div className="portfolio_content_cards_item_imag">
                <a href="#">
                  <img src={item.image} alt={item.name} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
