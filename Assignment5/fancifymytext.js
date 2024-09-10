const btn = document.getElementById("bigger");
const fancyBtn = document.getElementById("FancyShmancy");
const boringBtn = document.getElementById("BoringBetty");
const mooBtn = document.getElementById("moo")
const text = document.getElementById("text");




const bigger = (e) =>{
    alert("Hello, World");
    text.style.fontSize = "24px";
}

const fancy = () =>{
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = 'underline';
}

const boring = () =>{
    text.style.color = "";
    text.style.fontWeight = "";
    text.style.textDecoration = '';
}

const moo = () =>{
    //to uppercase
    text.value = text.value.toUpperCase();

    //add -Moo
    text.value = text.value + "-Moo";

    str_text = text.value.toString();
    let parts = str_text.split(" ");
    str_text = parts.join("_");
    text.value = str_text;
}

btn.addEventListener("click", bigger);
fancyBtn.addEventListener("click", fancy);
boringBtn.addEventListener("click", boring);
mooBtn.addEventListener("click", moo);

