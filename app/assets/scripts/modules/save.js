import $ from 'Jquery';
import DatabaseFetch from './databaseFetch';
import NoteList from './noteList';

class Save {

  static saveNote() {
    console.log("saveNote");
    let text = document.querySelector(".habit-container__headline").value;
    let headlineText = document.querySelector(".habit-container__textarea").value;

    if (text != "" || headlineText != "") {

      DatabaseFetch.sendTextNote(text, headlineText).then(new NoteList());

    }
  }

}

export default Save
