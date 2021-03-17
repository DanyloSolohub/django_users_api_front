import React, {Component} from 'react';
import {userService} from "./userService";
import UserComponent from './userComponent'
import {CreateUser} from "./createUser";

class AllUsers extends Component {
    state = {users: [], newUserForm: false, inputValue: null}
    userService = new userService()




    newUser() {
        this.setState({newUserForm: true})
    }



    delete(id) {
        return fetch(`http://localhost:8000/users/${id}`, {
            method: 'DELETE'
        }).then(value => value.json()).then(value => {
            console.log(value)
        }).catch(reason => {
            console.log(reason)
        })
    }

    render() {
        let {users, newUserForm, inputValue} = this.state
        console.log(inputValue)
        return (
            <div>
                {
                    users.map(value => <UserComponent item={value} key={value.id} deleted={this.delete}/>)
                }
                <ul>
                    <li>
                        {!newUserForm && <button onClick={() => {
                            this.newUser()
                        }}>create new User</button>}

                        {newUserForm && <CreateUser/>}
                    </li>
                </ul>


            </div>
        );
    }

    componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users: value}))
    }
}

export default AllUsers;