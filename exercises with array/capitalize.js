function capitalize(str) {
    return str.split(" ").map((word) => {
         let words = word.split("");
         words[0] = words[0].toUpperCase();
         return words.join("")
    }).join(" ")
}

console.log(capitalize("paralelepipedo azul e verde"))