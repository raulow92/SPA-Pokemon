import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";

const DetailPage = () => {
    const { id } = useParams();
    const [dataPoke, setDataPoke] = useState("");

    const getPokes = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        setDataPoke(data);
    };

    useEffect(() => {
        getPokes();
    });

    if (!dataPoke) return <Loading />;

    return (
            <img src={dataPoke.sprites.other["official-artwork"].front_default} alt="" />
    );
};

export default DetailPage;
