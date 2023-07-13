import React, { useRef, useEffect } from "react";

const Card = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const THRESHOLD = -15;

    function handleHover(e) {
      const { clientX, clientY } = e;
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = card;

      const horizontal = (clientX - offsetLeft) / clientWidth;
      const vertical = (clientY - offsetTop) / clientHeight;

      const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
      const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

      card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }

    function resetStyles() {
      card.style.transform = "";
    }

    card.addEventListener("mousemove", handleHover);
    card.addEventListener("mouseleave", resetStyles);

    return () => {
      card.removeEventListener("mousemove", handleHover);
      card.removeEventListener("mouseleave", resetStyles);
    };
  }, []);

  const a = "\u26E7";

  return (
    <>
      <article className="card" ref={cardRef}>
        <div className="content">
          <div className="card-body">
            <h2>Card that I am playing with</h2>
            <p>Check it out {a}</p>
            <button className="card-btn" type="button">
              Explore
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
