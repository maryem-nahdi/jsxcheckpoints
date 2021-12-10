import './style.css';
import './App.css';
import imgsrc from "./imageInSrc.jpg";
import myvideo from "./myvideo.mp4"
import imageInpublic from "./imageInPublic.jpg"

function App() {
  return (
    <div className="App">
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className='title red'>Maryem Nahdi</h1>
      <br />
      <img src={imgsrc} alt="maryemnahdi"/>
      <br/>
      <img src={imageInpublic} alt="ReactJS"/>
      </div>
      <video src={myvideo} autoPlay="true"/>
    </div>
  );
}

export default App;
