export function getAsyncPost() {
		return new Promise((resolve) => {
			setTimeout(() => { 
				resolve({
					id: 6,
					userId: 2,
					title: "Async post",
					body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo beatae at et."
				})
			}, 1000)
		})
}