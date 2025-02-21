export function getAdat(vegpont, callback) {
    fetch(vegpont, { method: "GET" })
        .then((response) => response.json())
        .then((data) => { callback(data) })
        .catch((error) => console.log(error))
}

/* fetch(file)
.then(x => x.text())
.then(y => myDisplay(y)); */

export function postAdat(vegpont, adat) {
    fetch(vegpont,
        {
            method: "POST",
            body: JSON.stringify(adat)//objektumlistát átalakítjuk szöveges JSON-né
        })
        .then((response) => response.json())
        .then((data) => { console.log(data) })
        .catch((error) => console.log(error))
}

export function deleteAdat(vegpont, id) {
    fetch(vegpont+"/"+id,
        {
            method: "DELETE",
           
        })
        .then((response) => response.json())
        .then((data) => { console.log(data) })
        .catch((error) => console.log(error))
}
export function putAdat(vegpont,id, adat) {
    fetch(vegpont+"/"+id,
        {
            method: "PUT",
            body: JSON.stringify(adat)//objektumlistát átalakítjuk szöveges JSON-né
        })
        .then((response) => response.json())
        .then((data) => { console.log(data) })
        .catch((error) => console.log(error))
}