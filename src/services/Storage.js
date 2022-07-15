export const SetItemLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}
export const GetItemLocalStorage = (key)=> {
    return localStorage.getItem(key)
}
export const RemoveItemLocalStorage = (key) => {
    localStorage.removeItem(key)
}
// Session Storage
export const SetItemSessionStorage = (key, value) => {
    sessionStorage.setItem(key, value)
}
export const GetItemSessionStorage = (key)=> {
    return sessionStorage.getItem(key)
}
export const RemoveItemSessionStorage = (key) => {
    sessionStorage.removeItem(key)
}