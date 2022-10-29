import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { IoHeartSharp, IoCheckmarkCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteCharacter } from "../../store/reducer/moviesReducer";
import styles from "./styles.module.css";

type CharacterCard = {
  id: number;
  name: string;
  img: string;
  contentType: string;
  handleClick: any;
};

export const CharacterCard: FC<CharacterCard> = ({
  id,
  name,
  img,
  contentType,
  handleClick,
}) => {
  const favoriteCharacters = useSelector(
    (state: any) => state.movies.favoriteCharacters
  );
  const dispatch = useDispatch();
  return (
    <article
      className={styles.CharacterCard}
      data-testid="styles_CharacterCard"
    >
      <picture className={styles.CharacterCard__image}>
        <Image
          src={img}
          alt={name}
          layout={"fill"}
          style={{ borderRadius: "10px 10px 0 0 " }}
        />
      </picture>
      <section className={styles.CharacterCard__textContainer}>
        <p className={styles.CharacterCard__description}>{name}</p>
        <section className={styles.CharacterCard__iconsContainer}>
          <span className={styles.CharacterCard__showType}>{contentType}</span>
        </section>
        {favoriteCharacters.find(
          (character: any) => character.name === name
        ) ? (
          <button
            onClick={() => {
              dispatch(removeFavoriteCharacter(name));
            }}
            className="btn btn-outline-success w-100 mt-4 py-2 fw-bold d-flex align-items-center justify-content-center"
          >
            <IoCheckmarkCircle className={styles.CharacterCard__successIcon} />
            Character Added
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="btn btn-outline-primary w-100 mt-4 py-2 fw-bold d-flex align-items-center justify-content-center"
          >
            <IoHeartSharp className={styles.CharacterCard__likeIcon} />
            Add to Favorite
          </button>
        )}
        <Link href={`character/${id}`}>
          <button className="btn btn-primary w-100 mt-2 py-2 fw-bold">
            Details
          </button>
        </Link>
      </section>
    </article>
  );
};
