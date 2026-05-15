async function RandomQuote(){
    try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const quote = await response.json();
        document.getElementById("quote").innerHTML = quote["quote"];
        document.getElementById("author").innerHTML = quote["author"];
    }
    catch (error) {
        document.getElementById("quote").innerHTML = "Quotes aren't always useful";
        document.getElementById("author").innerHTML = "Null";
    }

}
