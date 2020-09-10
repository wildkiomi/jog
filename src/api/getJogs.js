export default function getJogs() {
    return fetch('https://jogtracker.herokuapp.com/api/v1/data/sync',
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')).access_token}`,
        },
    })
    .then(response => response.json())
}