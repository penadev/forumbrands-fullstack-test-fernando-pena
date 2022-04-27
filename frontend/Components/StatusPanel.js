import React from 'react';
import './StatusPanel.scss';

export default function StatusPanel({ numbers, adopters }) {
  return (
    <div className="status-panel">
      <div className="panel-block">
        <span>Total Animals: <b>{numbers?.totalQty}</b> </span>
        <span>Total Cats: <b>{numbers?.totalCat}</b> </span>
        <span>Total Dogs: <b>{numbers?.totalDog}</b> </span>
      </div>
      <div className="panel-block">
        <span>Available Animals: <b>{numbers?.availableQty}</b> </span>
        <span>Available Cats: <b>{numbers?.availableCat}</b> </span>
        <span>Available Dogs: <b>{numbers?.availableDog}</b> </span>
      </div>
      <div className="panel-block">
        <span>Adopters Age Range: <b>{adopters?.minAge}</b> - <b>{adopters?.maxAge}</b> </span>
        <span>
          Adopters States: 
             {adopters?.uniqueStates?.map(uniqueState => (
              <span key={uniqueState}>
                <b>&nbsp;{uniqueState}</b>
              </span>
             ))}
        </span>
      </div>
    </div>
  )
}