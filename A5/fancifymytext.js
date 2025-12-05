
function bigger() {
    document.getElementById("userText").style.fontSize = "24pt";
}

function fancyShmancy() {
    document.getElementById("userText").style.fontWeight = "bold";
    document.getElementById("userText").style.color = "blue";
    document.getElementById("userText").style.textDecoration = "underline";
}

function boringBetty() {
    document.getElementById("userText").style.fontWeight = "normal";
    document.getElementById("userText").style.color = "black";
    document.getElementById("userText").style.textDecoration = "none";
    document.getElementById("userText").style.fontSize = "12pt";
}

function moo() {
    // uppercase the text
    document.getElementById("userText").value = document.getElementById("userText").value.toUpperCase();
    // adds a suffix of "-Moo" to the last word of each sentence
    let text = document.getElementById("userText").value;
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0 && words[0] !== "") {
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }
    document.getElementById("userText").value = sentences.join(".");
}


