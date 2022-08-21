const ta = document.getElementById("tabs2");
const contentt = document.querySelectorAll(".contentt");

const changeClasss = ell => {
    for(let ii = 0; ii < ta.children.length; ii++) {
        ta.children[ii].classList.remove("activee");
    }
    ell.classList.add("activee");
}

ta.addEventListener("click", ee => {
    const currTab2 = ee.target.dataset.btn;
    changeClasss(ee.target);
    for(let ii = 0; ii < contentt.length; ii++) {
        contentt[ii].classList.remove("activee");
        if(contentt[ii].dataset.content === currTab2) {
            contentt[ii].classList.add("activee");
        }
    }
})