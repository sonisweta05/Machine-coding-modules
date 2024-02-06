import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { CARD_URL } from "../constants";

const Carousel = ({ carouselCards }: any) => {
  const carouselRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const onPrev = () => {
    setMaxIndex(
      Math.floor(
        carouselRef.current.scrollWidth / carouselRef.current.offsetWidth
      ) - 1
    );
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };
  const onNext = () => {
    setMaxIndex(
      Math.floor(
        carouselRef.current.scrollWidth / carouselRef.current.offsetWidth
      ) - 1
    );

    if (currentIndex <= maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.scrollLeft =
        carouselRef.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  return (
    <div className="w-11/12 h-60 flex flex-col mt-10">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg pl-4">What's on your Mind?</h3>
        </div>
        <div className="flex gap-5 ">
          <button
            className="bg-black h-10 w-10 text-white cursor-pointer hover:scale-90 rounded-full drop-shadow-xl active:scale-105 focus:ring-4 ring-yellow-300 disabled:opacity-25 disabled:cursor-not-allowed"
            onClick={onPrev}
            disabled={currentIndex === 0}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={onNext}
            disabled={currentIndex > maxIndex}
            className="bg-black h-10 w-10 text-white cursor-pointer hover:scale-90 rounded-full drop-shadow-xl active:scale-105 focus:ring-4 ring-yellow-300 disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="w-full relative h-64 overflow-hidden">
        <div
          className="p-4  flex gap-8 overflow-hidden scroll-smooth"
          ref={carouselRef}
        >
          {carouselCards.map((card: any) => (
            <img
              className="w-[180px] h-[180px]"
              key={card.id}
              src={CARD_URL + card.imageId}
              alt="carousel image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
