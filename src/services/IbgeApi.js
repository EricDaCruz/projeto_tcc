const BASE_URL = "https://servicodados.ibge.gov.br/api/v1"

const responseToJson = (response) => response.json()

const sortByLabelAscending = (a,b) =>{
    return a.label.localeCompare(b.label)
}

export const parseState = (states)=>{
    return states
    .map(state => ({label: state.nome, value: state.sigla}))
    .sort(sortByLabelAscending)
}

export const parseCity = cities =>{
    return cities
    .map(city => ({label: city.nome, value: city.id}))
    .sort(sortByLabelAscending)
}

export const getStates = async () =>{
    const url = `${BASE_URL}/localidades/estados`
    const response = await fetch(url).then(responseToJson)
    return response
}

export const getCitiesByState = async state =>{
    const url = `${BASE_URL}/localidades/estados/${state}/municipios`
    const response = await fetch(url).then(responseToJson)
    return response
}