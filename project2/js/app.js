/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
/**/

let navigation= document.querySelector('#navbar__list');
let sections =document.querySelectorAll('section');

let Creatnavbar =  function(){
    let UI = "";
    sections.forEach(section => {

        const secID = section.id; 
        const secDataNav = section.dataset.nav;

        UI += `<li><a class="menu__link" href="#${secID}">${secDataNav}</a></li>`;
    });
        navigation.innerHTML = UI;
 
 
};
Creatnavbar();


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
let set = function(section)  {
    return Math.floor(section.getBoundingClientRect().top);
};

//remove and add active 
let remove = function(section)  {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};

let add = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
       sectionid = sectio.id.slic(7,8) -1;
       navigation.childNodes[sectionid].style.cssText="background-color: blue";
    };
};

//implementating the actual function
//Activation the section 

let Activation = function()  {
    sections.forEach(section => {
        let elementset = set(section);

        inviewport = () => elementset < 80 && elementset >= -80;

        remove(section);
        add(inviewport(),section);
    });
};

window.addEventListener('scroll' ,Activation);



// Scroll to section

let scrolling = function()  {

let links = document.querySelectorAll('navbar__menu a');
links.forEach(link =>{


    link.addEventListener("click", function(){
    for(i = 0 ; i<section; i++){
        sections[i].addEventListener("click" ,sectionScroll(link));
            }

        });
    });


};
scrolling();





// Set sections as active


