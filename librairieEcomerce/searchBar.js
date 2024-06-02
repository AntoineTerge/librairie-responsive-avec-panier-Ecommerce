const searchBar = document.querySelector('#searchBar');

searchBar.addEventListener("keyup", (e) => {
    const searchedLetters = e.target.value;
    const items = document.querySelectorAll(".product.json")
    filterElements(searchedLetters,products);
})

function filterElements(letters, elements){
    if(letters.length > 2){
        for (let i =0; i<elements.length; i++){
            if(elements[i].textContent.toLowerCase().includes(letters)){
                elements[i].style.displayItem = "block;"
            } else {
                elements[i].style.displayItem="none";
            }
        }
    }
}