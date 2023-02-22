export const apiBaseURL: string = 'https://rickandmortyapi.com/api'

interface ApiEndpoints{
    characters: string,
    locations: string,
    episodes: string
}
export const apiEndpoints: ApiEndpoints = {
    characters: '/character',
    locations: '/location',
    episodes: '/episode'
}