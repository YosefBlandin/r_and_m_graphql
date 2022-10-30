import { FC, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import Link from "next/link";
import { SearchBar } from "../components/SearchBar";

export const Layout: FC<any> = ({ children }) => {
  const favoriteCharacters = useSelector(
    (state: any) => state.characters.favoriteCharacters
  );
  return (
    <>
      <section className={styles.hero}>
        <Link href={"/"}>
          <h1 className={styles.hero__title}>
            Welcome to R&M with GraphQL by Yosef Blandin
          </h1>
        </Link>
      </section>

      <nav className={styles.navContainer}>
        <ul className={styles.navContainerList}>
          <Link href={"/favoriteCharacters"}>
            <li>
              <button
                className={"btn btn-outline-primary py-3 px-4 my-2 fw-bold"}
              >
                {favoriteCharacters.length} Favorite Characters
              </button>
            </li>
          </Link>
          <SearchBar />
        </ul>
      </nav>
      {children}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};
