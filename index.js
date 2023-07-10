
const text = document.getElementById('text');
const author = document.getElementById('author');

const api_url = 'https://api.quotable.io/random';


const fetchData = async (url) => {
   const response = await fetch(url);
   const data = await response.json();
   console.log(data)

   text.innerHTML = data.content;
   author.innerHTML = data.author;
}

fetchData(api_url)


const tweet = () => {
    window.open("https://twitter.com/intent/tweet?text=" + text.innerHTML + "    --- by " + author.innerHTML, "Tweet Window", "width=600, height=300")
}