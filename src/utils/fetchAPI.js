const apiURL = 'https://mica-nails-api.vercel.app/samples'

const getSamples = () => {
    return fetch(apiURL)
        .then(samples => samples.json())
        .then(data => {
            return data
        })
        .catch(error => console.log(error))
}

export default getSamples