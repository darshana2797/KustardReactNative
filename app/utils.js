// all the reusable functions can go here


// function to make API calls using fetch
export async function request(url, opts) {

    const response = await fetch(url, opts)
    if (response.status < 200 || response.status >= 300) {
        throw "Bad request."
    } 
    const body = await response.json()

    if (body.status !== "success") {
        throw "Bad request."
    } 

    return body

}