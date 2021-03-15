import React, {Component} from 'react';
import {userService} from "./userService";
import UserComponent from './userComponent'

class AllUsers extends Component {
    state = {users: [], chosenUser: null}
    userService = new userService()
    choose = (id) => {
        this.userService.choose(id).then(value => this.setState({chosenUser: value}))

    }

    render() {
        let {users, chosenUser} = this.state
        console.log(chosenUser)
        return (
            <div>
                {
                    users.map(value => <UserComponent item={value} key={value.id} choose={this.choose}/>)
                }

            </div>
        );
    }

    componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users: value}))
    }
}

export default AllUsers;