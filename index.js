const quotesContainer = document.querySelector('#quotesContainer');
const btn = document.querySelector('#btn-confirm');
const quotesDesc = document.querySelector('#quotesDesc');
const authorQuotes = document.querySelector('#quotesAuthor');

// data Of Quotes
const quotesData = [
    {
        id:1,
        word:"If you can't explain it simply, you don't understand it well enough.",
        author:'Albert Einstein',
    },
    {
        id:2,
        word:"The present is theirs; the future, for which I really worked, is mine",
        author:'Nikola Tesla',
    },

    {   
        id:3,
        word:"A disciplined mind brings happiness.",
        author:'Buddha',
    },
    {   
        id:4,
        word:"Good friends, good books, and a sleepy conscience this is the ideal life.",
        author:'Mark Twain',
    },
    {   
        id:5,
        word:"A fit body, a calm mind, a house full of love. These things cannot be bought— they must be earned.",
        author:'Naval Ravikant',
    },
    {   
        id:6,
        word :"If youre not failing, you’re not pushing your limits, and if you’re not pushing your limits, you’re not maximizing your potential",
        author:'Ray Dalio',
    },
    {   
        id:7,
        word:"The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.",
        author:'Mark Zuckerberg'
    },
]

//let quote start from this one
let currentData = 1;

//display the element when r

const displayquotes = ()=>{
    currentData =  quotesData[Math.floor(Math.random()*quotesData.length)]; 
    quotesDesc.innerHTML = currentData.word;
    authorQuotes.innerText = currentData.author;
}


//attach the data to make it randomize
btn.addEventListener('click', displayquotes);








