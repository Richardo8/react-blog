import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class URLParameters extends Component {
    render(){
        return(
            <Router>
                <div>
                    <h2>Accounts</h2>
                    <ul>
                        <li><Link to="/netflix">Netflix</Link></li>
                        <li><Link to="/zillow-group">Zillow Group</Link></li>
                        <li><Link to="/yahoo">Yahoo</Link></li>
                        <li><Link to="/modus-create">Modus Create</Link></li>
                    </ul>

                    <Route path="/:id" component={Child}/>
                </div>
            </Router>
        )

    }
}
//
// class Child extends Component {
//     render(){
//         return(
//             <div>
//                 <h3>Id: { this.props.params.id }</h3>
//             </div>
//         )
//     }
// }

const Child = ({match}) => (
    <div>
        <h3>Id: { match.params.id }</h3>
    </div>
)

export default URLParameters