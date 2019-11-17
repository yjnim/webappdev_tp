import React from 'react';
import logo from './img/selab_logo_S.png';
import page1img from './img/Coding-body-image.jpg'; 
import './App.css';
import './navBar.css';
import './main.css'
import Slider from 'infinite-react-carousel';

//네브바 
function navBar() {
    return (
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo"></img>
        <div className="Header-menudiv">
          <ul>
            <li>
              <a href="#">About SELab</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }



// 이미지 슬라이드 (캐루셀)
// function Carousel() {
//   const settings =  {
//     autoplay: true,
//     autoplaySpeed: 4000,
//     centerPadding: 10,
//     dots: true,
//     initialSlide: 1
//   }

//   const SimpleSlider = () => (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//     </Slider>
//   );

//   return (
//     <div className="Carousel">
//       <div className="Carousel-contents">
//         <SimpleSlider />
//       </div>
//     </div>
//   );
// }

//메인 화면
function page1() {
  return (
    <div className="Contents-page1">
      <div className="page1-title">
        <h1>lab(<span className="text-orange">se</span>);</h1>
        <h2>Software Engineering Lab<br/>@HYU ERICA, CSE Dept.</h2>
        <h3>led by asst. prof. Scott Lee<br/>Where Great Software Engineers are made</h3>
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

        <div className="App-mainbg">
          {/* 메인 화면 */}
          {page1()}
        </div>

      </div>

    </div>
  );
}

export default App;
