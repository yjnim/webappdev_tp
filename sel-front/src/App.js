import React from 'react';
import logo from './img/selab_logo_S.png';
import './App.css';
import './navBar.css';
import Slider from 'infinite-react-carousel';

//네브바 
function navBar() {
  return (
    <header className="App-header">
      <img src={logo} alt="logo" className="App-logo"></img>
      <div className="Header-menudiv">
        <ul>
          <li>
            <a href="#">Notice</a>
          </li>
          <li>
            <a href="#">Members</a>
          </li>
          <li>
            <a href="#">Research</a>
          </li>
          <li>
            <a href="#">Publications</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
        </ul>
      </div>
    </header>
  );
}



// 이미지 슬라이드 (캐루셀)
function Carousel() {
  const SimpleSlider = () => (
    <Slider dots>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );

  return (
    <div className="Carousel">
      <div className="Carousel-contents">
        <SimpleSlider />
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">

      {/* 네브바 */}
      {navBar()}

      {/* 컨테이너 */}
      <div className="App-container">

        {/* 캐루셀 */}
        {Carousel()}

      </div>

    </div>
  );
}

export default App;
