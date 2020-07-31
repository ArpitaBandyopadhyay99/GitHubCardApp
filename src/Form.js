import React from 'react';
import axios from 'axios';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userName : ''
        }
    }

     handleButton = async () => {
         const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
         this.setState({
             userName : ''
         });
         this.props.onSubmit(resp.data);

     }

    render() {
        return(
            <div className="App">
                    <input type="text" placeholder="GitHub Profile" value={this.state.userName}
                     onChange={ (event) => {this.setState({userName: event.target.value}); } } />

                    <button onClick={this.handleButton}>Add Profile</button>
            </div>
        );
    }
}

export default Form;