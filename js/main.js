let taglinks = document.getElementsByClassName("tag-links")
let tagcontents = document.getElementsByClassName("tag-content")
function opentab(tabname) {

    for (tablink of taglinks) {
        tablink.classList.remove("active-link")

    }
    for (tabcontent of tagcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")


} 
let sidebar = document.getElementById("sidebar")
function closemenu(){
    sidebar.style.right="-40%";
    
}
function openmenu(){
    sidebar.style.right="0";
}