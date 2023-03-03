export function getIdsFromUrls(urls:string[]):number[]{
    return urls.map((url,index)=>{
        let lastSlashEntry:number = url.lastIndexOf('/');
        let id:string = url.substring(lastSlashEntry+1,url.length);
        return parseInt(id);
    })
}