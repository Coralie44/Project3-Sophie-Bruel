//Function to recover the works from API
async function fetchWorks() {
    const response = await fetch("http://localhost:5678/api/works");
    if (response.ok === true) {
        return response.json()
    }
    throw new Error("Erreur lors du chargement des projets");
}

//Function to display the works
async function displayWorks() {
    try {
        //Use of fetchWorks to get the works
        const works = await fetchWorks();
        const gallery = document.querySelector(".gallery");

        //Creation of each figure tag
        works.forEach((work => {
            const figureCard = document.createElement("figure")
            
            //Creation of img
            const figureImage = document.createElement("img");
            figureImage.src = work.imageUrl; 
            figureImage.alt = work.title;

            //Creation of caption
            const figureCaption = document.createElement("figcaption")
            figureCaption.textContent = work.title;

            //Adding img and caption to figure
            figureCard.appendChild(figureImage); 
            figureCard.appendChild(figureCaption);

            //Adding figure to gallery
            gallery.appendChild(figureCard);
        }));
    } catch (error) {
        console.error("Erreur lors de l'affichage des projets :", error);
    }
}

//Call the function to recover and display the works
displayWorks();

//Function to recover the categories from API
async function fetchCategories() {
    const response = await fetch("http://localhost:5678/api/categories");
    if (response.ok === true) {
        return response.json()
    }
    throw new Error("Erreur lors du chargement des catégories");
}

fetchCategories().then(categories => console.log(categories));