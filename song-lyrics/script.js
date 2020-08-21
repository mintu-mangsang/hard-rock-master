const form = document.getElementById('form')
const search = document.getElementById('search')
const result = document.getElementById('result')


/// api URL ///
const apiURL = 'https://api.lyrics.ovh';


/// adding event listener in form

form.addEventListener('submit', e=> {
    e.preventDefault();
    searchValue = search.value.trim()

    if(!searchValue){
        alert("There is nothing to search")
    }
    else{ 
        searchSong(searchValue)
    }
})


//search song 
async function searchSong(searchValue){
    const searchResult = await fetch(`${apiURL}/suggest/${searchValue}`)
    const data = await searchResult.json();

    // console.log(finaldata)
    showData(data)
}

//display final result in DO
function showData(data){
  
    result.innerHTML = `
    <div class="d-flex justify-content-center">
    <ul class="song-list">
      ${data.data
        .map(song=> `<li>
                    <div>
                        <strong>${song.artist.name}</strong> -${song.title} 
                    </div>
                    <span data-artist="${song.artist.name}" data-songtitle="${song.title}"> Get Lyrics</span>
                </li>`
        )
        .join('')}
    </ul
    </div>
  `;
}




//event listener in get lyrics button
result.addEventListener('click', e=>{
    const clickedElement = e.target;

    //checking clicked elemet is button or not
    if (clickedElement.tagName === 'SPAN'){
        const artist = clickedElement.getAttribute('data-artist');
        const songTitle = clickedElement.getAttribute('data-songtitle');
        
        getLyrics(artist, songTitle)
    }
})

// Get lyrics for song
async function getLyrics(artist, songTitle) {
    const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = await res.json();
  
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
  
    result.innerHTML = `<div class="single-result row align-items-center my-3 p-3">
    <div class="col-md-9">
        <h3 class="lyrics-name">${artist}</h3>
        <p class="author lead">Album by <span>${songTitle}</span></p>
    </div>
    <div class="col-md-3 text-md-right text-center">
        <button class="btn btn-success">${lyrics}</button>
    </div>
  </div>`;
  
  }

  