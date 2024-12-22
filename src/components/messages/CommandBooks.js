import "./Help.css";
import books from '../../assets/book_notes/books_dir.json';
import { useState, useEffect } from "react";

const initialiseBook = {
  "Title": "", 
  "Author": "", 
  "Year": "",
  "Notes": [{ "text": "" }], 
  "Quotes": [{ "text": "" }]
}

const RenderAvailableBooks = (props) => {

  return (
    <div>
      <div>Book Notes Available</div>
      <div>------------------------------</div>
      <div>
        {props.booksList.map((item) => (
          <div> 
            <br />
            {<div>
                {'Type '}
                <kdb className="kdb-valid">{'books ' + item.id}</kdb>
                {' for ' + '"' + item.title + '"'}
            </div>}
          </div>
        )
        )}
      </div>
    </div>
  )
}

const RenderBookNotes = (props) => {

  return (
    <div>
      <div className="book-details">
        {' > ' + 'Book ID: ' +props.id+' | '
               + 'Title: ' + props.bookDetails['Title'] + ' | '
               + 'Author: ' + props.bookDetails['Author'] + ' | '
               + 'Publication: ' +props.bookDetails['Year']
               }
      </div>
      <br />
      <div className="book-details">{' > Notes & Quotes:'}</div>
      {props.bookDetails['Notes'].map((item) => (<div><br />{item.text}</div>))}
      {props.bookDetails['Quotes'].map(
        (item, index) => (<div><br />{
          <div><kdb className="kdb-valid">{index + 1}</kdb>{' ' + item.text}</div>
        }</div>)
      )}
      <br />
      <div>------------------------------</div>
    </div>
  )
}


const ContentBooks = (props) => {
  const id = props.bookID
  const booksList = props.booksList
  const bookExists = props.bookExists
  const [showBooksList, setShowBooksList] = useState(true);
  const [bookDetails, setBookDetails] = useState(initialiseBook);

  useEffect(() => {

    if (bookExists) {
      const bookName = booksList.filter((item) => item.id === id)[0]['json'];
      const selected_book = require('../../assets/book_notes/' + bookName + '.json')
      setBookDetails(selected_book)
      setShowBooksList(false)
      
    }
    // eslint-disable-next-line 
  }, [])


  return (
    <div>
      <br />
      {showBooksList 
      ? <RenderAvailableBooks booksList={booksList} />
      : <RenderBookNotes bookDetails={bookDetails} id={id}/>}
    </div>
  )
}


const ComBooks = (props) => {
  const bookID = props.id
  const booksList = books['Books'];
  const bookExists = booksList.some((item) => (item.id === bookID));
  return (
    <div>
      <br></br>
      <div className="command-valid">user@home ~ % books {bookExists?props.id:''}</div>
      <ContentBooks bookID={bookID} booksList={booksList} bookExists={bookExists}/>
    </div>
  );
};

export default ComBooks;
