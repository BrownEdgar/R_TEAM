export default function getAllPosts() {
	return fetch("http://localhost:8080/posts")
	.then(response => response.json())
	.then(data => data)
}