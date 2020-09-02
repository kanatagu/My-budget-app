import React from 'react';

export const ItemsList = () => {

  return (
    <>
      <h3>History</h3>
      <div>Income list</div>
        <ul>
          <li>祝金 <span>10,000円</span><button>✖️</button></li>
        </ul>
      <div>Expenses list</div>
        <ul>
          <li>買い物 <span>-5,000円</span><button>✖️</button></li>
        </ul>
    </>
  )
}