import React from 'react';
import matches from '../data/matchesData';
import Match from './Match';

export default function MatchesList() {
  const matchesArr = matches.map((match)=>{
       return <Match match={match}/>;
  });

  return (
  <section className='MatchList'>
    <h1>Match List</h1>
    {matchesArr}
  </section>
  );
}
