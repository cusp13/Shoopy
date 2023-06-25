// import React, { useState } from 'react';
// import '../styles/Filter.css';
// import Activity from './Activity';

// const Filter = () => {
//   const [showComponent, setShowComponent] = useState(false);

//   const showActivity = () => {
//     setShowComponent(true);
//   };

//   return (
//     <div>
//       <div className='heading'>Filter By</div>
//       <div className='filter-container'>
//         <br />
//         <button className='filter-button' onClick={showActivity}>
//           Date: Last 90 days
//         </button>
//         <button className='filter-button'>Type</button>
//         <button className='filter-button'>Status</button>
//       </div>


//       {showComponent && <Activity />}
//     </div>
//   );
// };


// export default Filter;

import {FaRegSadTear} from 'react-icons/fa';

import React, { useState } from 'react';
import '../styles/Filter.css';
import Activity from './Activity';


const Filter = () => {
  const [showComponent, setShowComponent] = useState(false);

  const showActivity = () => {
    setShowComponent(true);
  };

  return (
    <div>
      <div className='heading'>Filter By</div>
      <div className='filter-container'>
        <br />
        <button className='filter-button' onClick={showActivity}>
          Date: Last 90 days
        </button>
        <button className='filter-button'>Type</button>
        <button className='filter-button'>Status</button>
      </div>

      {showComponent ? (
        <Activity />
      ) : (
        <div>
          <p>📅 Click on the <b>Date: Last 90 days</b> button to view your activity for the past 90 days</p>

        <div className='no-activity'>
          <FaRegSadTear className='sad-icon'/>
          <h2>No Activity Found </h2>
          
          {/* <h3>Click on the <b>Date:Last 90 days</b> to get activity last 90 days activity!!</h3> */}
          </div>
           </div>
      )}
    </div>
  );
};

export default Filter;
