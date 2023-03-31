import "./Bonus.css"

import React, { Component } from 'react';

class Bonus extends Component {
    render() {
        return (
            <div className="bonus-main">
                <div>
                    <h1 className="title">Answers to Assignment No. 8</h1>
                    <div>
                        <h4 className="answers"><small>1. Props vs state:</small> Props allows passing data which are read-only components. But State is an updatable structure that can change over time.</h4>
                        {/* <h4 className="answers"><small>2. How does useState work?</small> When we call the useState hook inside a function, it returns an array with two values. The first value is the current value and the second value is a function. We can update the first value by using the function.</h4> */}
                        <h4 className="answers"><small>3. Purpose of useEffect other than fetching data.</small> The main purpose of useEffect other than fetching data is it allows us to perform side effects in our components.</h4>
                        <h4 className="answers"><small>4. How Does React work?</small> React allows to create modular user interfaces by breaking UI into smaller, reusable components. </h4>

                    </div>
                </div>
            </div>
        );
    }
}

export default Bonus;