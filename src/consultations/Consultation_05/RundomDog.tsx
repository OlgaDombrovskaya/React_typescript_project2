import { useEffect, useState, type JSX } from "react";
import { Btn, Container, Heading, ImageContainer, Wrapper } from "./styles";

export default function RandomDog(): JSX.Element {
  const [URL, setURL] = useState<string>("");
  async function loadDogPicture(): Promise<void> {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const object = await response.json();
    const { message } = object;
    setURL(message);
  }

  useEffect(() => {
    loadDogPicture();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Heading>Random Dog</Heading>
        <ImageContainer>
          <img src={URL} alt="random-dog" />
        </ImageContainer>
        <Btn type="button" onClick={() => loadDogPicture()}>
          Next image
        </Btn>
      </Container>
    </Wrapper>
  );
}
