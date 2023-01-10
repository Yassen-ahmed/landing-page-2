// Global Variables

const sections = document.querySelectorAll('section')
const list = document.querySelector('#navbar__list')
const fragment = document.createDocumentFragment()

// smooth scroll  function

function scrolling(a,sec){
    //link is to call the event listener 
    // section
    a.addEventListener('click',event =>{
        event.preventDefult()
        sec.scrollIntoView({
            behavior:'smooth'
        })
        
    })
    
 }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbar(){
    for(const section of sections){
        //get the title of the section
        const title = section.getAttribute('data-nav')
        // get the id of the section
        const sectionId =  section.getAttribute('id')
        // create a list item
        const listItem = document.createElement('li')
        //create a link anchor tag
        const link = document.createElement('a')
        // set a class that style the link auto
        link.classList.add('menu__link')
        // set a href for the link the id of the other link
        link.href=`#${sectionId}`
        // get the title and set it as the link text content
        link.textContent = title 
        // smooth scroll
        link.addEventListener('click',event=>{
            // prevent the defult scroll behavior
            event.preventDefault()
            // scrolls to the section
            section.scrollIntoView({
                // setting the behavior of the scrolling to smooth
                behavior:'smooth'
            })
        })
        //adding the link  to the li
listItem.appendChild(link)
// adding the li to the fragment dom
fragment.appendChild(listItem)

    }
    //adding the frgament dom to the list varuble that creats the nav bar
    list.appendChild(fragment)
}
// calling the buildNavbar function when the page load
window.addEventListener('load',buildNavbar)


// Add class 'active' to section when near top of viewport
//adding attributes to the observer parameters
const options = {
    root: null ,
    rootMargin:'0%',
    threshHold:0.65

}
// making an observer call back
const callBack = (entries)=>{
    // geting an aray od the links  
    const links = list.querySelectorAll('a.menu__link')
    //condition  to set you-active-class
    
    if(entries[0].isIntersecting){
        entries[0].target.classList.add('your-active-class')
           // for loop to set the active class to the links
        for (const link of links){
           
          if(link.textContent === entries[0].target.getAttribute('data-nav')){
            link.classList.add('active')
            
          }else{
            link.classList.remove('active')
          }
        }
    }else{
        entries[0].target.classList.remove('your-active-class')
    }
}
// Scroll to anchor ID using scrollTO event
const observer = new IntersectionObserver(callBack,options)
window.addEventListener('scroll',()=>{
    for(const section of sections){
        observer.observe(section)

    }
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


