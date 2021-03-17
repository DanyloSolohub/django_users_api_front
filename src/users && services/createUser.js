import React, {useState} from "react";


export function CreateUser() {
    const [inputName, inputChangeName] = useState('')
    const [inputAge, inputChangeAge] = useState('')
    const [inputEmail, inputChangeEmail] = useState('')
    const [inputGender, inputChangeGender] = useState('')

    const create = () => {
        return fetch(`http://localhost:8000/users`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: inputName, age: inputAge, email: inputEmail, gender: inputGender})
        }).then(value => value.json()).then(value => {
            console.log(value)
        })
    }


    return (
        <div>
            <form>
                <input placeholder={'name'}
                       onChange={({target: {value}}) => inputChangeName(value)} type="text"/> <br/>
                <input placeholder={'age'}
                       onChange={({target: {value}}) => inputChangeAge(value)} type="number"/> <br/>
                <input placeholder={'email'}
                       onChange={({target: {value}}) => inputChangeEmail(value)} type="text"/> <br/>
                <input placeholder={'gender'}
                       onChange={({target: {value}}) => inputChangeGender(value)} type="text"/> <br/>
                <button onClick={create}>Create
                </button>
            </form>
        </div>
    )
}