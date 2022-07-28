export class Storage{
    constructor(key, value){
        this.key = key;
        this.value = value;
    }

    // LocalStorage
    SetItemLocalStorage(){
        localStorage.setItem(this.key, this.value);
    }
    GetItemLocalStorage(){
        return localStorage.getItem(this.key);
    }
    RemoveItemLocalStorage(){
        localStorage.removeItem(this.key);
    }
    
    // SessionStorage
    SetItemSessionStorage(){
        sessionStorage.setItem(this.key, this.value);
    }
    GetItemSessionStorage(){
        return sessionStorage.getItem(this.key);
    }
    RemoveItemSessionStorage(){
        sessionStorage.removeItem(this.key);
    }
}
