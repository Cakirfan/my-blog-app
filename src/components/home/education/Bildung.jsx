import React, { useState } from "react";
import {
  BDetail,
  BSlider,
  CBody,
  CFooter,
  Card,
  CardContainer,
  Container,
  SContainer,
} from "./BildungStyles";

const Bildung = () => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const cardsPerPage = 3; // Number of cards to display per page

  // Sample card data
  const cardData = [
    {
      name: "A",
      image:
        "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_640.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo non totam ea! Eveniet sequi reiciendis, assumenda nesciunt tenetur eligendi, atque esse vitae sit ratione sapiente dignissimos ab reprehenderit rerum?",
    },
    {
      name: "B",
      image:
        "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_640.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo non totam ea! Eveniet sequi reiciendis, assumenda nesciunt tenetur eligendi, atque esse vitae sit ratione sapiente dignissimos ab reprehenderit rerum?",
    },
    {
      name: "C",
      image:
        "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_640.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo non totam ea! Eveniet sequi reiciendis, assumenda nesciunt tenetur eligendi, atque esse vitae sit ratione sapiente dignissimos ab reprehenderit rerum?",
    },
    {
      name: "D",
      image:
        "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_640.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo non totam ea! Eveniet sequi reiciendis, assumenda nesciunt tenetur eligendi, atque esse vitae sit ratione sapiente dignissimos ab reprehenderit rerum?",
    },
    {
      name: "E",
      image:
        "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_640.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo non totam ea! Eveniet sequi reiciendis, assumenda nesciunt tenetur eligendi, atque esse vitae sit ratione sapiente dignissimos ab reprehenderit rerum?",
    },
    {
      name: "F",
      image:
        "https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_640.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo non totam ea! Eveniet sequi reiciendis, assumenda nesciunt tenetur eligendi, atque esse vitae sit ratione sapiente dignissimos ab reprehenderit rerum?",
    },
  ];

  // Calculate the number of pages based on the number of cards
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  // Function to handle sliding to the next page
  const nextSlide = () => {
    if (sliderPosition < totalPages - 1) {
      setSliderPosition(sliderPosition + 1);
    }
  };

  // Function to handle sliding to the previous page
  const prevSlide = () => {
    if (sliderPosition > 0) {
      setSliderPosition(sliderPosition - 1);
    }
  };

  return (
    <div>
      <Container>
        <CardContainer>
          {cardData
            .slice(
              sliderPosition * cardsPerPage,
              (sliderPosition + 1) * cardsPerPage
            )
            .map((card, index) => (
              <Card key={index}>
                <img src={card.image} alt="" />
                <CBody>{card.description}</CBody>
                <CFooter>
                  <BDetail>{card.name}</BDetail>
                  <BDetail>Detail</BDetail>
                </CFooter>
              </Card>
            ))}
        </CardContainer>
        <SContainer>
          <BSlider onClick={prevSlide}>Previous</BSlider>
          <BSlider onClick={nextSlide}>Next</BSlider>
        </SContainer>
      </Container>
    </div>
  );
};

export default Bildung;
