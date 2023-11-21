// import React, { useState } from 'react';
const Winner = () => {

 let mykeys=Object.keys(localStorage)
  return (
    <>
    <ul >
      <h1>list of wines</h1>
    {mykeys.map((index, key) => <li key={key}><h2>{` name  ${key+1}${index}  !`}
      {"  num of steps :"+JSON.parse(localStorage.getItem(index))}</h2></li>)}
     
    </ul>
   
    </>
  );
}
export default Winner;
