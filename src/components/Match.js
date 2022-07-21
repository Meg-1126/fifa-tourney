import React from 'react';
import players from '../data/playersData';

export default function Match(props) {
  console.log(props);
  let matchText;
  if (props.match.scoreDifference === 0) {
    matchText = <h2>No winners yet!</h2>;
  } else {
    matchText = <h2> {players[`id${props.match.winner}`].name} is the winner by {props.match.scoreDifference}! </h2>;
  }

  return (
    <article className='Match'>
      <h1>{players[`id${props.match.players[0]}`].name} <span>vs</span> {players[`id${props.match.players[1]}`].name}</h1>
      {matchText}
    </article>
  );
}
