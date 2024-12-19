// Lesson 08.07 - Lyric Search API

// Query the DOM for what we'll need

//artist input box
const artist = document.getElementById('artist')

//song input box
const title = document.getElementById('title')

//get lyrics button
const getLyrics = document.querySelector('button') 
// outout area
const outputArea = document.querySelector('textarea') 

//when the get lyrics button is clicked
getLyrics.addEventListener('click', (event) => {
    event.preventDefault();
    const artistName = artist.value;
    const songTitle = title.value;
    // remove whats in the output area
    outputArea.value = 'Loading lyrics...';
    // make an API call based on whats in the input boxes
    fetch(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.error){
                outputArea.textContent = 'No lyrics found'
            } else{
                let lyrics = data.lyrics;
                if (lyrics.startsWith('Paroles de la chanson')) {
                    lyrics = lyrics.slice(lyrics.indexOf('\n') + 1)
                }
                outputArea.value = data.lyrics
            }
        }
    // put the result in the output area
)})

