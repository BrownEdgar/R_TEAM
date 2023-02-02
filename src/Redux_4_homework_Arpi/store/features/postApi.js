export default function getAllPosts(number){
    return fetch(`http://localhost:8080/posts?_start=0&_limit=${number.count}`)
    .then(res => res.json())
    .then(data => data)
}