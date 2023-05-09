import { useEffect, useRef, useState } from "react";
import styled from "styled-components"

export const Template = () => {
  const borderBottomRef = useRef(null);
  const borderTopRef = useRef(null);
  const [isVisibleBorderBottom, setIsVisibleBorderBottom] = useState(false);
  const [isVisibleBorderTop, setIsVisibleBorderTop] = useState(false);

  const callbackFunctionBottom: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisibleBorderBottom(entry.isIntersecting);
  }

  const callbackFunctionTop: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisibleBorderTop(entry.isIntersecting);
  }

  useEffect(() => {
    const options: IntersectionObserverInit | undefined = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(callbackFunctionBottom, options)

    if (borderBottomRef.current) observer.observe(borderBottomRef.current);

    return () => {
      if (borderBottomRef.current) observer.unobserve(borderBottomRef.current);
    }
  }, [borderBottomRef]);

  useEffect(() => {
    const options: IntersectionObserverInit | undefined = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(callbackFunctionTop, options)

    if (borderTopRef.current) observer.observe(borderTopRef.current);

    return () => {
      if (borderTopRef.current) observer.unobserve(borderTopRef.current);
    }
  }, [borderTopRef]);

  return (
    <Wrapper>
      <ContainerObserver ref={borderTopRef}>View TOP</ContainerObserver>
      <Section>
        <Title>
          {
            isVisibleBorderTop ? "IN VIEWPORT TOP" : "NOT IN VIEWPORT TOP"
          }
          <br></br>
          <br></br>
          {
            isVisibleBorderBottom ? "IN VIEWPORT BOTTOM" : "NOT IN VIEWPORT BOTTOM"
          }
        </Title>
      </Section>
      <ContainerObserver ref={borderBottomRef}>View Bottom</ContainerObserver>
    </Wrapper>
  )
}

const Title = styled.h1`
  color: white;
`;

const Section = styled.div`
width: 100%;
height: 100vh;

background-color: red;

display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerObserver = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: blue;
  justify-content: center;
  align-items: center;

`;