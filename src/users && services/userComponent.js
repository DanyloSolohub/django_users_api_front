import React, {Component} from 'react';
import {EditUser} from "./editUser";

class UserComponent extends Component {
    state = {flag: false, status: false}

    show = () => {
        this.setState({flag: !this.state.flag})
    }
    showEditUser = () => {
        this.setState({status: true})
    }

    render() {
        let {item, deleted} = this.props
        let {flag, status} = this.state
        return (
            <div>

                <ul>
                    <li>{item.name}</li>
                    {flag && <div>age: {item.age} <br/>gender: {item.gender} <br/> email: {item.email} <br/>
                        <button onClick={() => deleted(item.id)}>delete</button>
                        <button onClick={this.showEditUser}>EDIT</button>
                        {status && <EditUser item={item.id}/>}
                    </div>}
                    <button onClick={this.show}>{flag ? 'close info' : 'show info'}</button>
                    <hr/>
                </ul>


            </div>

        );
    }
}

export default UserComponent;