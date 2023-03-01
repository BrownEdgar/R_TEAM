import React, { useState } from 'react';

import './App.scss';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Wase",
      year: 1988
    },
    {
      id: 2,
      name: "Kait",
      year: 1986
    },
    {
      id: 3,
      name: "Irv",
      year: 1975
    },
    {
      id: 4,
      name: "Lux",
      year: 2015
    },
    ])
  const [isActive, setIsActive] = useState(false);

  function clickToSort() {
      const sortusers = users.sort((a, b)=> {
        return a.year - b.year
      })
      setUsers([... sortusers])
      console.log(users)
    }
  function clickToActived() {
    setIsActive(current => !current)
    console.log(isActive)
  }
  return (
    <div className="App">
        <h1>Homework</h1>
      <div className="App-header">
        <div className="Users">
        {
          users.map((user, index) => {
            return <div key={index} className ="Users_Items">
              <div className ="Users_Item">
                <h4><span>Id:</span> {user.id}</h4>
                <h4><span>Name:</span> {user.name}</h4>
                <h4><span>Year:</span> {user.year}</h4>
              </div>
              <div className='Users_Item_Particle'>
                <div className='Users_Item_Particle_Deleted'>x</div>
              </div>
                <div className={isActive? 'Users_Item_Particle_Point': ""}></div>
            </div>
          })
        }
        </div>
        <div className='Activ_Btns'>
          <button 
          onClick={clickToSort}
          className='Activ_Btns_Sort'>Sort by Ascending</button>
          <button
          onClick={clickToActived} 
          className= { isActive? 'Activ_Btns_Activate' : "Activ_Btns_NoActivate"}>Click to activate</button>
          </div>
        </div>
      </div>
  );
}

export default App;
