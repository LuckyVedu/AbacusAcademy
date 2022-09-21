import { Component } from "react";

import React from "react";

class Signup extends Component{
    submitForm = event => {
        event.preventDefault()
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submitForm}>
                    <input
                        type="password"
                        id="password"
                        className="password-input-filed"
                        // value={password}
                        //   onChange={this.onChangePassword}
                    />
                    <input
                        type="password"
                        id="password"
                        className="password-input-filed"
                        // value={password}
                        //   onChange={this.onChangePassword}
                    />
                    <button>Signup</button>
                </form>
            </div>
        )
    }
}

export default Signup