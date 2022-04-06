import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { StyledButton } from "../styles/StyledButton";
import { NEMO } from "../utils/config";
import { getQuotesAction, setQuoteAction } from "../redux/action";
import Loading from "../components/Loading";

export default function Quotes() {
  document.title = NEMO;

  const isLoading = useSelector((state) => state.QuotesReducer.isLoading);
  const quote = useSelector((state) => state.QuotesReducer.quote);

  const dispatch = useDispatch();
  const [count, setCount] = useState(15);
  const timer = () => setCount(count - 1);
  const refQuote = useRef(null);
  const refInfo = useRef(null);
  const home = true;

  useEffect(() => {
    dispatch(getQuotesAction(home));
  }, [dispatch, home]);

  const setQuote = () => {
    dispatch(setQuoteAction());
    setCount(15);
    refQuote.current.classList.add("zoom");
    refInfo.current.classList.add("bounce");
  };

  useEffect(() => {
    if (refQuote.current !== null && refInfo.current !== null && count < 15) {
      refQuote.current.classList.remove("zoom");
      refInfo.current.classList.remove("bounce");
    }

    if (count < 0) {
      setQuote();
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <S.Flex>
          <S.Box>
            <S.Content>
              <S.QuoteBox ref={refQuote}>
                <S.QuoteContent>
                  "
                  {quote.quote.split("\n").map((text, index) => {
                    if (index === quote.quote.split("\n").length - 1) {
                      return <S.Quote key={index}>{text}</S.Quote>;
                    }
                    return (
                      <S.Quote key={index}>
                        {text} <br /> <br />
                      </S.Quote>
                    );
                  })}
                  "
                </S.QuoteContent>
              </S.QuoteBox>
              <S.Info ref={refInfo}>
                <S.Author>{quote.author}</S.Author>
                {quote.title !== "" ? <S.Title>{quote.title}</S.Title> : <></>}
              </S.Info>
            </S.Content>
            <S.Center id="center">
              <StyledButton onClick={setQuote}>New Quote</StyledButton>
            </S.Center>
          </S.Box>
        </S.Flex>
      )}
    </>
  );
}

const S = {
  Flex: styled.div`
    min-height: 90vh;
    width: 90%;
    margin: 1rem auto;
  `,

  Box: styled.div`
    max-width: 800px;
    padding: 2rem;
    margin: 0 auto;
    border-radius: 1rem;
    box-shadow: var(--shadow-light);
    animation: fade-in 1s ease-in-out;
  `,

  Content: styled.div`
    min-height: 50vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
  `,

  QuoteBox: styled.div`
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  `,

  QuoteContent: styled.span``,

  Quote: styled.span``,

  Info: styled.div`
    padding: 1rem 0;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  `,

  Author: styled.span`
    font-size: 1.5rem;
    font-style: italic;
    font-family: "Patrick Hand", cursive;
    text-transform: capitalize;

    ::before {
      content: "-";
      margin-right: 0.5rem;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      font-style: normal;
    }
  `,

  Title: styled.span`
    font-size: 1.5rem;
    text-transform: capitalize;
    font-style: italic;
    font-family: "Patrick Hand", cursive;

    ::before {
      content: "|";
      margin: 0 1rem;
      font-style: normal;
      font-family: "Khand", sans-serif;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      font-style: normal;

      ::before {
        content: "-";
        margin: 0 0.5rem 0 0;
        font-family: "Patrick Hand", cursive;
      }
    }
  `,

  Center: styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
