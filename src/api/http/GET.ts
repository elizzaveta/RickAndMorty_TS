export const GET = (url: string) => {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return response.text().then(text => {
                throw new Error(`${response.status}: ${JSON.parse(text).error}`)
            })
        });
}


