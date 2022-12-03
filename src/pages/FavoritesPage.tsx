import React from "react";
import { useAppSelector } from "../hooks/redux";

function FavoritesPage() {
  const { favorites } = useAppSelector((state) => state.github);
  if (favorites.length === 0) return <p className="text-center">No items.</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none">
        {favorites.map((fav) => (
          <li key={fav}>
            <a href={fav} target="_blank" rel="noreferrer">
              {fav}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesPage;
