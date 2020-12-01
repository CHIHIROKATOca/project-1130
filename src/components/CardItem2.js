import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="intro__item">
        <figure className="intro__item__pic-wrap">
          <img
            className="intro__item__img"
            alt="Travel Image"
            src={props.src}
          />
        </figure>
      </li>
    </>
  );
}

export default CardItem;
