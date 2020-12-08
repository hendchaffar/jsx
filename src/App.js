import logo from './logo.svg';
import './App.css';
import React from 'react';
import './Style.css';
import JSX from "./JSX.jpg"

function App() {
  return (
  <div className="App">
   <div>
      <div style={{border: 'solid 3px gray', maxWidth: '100vw'}}>
<h1 className="title red">HEND </h1>
<br />
<img src={JSX}  />
< br />

<img src="/car.jpg" className="image" />
      </div>
      <br/>
<video width={900} height={500} controls>
<source src="myVideo.mp4" type="video/mp4"  />
</video>
  </div>
</div>
  );
}
export default App;
