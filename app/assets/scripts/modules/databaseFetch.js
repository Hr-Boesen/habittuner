
class DatabaseFetch {

      static getAllNotes(){
           return fetch("/getnotes").then(result => {
             console.log(result);
             return result.json()
            })

          }
}
/*
(async _=>{
 let data = await DatabaseFetch.getAllNotes();
 data = data[0];
 console.log(` Tid: ${data.DateTime} Overskrift: ${data.HeadlineText} Text: ${data.NoteText});
})()
*/

export default DatabaseFetch;

//await fetch("/getnotes").then(r => r.json());

/*
.then(r => r.json())
.then((r) => r.json())
.then((r) => {return r.json()})
*/