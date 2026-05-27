let Quote_Explored = [

];

let Quote_Explored_Num = 0;
let quote = "";
async function RandomQuote(){
    try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        quote = await response.json();
        document.getElementById("quote").innerHTML = quote["quote"];
        document.getElementById("author").innerHTML = quote["author"];
    }
    catch (error) {
        document.getElementById("quote").innerHTML = "Quotes aren't always useful";
        document.getElementById("author").innerHTML = "Null";
    }

        let alreadyExplored = Quote_Explored.includes(quote["id"]);

        if (!alreadyExplored) {
            Quote_Explored.push(quote["id"]);
            Quote_Explored_Num ++;
        }
        save();
        Quote_Explored_Display();
}

function save() {
    localStorage.setItem("Quote_Explored", JSON.stringify(Quote_Explored));
    localStorage.setItem("Quote_Explored_Num", Quote_Explored_Num);
}

function load() {
    let saved_list = localStorage.getItem("Quote_Explored");
let saved_num = localStorage.getItem("Quote_Explored_Num");
    if (saved_list) {
        Quote_Explored = JSON.parse(saved_list);
    }
    if (saved_num) {
        Quote_Explored_Num = parseInt(saved_num);
    }
}
load();
Quote_Explored_Display();

function Quote_Explored_Display() {
    let num = localStorage.getItem("Quote_Explored_Num") || 0;
    let percentage = (((num)/1454)*100).toFixed(2);
    document.getElementById("quote-progress-text").innerHTML = `
        Quote Explored: ${num}/1454 (${percentage}%)`;
}
