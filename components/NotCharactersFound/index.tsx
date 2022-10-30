import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { IoHeartSharp, IoCheckmarkCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFavoriteCharacter,
  searchCharacter,
} from "../../store/reducer/moviesReducer";
import styles from "./NotCharactersFound.module.css";

export const NotCharactersFound = () => {
  const favoriteCharacters = useSelector(
    (state: any) => state.characters.favoriteCharacters
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(searchCharacter(""));
  };

  return (
    <section className={styles.NotCharactersFound}>
      <h2>There are not characters that matches your search</h2>
      <p>Please try using different words</p>
      <button
        className="btn btn-primary px-4 py-2 w-25 fw-bold"
        onClick={handleClick}
      >
        Return
      </button>
    </section>
  );
};
