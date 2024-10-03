import React from 'react'

const Stats = ({ stats }) => {
  return (
    <section className="stats">
      <Stat label="Words" number={stats.numberOfWords}/>
      <Stat label="Characters" number={stats.numberOfChars}/>
      <Stat label="Instagram" number={stats.instagramCharsLeft}/>
      <Stat label="Facebook" number={stats.facebookCharsLeft}/>
    </section>
  )
}

export default Stats;

const Stat = ({ label, number = 0 }) => {

  //Show the number in red if it's negative
  const numberClass = `stat__number ${number < 0 ? 'stat__number--limit' : ''}`;

  return (
    <section className="stat">
      <span className={numberClass}>{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  )
}