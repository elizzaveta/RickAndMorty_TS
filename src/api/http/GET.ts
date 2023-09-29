export const GET = (url:string)=>{
    return fetch(url)
        .then(response=> {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
        });
}


