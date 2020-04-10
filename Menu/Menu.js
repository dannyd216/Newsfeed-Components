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

function menuCreator(menuItems) {

  // CREATE PARENT DIV FOR CONTAINER
  const pareDiv = document.createElement('div');

  // GIVE MENU CLASS FEATURES
  pareDiv.classList.add('menu')

  // CREATE UNORDEREDLIST
  const unorList = document.createElement('ul')

  //APPEND UNORDEREDLIST TO PARENTDIV
  pareDiv.appendChild(unorList);



  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>

  // create var to hold the iteration over the incoming data

  menuItems.forEach(dataItem => {

    // use map to iterate over the array 

    //after each iteration the document needs to create the //ew "li" element which is stored in a new var

    const createLI = document.createElement('li')

    // assign the text of menuItem array/data to li 

    createLI.textContent = dataItem;

    // ATTACH THE CREATED LIST ITEM TO THE UL
    unorList.appendChild(createLI)


    // console.log(menuCreator);


  })


  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  // VAR CREATED TO HOLD THE MENUbTN 
  const menuBtn = document.querySelector('.menu-button');


  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).


  // eventlis 

  // MAKE MENUBTN TOGGLE THE MENU OPEN WHEN CLICKED


  const menuToggle = () => {

    pareDiv.classList.toggle('menu--open');


  }

  menuBtn.addEventListener('click', menuToggle)

  console.log(menuBtn)



  // Step 5: return the menu component.

  // RETURN THE DIV
  return pareDiv;
}



// Step 6: add the menu component to the DOM.

// INVOKE THE FUNCTION FOR USE
// menuCreator(menuItems);

// NEED TO LINK TO HTML SELEC
const menuCompon = document.querySelector('.header')

menuCompon.appendChild(menuCreator(menuItems))

// SANITY CHECK!!!! THIS PART WORKS SO FAR
console.log(menuCompon)