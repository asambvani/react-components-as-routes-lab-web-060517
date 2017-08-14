import React from 'react';
import { actors } from '../data';


const actorsDivs = actors.map((actor,index) =>
  <div key={index}>
    <h2>{actor.name}</h2>
  Movies
  <ul>
    {actor.movies.map((movie,key)=><li key={key}>{movie}</li>)}
  </ul></div> )

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsDivs}
    </div>
  );
};

export default Actors;
