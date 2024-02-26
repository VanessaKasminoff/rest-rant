const commentButton = document.getElementById("button-show-or-hide-comment-form")
const commentFormContainer = document.getElementById("comment-form-container")

commentButton.addEventListener("click", () => {

    if (commentFormContainer.classList.contains("d-none")){ // if hidden
        commentFormContainer.classList.remove("d-none") // display
        commentButton.textContent = "Cancel" // offer cancel

    } else if(!commentFormContainer.classList.contains("d-none")){ // if not hidden
        commentFormContainer.classList.add("d-none") // then hide
        commentButton.textContent = "Add Comment"  // and offer option to show
        
    } else {console.log("something went wrong with showing and hiding comments")}

}, false)