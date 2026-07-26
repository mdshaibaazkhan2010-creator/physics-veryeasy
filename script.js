// ==============================
// PHYSICS VERY EASY V2
// ==============================

// Welcome
window.onload = function () {
    console.log("Physics Very Easy Loaded 🚀");
};

// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Search Chapters
function searchChapter() {

    let input = document.getElementById("searchBox").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        if(card.innerText.toLowerCase().includes(input))
            card.style.display="block";
        else
            card.style.display="none";

    });

}

// Smooth Scroll Button
function scrollTopPage(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// Counter Animation

const counters=document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=counter.getAttribute("data-target");

const c=+counter.innerText;

const increment=target/100;

if(c<target){

counter.innerText=Math.ceil(c+increment);

setTimeout(update,20);

}

else{

counter.innerText=target;

}

};

if(counter.hasAttribute("data-target"))

update();

});

// Coming Soon Alert

function comingSoon(){

alert("🚀 This chapter will be added soon!");

}
