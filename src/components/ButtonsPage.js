import React from "react";

const ButtonsPage = ({ pageNumber, setPageNumber }) => {
  const handleClickBack = () => {
    if (pageNumber != 1) {
      setPageNumber(pageNumber - 1);
    } else {
      return;
    }
  };

  const handleClickNext = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className="buttonsPage">
      <button className="button" onClick={handleClickBack}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <button className="button" onClick={handleClickNext}>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default ButtonsPage;
