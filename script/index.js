//Task 1

let tag = document.getElementById("tag-line");
let headings = document.querySelectorAll(".bg-main-content h2");
let collect = `${tag.textContent}\n`;
for(let heading of headings){
    collect += `\t${heading.textContent}\n`; 
}
alert(collect);


//Task 2

let bxs = document.querySelectorAll('.bg-main-content .box');
let when_to_launch = bxs[12];
let scoopedElements = when_to_launch.children;

let collecti= `${scoopedElements[0].innerText}\n\n${scoopedElements[1].innerText}\n\n${scoopedElements[2].innerText}`
alert(collecti);

