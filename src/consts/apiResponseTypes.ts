
export type catalogProps = {
    info: infoProps
    characters: characterProps[]
}
export type episodesProps = {
    info: infoProps
    episodes: episodeType[]
}
export type infoProps = {
    count: number
    next: string
    pages: number
    prev: null | string
};
export type characterProps = {
    created: string
    episode: string[]
    gender: string
    id: number
    image: string
    location:
        {
            name: string,
            url: string
        }
    name: string
    origin:
        {
            name: string,
            url: string
        }
    species: string
    status: string
    type: string
    url: string
}
export type episodeType = {
    id:number
    name: string
    air_date: string
    episode: string
    characters: string[]
    url: string
    created: string

}

