document.getElementById("add-post").addEventListener("click", function() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let imageInput = document.getElementById("image");
    let imageFile = imageInput.files[0];
    
    if (title && content && imageFile) {
        let newPost = document.createElement("article");
        let imageUrl = URL.createObjectURL(imageFile);
        
        newPost.innerHTML = `
            <h2>${title}</h2>
            <p class="date">Publicado el ${new Date().toLocaleDateString()}</p>
            <img src="${imageUrl}" alt="Imagen de publicación" class="post-image">
            <p>${content}</p>
            <a href="#">Leer más</a><br><br>
            <button class="delete-post">Eliminar Post</button>
        `;
        
        document.getElementById("posts").appendChild(newPost);
        
        newPost.querySelector(".delete-post").addEventListener("click", function() {
            newPost.remove();
        });
        
        document.getElementById("post-form").reset();
    } else {
        alert("Por favor, completa todos los campos y sube una imagen.");
    }
});

document.getElementById("posts").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-post")) {
        event.target.parentElement.remove();
    }
});
