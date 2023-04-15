import React from 'react'
import './mainButt.scss'

function MainButt() {
  return (
    <div>
      
      <div class="mainBox container-one">
        <button>
          Hover over me
          <div class="fill-one"></div>
        </button>
      </div>

      <div class="mainBox container-two">
        <button>
          Hover over me
          <div class="fill-two"></div>
        </button>
      </div>
    </div>
  );
}

export default MainButt