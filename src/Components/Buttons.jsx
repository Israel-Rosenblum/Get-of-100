
import React from "react";
 const Buttons = (props) => {
  return (
    <main>
    <div className='Buttons' onClick={props.onclick}  >
      <button type='text' className="btn">+1</button>
      <button type='text' className="btn">-1</button>
      <button type='text' className="btn">/2</button>
      <button  type='text' className="btn">*2</button>
    </div>
    <div>
      <button onClick={props.exit}>Exit</button>
    </div>

    </main>
  );
}
export default Buttons;
