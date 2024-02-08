import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { CARD_URL } from "../constants";
import CircularBtn from "./CircularBtn";

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
          <CircularBtn
            onClick={onPrev}
            disabled={currentIndex === 0}
            icon={faArrowLeft}
          ></CircularBtn>
          <CircularBtn
            onClick={onNext}
            disabled={currentIndex > maxIndex}
            icon={faArrowRight}
          ></CircularBtn>
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
