import React from 'react';
import Introduction from './Introduction';

class Lecture extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slide: 0,
        }

        this.slideMove = this.slideMove.bind(this);
    }

    slideMove(move) {
        var num = this.state.slide;
        if (move === 0) {
            this.setState({silde: -1});
        } else {
            this.setState({slide: num + move});
        }
    }



    render() {
        return (
            <div className="Lecture">
                <Introduction
                Move={0}
                onslideMove={this.slideMove.bind(this)}></Introduction>
            </div>
        );
    }
}

export default Lecture;