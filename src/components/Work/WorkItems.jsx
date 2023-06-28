import React, {useState} from 'react';

const WorkItems = ({item}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a href={item.demo} className="work__button">
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      <a href={item.repo} className="work__button">
        Repository <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
      <button onClick={toggleModal} className="work__button">
        View Details
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <img src={item.image} alt="" className="modal__img" />
            <h3 className="modal__title">{item.title}</h3>
            <p className="modal__description">{item.description}</p>
            <button onClick={toggleModal} className="modal__close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkItems;
