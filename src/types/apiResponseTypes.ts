//catalogs
export type characterCatalogType = {
    info: infoType
    characters: characterType[]
}
export type episodeCatalogType = {
    info: infoType
    episodes: episodeType[]
}
export type locationCatalogType = {
    info: infoType
    locations: locationType[]
}

// info
export type infoType = {
    count: number
    next: string
    pages: number
    prev: null | string
};

// catalog content
export type characterType = {
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
export type locationType = {
    id: number,
    name: string,
    type: string
    dimension: string
    residents: string[]
    url: string
    created: string
}

