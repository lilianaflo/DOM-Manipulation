document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("filterContent").style.display = "none";
    document.getElementById("newContent").style.display = "none";
})
// Toggle the filter buttons
function showFilter(){
    const content = document.getElementById("filterContent");
    if(content.style.display === "none"){
        content.style.display = "block";
    } else{
        content.style.display = "none";
    }
}

// Article Form
function showAddNew(){
    const form = document.getElementById("newContent");
    if(form.style.display === "none"){
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

// Filtering by Type
function filterArticles(){
    const opin = document.getElementById("opinionCheckbox");
    const reci = document.getElementById("recipeCheckbox");
    const upda = document.getElementById("updateCheckbox");

    const opinionsC = document.querySelectorAll(".opinion");
    const recipesC = document.querySelectorAll(".recipe");
    const updatesC = document.querySelectorAll(".update");

    opinionsC.forEach(element =>{
        if(opin.checked){
            element.style.display = "block";
        } else{
            element.style.display = "none";
        }
    })
    recipesC.forEach(element =>{
        if(reci.checked){
            element.style.display = "block";
        } else{
            element.style.display = "none";
        }
    })
    updatesC.forEach(element =>{
        if(upda.checked){
            element.style.display = "block";
        } else{
            element.style.display = "none";
        }
    })

}

// Submitting Article
function addNewArticle(){
    const title = document.getElementById("inputHeader").value;
    const text = document.getElementById("inputArticle").value;
    
    const opinionRadio = document.getElementById("opinionRadio").checked;
    const recipeRadio = document.getElementById("recipeRadio").checked;
    const lifeRadio = document.getElementById("lifeRadio").checked;

    let type = "";
    let labelText = "";

    if (opinionRadio) {
        type = "opinion";
        labelText = "Opinion";
    } else if (recipeRadio) {
        type = "recipe";
        labelText = "Recipe";
    } else if (lifeRadio) {
        type = "update";
        labelText = "Update";
    }

    const articleList = document.getElementById("articleList");
    // New article
    const newArticle = document.createElement("article");
    newArticle.classList.add(type);

    newArticle.innerHTML = `
        <span class="marker">${labelText}</span>
        <h2>${title}</h2>
        <p>${text}</p>
        <p><a href="#">Read more...</a></p>
    `;

    articleList.appendChild(newArticle);

    // Clear Form
    document.getElementById("newContent").reset();
}