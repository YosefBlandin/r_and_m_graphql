import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CharacterDetails = () => {
  const router = useRouter();
  const { characterId } = router.query;
  const [characterDetails, setCharacterDetails] = useState<any>({});
  useEffect(() => {
    const fetchCharacterDetails = async () => {
      const data = await axios.get(
        `/api/characterDetails/?characterId=${characterId}`
      );
      console.log("BANG", data);
      setCharacterDetails(data.data);
    };
    fetchCharacterDetails();
  }, []);
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

export default CharacterDetails;
