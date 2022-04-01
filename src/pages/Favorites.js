import React from "react";
import { useContext, useEffect } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

export default function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  
  // useEffect(() => {
  //   console.log("our component has mounted")
  // });

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p>You do not have any favorites yet. Would you like to add some?</p>
    );
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
