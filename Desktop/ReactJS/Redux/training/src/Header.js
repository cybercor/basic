import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name:'',
        }
    }
    onName=(event)=>{
        this.setState({
            name:event.target.value
        });
    }
  render() {
    return (
        <div class="input-group">
           <input type="text" name="name"  value={this.state.name} onChange={this.onName} />
           <input type="submit" value="login"/>
        </div>
    );
  }
}

export default Header;
