import React from 'react';
import useFetch from './useFetch';
import './HomeDashboard.scss';

export default function HomeDashboard() {
  const { data:animals, loading, error } = useFetch("http://localhost:3000/animals");

  if (loading) return <h1>Loading...</h1>;
  if (error) console.error(error);

  function getDays(date) {
    const oneday = 1000 * 60 * 60 * 24;
    const arrivedDate = new Date(date);
    const currentDate = new Date();
    return (Math.round(currentDate.getTime() - arrivedDate.getTime()) / oneday).toFixed(0);
  }

  return (
    <div className="main-dashboard">
      {animals?.map(animal => (
        <div className="main-dashboard-card" key={animal?.id}>
          <b>{animal?.name}</b>
          <img src={`./media/${animal?.type}.png`} />
          <span>
            {animal.status === 'Available' && 
              <div className="available">
                {animal?.status}
                <br />
                {getDays(animal?.arrivedDate)} days
              </div>
            }
            {animal.status === 'Adopted' && 
              <div className="adopted">
                {animal?.status}
                <br />
                <span>{animal?.adoptedDate}</span>
              </div>
            }
          </span>
        </div>
      ))}    
    </div>
  )
}