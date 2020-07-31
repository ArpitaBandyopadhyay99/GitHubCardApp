import React from 'react';
import Card from './Card.js';

class CardList extends React.Component{

    render() {
        return(
            <div style={{height:'500px',overflow:'scroll'}}>
                {this.props.profiles.map(profile => <Card  key={profile.id} {...profile} />)}
            </div>
        );
    }
}

export default CardList;