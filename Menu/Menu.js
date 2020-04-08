/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];



// Step 1: Write a function that will create a menu component as seen below:

// <div class="menu">
//   <ul>
//     {each menu item as a list item}
//   </ul>
// </div>

// The function takes an array as its only argument.

function menuCreator(menuData) {


  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>

  // create var to hold the iteration over the incoming data
  const mappedItems = menuData.map(dataItem => {

    // use map to iterate over the array 

     //after each iteration the document needs to create the new "li" element which is stored in a new var

    const createLI = document.createElement('li')

     // assign the text of menuItem array/data to li 

    createLI.textContent = dataItem;


    console.log(menuCreator);
debugger

  } ) 


  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

 const menuBtn = document.querySelector('.menu-button');

 
  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).


  // eventlis 

  menuBtn.addEventListener('click', event => {

    


  })



  // Step 5: return the menu component.


  return null
}

// Step 6: add the menu component to the DOM.