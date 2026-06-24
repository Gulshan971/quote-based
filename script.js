fetch("https://dummyjson.com/quotes").then(function(val){
    return val.json()
}).then(function(val){
    const container = document.getElementById("container") ;
    val.quotes.forEach(function(item , index){
        const card = document.createElement("div") ;
        card.classList.add("card"); 
        const quote = document.createElement("p");
        quote.textContent = item.quote ;
        const author = document.createElement("h4") ;
        author.textContent = "By -:" + item.author ;
        card.appendChild(quote) ;
        card.appendChild(author) ;
        container.appendChild(card) ;
    });
}).catch(function(err){
    console.log(err) ;
})