export default function getAllTodos(number){
    return fetch(`http://localhost:8080/todos?_start=0&_limit=${number.count}`)
    .then(res => res.json())
    .then(data => data)
}