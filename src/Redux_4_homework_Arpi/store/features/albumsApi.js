export default function getAllAlbums(number){
    return fetch(`http://localhost:8080/albums?_start=0&_limit=${number.count}`)
    .then(res => res.json())
    .then(data => data)
}