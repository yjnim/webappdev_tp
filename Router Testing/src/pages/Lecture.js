import React from 'react';
import { Link , Route} from 'react-router-dom';
import { Introductions } from '../pages';

const Lecture = ({match}) => {
    return (
        <div>
            <h2>Lecture</h2>
            <table>
                <tr>
                    <th><Link to={match.url+"/Introductions"}>Introduction</Link></th>
                </tr>
            </table>
            <Route path={match.url+"Introductions"} component={Introductions}/>
        </div>
    );
};

export default Lecture;