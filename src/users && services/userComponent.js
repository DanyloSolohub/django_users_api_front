import React, {Component} from 'react';

class UserComponent extends Component {
    state = {flag: false}

    show = () => {
        this.setState({flag: !this.state.flag})
    }

    render() {
        let {item, choose} = this.props
        let {flag} = this.state
        return (
            <div>
                <ul>
                    <li>{item.name}</li>
                    {flag && <div>age: {item.age} <br/>gender: {item.gender} <br/> email: {item.email} <br/>
                        <button onClick={() => choose(item.id)}>delete</button>
                        <button>edit</button>
                    </div>}
                    <button onClick={this.show}>{flag ? 'close info' : 'show info'}</button>
                    <hr/>
                </ul>
            </div>
        );
    }
}

export default UserComponent;