import { useState } from 'react';

const Bookshelf = () => {


    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

    //Initialize your state in Bookshelf.jsx:

// Create a state variable books to store an array of book objects.
// Define another state variable, newBook, to handle the inputs for new book additions. This will be an object with a title key and an author key, which should hold empty strings to start.

      const [newBook, setNewBook] = useState({ title: '', author: '' });

  

//       Purpose: This function updates the form’s state as the user types into the input fields.

// Instructions:

// Create a function named handleInputChange that will be triggered each time the user types in an input field.
// The function should take an event object as its argument. Use this event to access the name of the input field and the value the user has typed.
// Construct a new version of the newBook object that includes the updated fields. Make sure you maintain the values of other fields in newBook that aren’t currently being updated. (Hint: Use the spread operator ... to create a new copy of the newBook object)
// Use the setNewBook setter function to update the state of newBook with this new object to reflect the changes in your UI.
     const  handleInputChange = (event) => {
       const { name, value } = event.target;
       setNewBook({...newBook,[name]: value })
     };

     
     //Create a function named handleSubmit that will execute when the form is submitted.
// The function should also take an event object as its argument. Begin the function by stopping the default form submission action using event.preventDefault().
// Use the setBooks setter function to update the books array state with this new list to include the newly added book. You’ll need to copy the current list of books and add the new book details from newBook to this list. (Hint: Use the spread operator ...)
// Reset the newBook state to its initial empty values to clear the form fields, preparing them for the next entry.
     const handleSubmit = (event) => {
      event.preventDefault();
      setBooks([...books, newBook]);
      setNewBook({ title: '', author: '' });
    };
    
    // 4. Form creation

    // Use JSX to create a form within your BookShelf component. The form should include sections for “Title” and “Author”.
    // Add input fields for both “Title” and “Author”. These inputs will allow users to enter the details for the book they want to add to the shelf.
    // Ensure each input field is connected to the corresponding property in the newBook state object. Use the value attribute to display the current state and the onChange attribute to update the state as the user types.
    // Include a submit button in the form. Attach your handleSubmit event handler to the form’s onSubmit attribute to handle the form submission. 
  
    return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit} >
       <input
       type= "text"
       name= "title"
       placeholder='Book Title'
       value= {newBook.title}
       onChange={handleInputChange}
        />
      <input 
      type="text"
      name="author" 
      placeholder='Author'
      value={newBook.author}
      onChange={handleInputChange}
      />
        <button type= 'submit'>Submit</button>
          </form>
        </div>

        <div className="bookCardsDiv">
        {books.map((book, index) => (
         <div key={index} className="bookCard">
         <h4>{book.title}</h4>
         <p>by {book.author}</p>
       </div>
     ))}
   </div>
 </div>
);
};


export default Bookshelf;