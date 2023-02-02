export default function getAllPhotos(number){
    return fetch(`http://localhost:8080/photos?_start=0&_limit=${number.count}`)
    .then(res => res.json())
    .then(data => data)
}