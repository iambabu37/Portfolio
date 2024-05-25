let taglinks = document.getElementsByClassName("tag-links")
let tagcontents = document.getElementsByClassName("tag-content")
console.log(taglinks, tagcontents)

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