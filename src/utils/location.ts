import axios, { AxiosResponse } from 'axios'
export const successLocation = async (location: GeolocationPosition) => {
    const {latitude, longitude} = location.coords
    console.log(location.coords)
    const hanlderSuccess = (res: AxiosResponse<any>) => {
        const {data} = res
        const {continent, countryName, principalSubdivision, locality} = data
        console.log(continent, '-', countryName, '-', principalSubdivision, '-', locality)
    }
    axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`).then(hanlderSuccess).catch(err => console.log(err))
}
export const failureLocation = (positionError: GeolocationPositionError) => console.error(positionError)