export default function getToken() {
    return fetch('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin?uuid=hello',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
    })
    .then(response => response.json())
}