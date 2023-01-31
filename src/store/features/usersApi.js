export default function getAllUsers() {
	return fetch("http://localhost:8080/users")
		.then(response => response.json())
		.then(data => data)
}