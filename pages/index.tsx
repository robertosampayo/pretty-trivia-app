import React, { useState, ChangeEvent, useEffect } from "react";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainPage from "../components/MainPage";
import { question } from "../interfaces";
import { useTrivia } from "../context/trivia/state";
import * as Actions from "../context/trivia/actions";

type Props = {
  questions: question[];
  error: string;
};

const fetchURL = `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`;

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API

  try {
    const res = await fetch(fetchURL);
    const data = await res.json();
    const results = data.results;

    // Pass data to the page via props
    return { props: { questions: results, error: null } };
  } catch (error) {
    // Pass error to the page via props
    return { props: { questions: [], error: error } };
  }
};

const Home = ({ questions, error }: Props) => {
  const [questionsList, setNewQuestions] = useState<question[]>(questions);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorFetch, setErrorFetch] = useState<string | null>(null);
  const { dispatch } = useTrivia();

  useEffect(() => {
    dispatch({
      type: Actions.SAVE_QUESTIONS,
      payload: questions,
    });
  }, []);

  const restartTrivia = async () => {
    try {
      setLoading(true);
      const res = await fetch(fetchURL);
      const data = await res.json();
      const results = data.results;
      setNewQuestions(results);

      dispatch({
        type: Actions.SAVE_QUESTIONS,
        payload: results,
      });

      setLoading(false);
      setErrorFetch(null);
    } catch (err: any) {
      setNewQuestions([]);
      setLoading(false);
      setErrorFetch(err);
    }
  };

  if (error) {
    return (
      <section className={styles.error}>
        <p
          dangerouslySetInnerHTML={{
            __html: error,
          }}
        />
      </section>
    );
  }

  if (errorFetch) {
    return (
      <section className={styles.error}>
        <p
          dangerouslySetInnerHTML={{
            __html: errorFetch,
          }}
        />
      </section>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Trivia App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <section className={styles.centered}>
          <p> ... Loading Game</p>
        </section>
      ) : (
        <MainPage questions={questionsList} restart={restartTrivia} />
      )}
    </div>
  );
};

export default Home;
