export default function getAllusers (number){
    return fetch(`http://localhost:8080/users?_start=0&_limit=${number.count}`)
    .then(res => res.json())
    .then(data => data)
}