import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { CharacterCard } from "../../components/CharacterCard";
import styles from "../../styles/Home.module.css";

const FavoriteCharacters = () => {
  const favoriteCharacters = useSelector(
    (state: any) => state.movies.favoriteCharacters
  );
  return (
    <>
      {favoriteCharacters.length > 0 ? (
        <section className={styles.cardsContainer}>
          {favoriteCharacters.map((character: any) => (
            <CharacterCard
              handleClick={() => {}}
              id={character.id}
              key={character.name}
              img={character.image}
              name={character.name}
              contentType={character.species}
            />
          ))}
        </section>
      ) : (
        <section className="w-full text-center">
          <h2>You haven&apos;t added favorite characters yet</h2>
          <Link href={"/"}>
            <button className="btn btn-primary btn-lg fw-bold px-4 py-2 mt-4 mb-4">
              Go back to characters list
            </button>
          </Link>
        </section>
      )}
    </>
  );
};

export default FavoriteCharacters;
