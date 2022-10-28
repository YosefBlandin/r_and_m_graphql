import { gql } from "@apollo/client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import client from "../../apollo-client";

const CharacterDetails: FC<{ characterDetails: any }> = ({
  characterDetails,
}) => {
  return (
    <section className="d-flex flex-wrap justify-content-center my-4 pb-4">
      <Image
        width={300}
        height={300}
        alt={characterDetails?.name}
        src={characterDetails?.image}
        style={{ borderRadius: "10px" }}
      />
      <section className="mx-4 pt-4">
        <h2 className="fw-bold mb-4">
          Character Name: {characterDetails?.name}
        </h2>
        <p className="fw-bold">Origin: {characterDetails?.origin?.name}</p>
        <p className="fw-bold">Species: {characterDetails?.species}</p>
        <p className="fw-bold">Status: {characterDetails?.status}</p>
        <p className="fw-bold">Gender: {characterDetails?.gender}</p>
      </section>
    </section>
  );
};

export async function getServerSideProps({
  params,
}: {
  params: { characterId: string | number };
}) {
  const { data } = await client.query({
    query: gql`
		query ExampleQuery {
			character(id: ${params.characterId.toString()}) {
				name
				image
				origin {
					name
				}
				species
				status
				gender
			}
		}
    `,
  });
  return {
    props: {
      characterDetails: data.character,
    },
  };
}

export default CharacterDetails;
