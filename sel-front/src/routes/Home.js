import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css'

class Home extends Component {
    //메인 화면
    render() {
        // function goSELab() {
        //     var page1 = document.getElementsByClassName("Contents-page1")[0];
        //     var page2 = document.getElementsByClassName("Contents-page2")[0];
        //     page1.classList.remove("hidedisplay");
        //     page1.classList.add("hidedisplay");
        //     setTimeout(function() { 
        //         page1.style.display = "none"; 
        //         page2.classList.remove("newdisplay");
        //         page2.classList.add("newdisplay");
        //         page2.style.display = "block"; 
        //     }, 500);
        // }

        return(
            <div className="Contents-page1">
                <div className="page1-title">
                <h1>lab(<span className="text-orange">se</span>);</h1>
                <h2>Software Engineering Lab<br/>@HYU ERICA, CSE Dept.</h2>
                <h3>led by asst. prof. Scott Lee<br/>Where Great Software Engineers are made</h3>
                <div className="page1-q">
                    <p>Which information do you need?</p>
                    <div className="page1-q-div">
                    <Link to="/About/Selab"><button className="page1-q-div-bt">About SELab</button></Link>
                    <Link to="/Course/Lecture"><button className="page1-q-div-bt">About Courses</button></Link>
                    </div>
                </div>
                </div>
          </div>
        );
    }
}

export default Home;