export default function getAllComments(number){
    return fetch(`http://localhost:8080/comments?_start=0&_limit=${number.count}`)
    .then(res => res.json())
    .then(data => data)
}