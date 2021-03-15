export class userService {
    url = 'http://localhost:8000/users'

    getAllUsers() {
        return fetch(this.url)
            .then(value => value.json())
            .then(value => {
                return value
            })

    }

    choose(id) {
        return fetch(`${this.url}/${id}`)
            .then(value => {
                return value.json()
            })

    }
}

