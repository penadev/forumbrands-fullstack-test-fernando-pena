import React from 'react';
import useFetch from './useFetch';
import StatusPanel from './StatusPanel';
import { getDays, getAdopter } from './useful';
import './HomeDashboard.scss';

export default function HomeDashboard() {
  const { data:animals, loading, error } = useFetch("http://localhost:3000/animals");
  const { data:adopters, load_adopters, error_adopters} = useFetch("http://localhost:3000/adopters");

  if (loading) return <h1>Loading...</h1>;
  if (error) console.error(error);

  if (load_adopters) return <h1>Loading Adopters...</h1>;
  if (error_adopters) console.error(error_adopters);

  return (
    <div className="main-home">
      <div className="main-dashboard">
        <StatusPanel numbers={animals?.numbers} adopters={adopters} uniqueStates={adopters?.uniqueState} />
        {animals?.animals.map(animal => (
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
                  <br />
                  <span>{getAdopter(animal?.adopter, adopters?.adopters)}</span>
                </div>
              }
            </span>
          </div>
        ))}    
      </div>
    </div>
  )
}