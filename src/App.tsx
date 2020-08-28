import React from "react";
import "./App.css";
import { CarouselProvider } from "pure-react-carousel";
import { Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function App() {
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={2}
        naturalSlideHeight={1}
        totalSlides={5}
      >
        <Slider>
          <Slide index={0}>
            <h2>Here's a text area:</h2>
            <textarea />
          </Slide>
          <Slide index={1}>
            <h2>Here's an input:</h2>
            <input />
          </Slide>
          <Slide index={2}>
            <h2>Here's a text area:</h2>
            <textarea />
          </Slide>
          <Slide index={3}>
            <h2>Here's a text area:</h2>
            <textarea />
          </Slide>
          <Slide index={4}>
            <h2>Here's a text area:</h2>
            <textarea />
          </Slide>
        </Slider>
      </CarouselProvider>

      <h2>Here's a non-carousel text area:</h2>
      <textarea />
      <h2>Here's a non-carousel input:</h2>
      <input />
    </>
  );
}

export default App;
