const content = "Hi, We are semicolon. \n Front-end develop club.​​​​​​​​​​";
const text = document.querySelector(".text");
let i = 0;

async function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200)