export const SetItemLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}
export const GetItemLocalStorage = (key)=> {
    return localStorage.getItem(key)
}
export const RemoveItemLocalStorage = (key) => {
    localStorage.removeItem(key)
}