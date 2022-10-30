import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CharacterCard } from "../components/CharacterCard";
import {
  addFavoriteCharacter,
  addCharacters,
} from "../store/reducer/moviesReducer";
import styles from "../styles/Home.module.css";
import client from "../apollo-client";
import { gql } from "@apollo/client";
import { NotCharactersFound } from "../components/NotCharactersFound";

const Home: NextPage<{ characters: any[] }> = ({ characters }) => {
  const dispatch = useDispatch();
  const charactersData = useSelector(
    (state: any) => state.characters.filteredCharacters
  );
  const handleAddFavoriteCharacter = (character: any) => {
    dispatch(addFavoriteCharacter(character));
  };
  useEffect(() => {
    dispatch(addCharacters(characters));
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty with GraphQL by Yosef Blandin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {charactersData.length > 0 ? (
          <section
            className={styles.cardsContainer}
            data-testid="Home_cardsContainer"
          >
            {charactersData.map((character: any) => (
              <CharacterCard
                handleClick={() => handleAddFavoriteCharacter(character)}
                key={character.id}
                id={character.id}
                img={character.image}
                name={character.name}
                contentType={character.species}
              />
            ))}
          </section>
        ) : (
          <NotCharactersFound />
        )}
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query ExampleQuery {
        characters {
          results {
            id
            name
            species
            image
          }
        }
      }
    `,
  });
  return {
    props: {
      characters: data.characters.results,
    },
  };
}

export default Home;
