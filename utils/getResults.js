let resultIDs = []
/*********/
let apikey = ''
/*********/
function sanitizeInput(prompt) {
    return prompt.trim().toLowerCase();
}

function getUnique(array) {
    return [...new Set(array)]
}

export async function getResultsByIds(array) {
    const requests = array.map(id =>
        fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
            .then(response => response.json())
    )
    return await Promise.all(requests)
}

export async function getResultsByName(array) {
    const results = await Promise.all(
        array.map(async (title) => {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${sanitizeInput(title)}&type=movie`)
            const data = await response.json()
            if (data['Response'] !== 'False') {
                return data['Search'][0].imdbID
            }
        })
    )
    return await getResultsByIds(results)
}

export async function getResults(prompt) {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${sanitizeInput(prompt)}&type=movie`)
    const data = await response.json()
    if (data['Response'] === 'False') {
        return [data]
    } else {
        resultIDs = data['Search'].map(item => {
            return item.imdbID
        })
        return await getResultsByIds(getUnique(resultIDs))
    }
}
