/*Select all buttons*/
const buttons = document.querySelectorAll("button");

/*Loop through each button*/

buttons.forEach(button => 
  button.addEventListener("click", decorate.bind(
    document.querySelector("#" + button.dataset.decoration)         
    )
  )
)

function decorate() {
        if (this.classList.contains("remove")) {
            this.classList.remove("remove");
        } else {
            this.classList.add("remove");
        }
    }