import React from 'react';
import User from './User';

class Users extends React.Component {
    
    state = {users: []};
    componentDidMount() {
        this.getData();
    }



    getData = () => {
        fetch("https://5ea3c7e4270de6001645fbd1.mockapi.io/users").then(data=>data.json()).then(data=> this.setState({users:data}));
    }

    render(){
        const { users } = this.state;
        
         return(
           <div className="users">
                {users.map(user=> <User key={user.id} user={user}/>)}
           </div>
           
        )
    }
}

export default Users;