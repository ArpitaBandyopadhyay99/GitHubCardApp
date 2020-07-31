import React from 'react';
import './Default.css';

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            profile : this.props
        };
    }

    render() {
        return(
            <div className="github-profile">
    	        <img alt="Profile" src={this.state.profile.avatar_url} style={{width:'100px'}}/>
                <div className="info">
                    <div className="name" style={{color: (this.state.profile.company === 'Humu')?'red':'green'}}>
                        {this.state.profile.name}
                    </div>
                    <div className="company">{this.state.profile.company}</div>
                </div>
            </div>
        );
    }
}

export default Card;