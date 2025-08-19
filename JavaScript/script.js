alert("Lets get cooking, chef!") ;
console.log("Alert pop-up displayed");

// document.getElementById("jollof").addEventListener("scroll", function flicker(getElementById("jollof")) {
//     Element.style.visibility = "hidden";
//     setTimeout(() => {
//         Element.style.visibility = "visible";
//     },100);
// })
    
// }) .innerText = "Start here with jollof!";
    

document.getElementById("likeBtn").addEventListener("dblclick", function() {
    alert("Hope you'll also like our Rolex!");
})

document.getElementById("likeBtn2").addEventListener("dblclick", function() {
    alert("Thanks for your support! We hope you enjoy the recipe.");
});

let likes = 0
document.getElementById("likeBtn").addEventListener("dblclick", function() {
    likes++;
    document.getElementById("lkcount").innerText = "Likes: " + likes;
});    
    document.getElementById("likeBtn2").addEventListener("dblclick", function() {
    likes++;
    document.getElementById("lkcount2").innerText = "Likes: " + likes;
});
