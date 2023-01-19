export const getData = (options, limit) => {
	let baseUrl = `https://jsonplaceholder.typicode.com/${options}`;
	if (limit) {
		baseUrl += `/?_limit=${limit}`
	}
	return fetch(baseUrl)
		.then(response => response.json())
		.then(data => data)
}