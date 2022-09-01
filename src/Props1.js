import { render } from "@testing-library/react";
import React  from "react";
import { ReactDOM } from "react-dom";

ReactDOM.render(
  <>
  <div className="Cards">
    <div className="Card">
        <img  src="" alt="mypic" className="card__img"  />
        <div className="card__info">
            <span className="card__category"> A Netflix Original Series</span>
            <h3 className="card__title"></h3>
            <a href="" target="_blank">
                <button> Watch Now</button>
            </a>
        </div>
    </div>
  </div>


  </>,
  document.getElementById('root')  
);