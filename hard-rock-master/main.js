
document.getElementById("search_btn").addEventListener("click", searchResult);

function searchResult(){
    
    document.getElementById("search_result").innerHTML = '';
    const song_title = document.getElementById("input_title").value;

    fetch(`https://api.lyrics.ovh/suggest/${song_title}`)
    .then(response => response.json())
    .then(data => {

        fetchData = data;

        for (i = 0; i<data.data.length; i++) {
        const title = data.data[i].title;
        const artist = data.data[i].artist.name;

        document.getElementById("search_result").innerHTML += `<div class="single-result row align-items-center my-3 p-3">
                            <div class="col-md-9">
                                <h3 class="lyrics-name">${title}</h3>
                                <p class="author lead">Album by <span>${artist}</span></p>
                            </div>
                            <div class="col-md-3 text-md-right text-center">
                                <a href="#lyrics"><button onclick="getLyrics(${i})" class="btn btn-success">Get Lyrics</button></a>
                            </div>
                        </div>`;
                
                        if(i == 9){
                            break;
                        }
        }
        
    });

}

function getLyrics(index){
    const title = fetchData.data[index].title;
    const artist = fetchData.data[index].artist.name;

    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
    .then( response => response.json())
    .then( data => {
        const lyrics = data.lyrics;

        document.getElementById("single_lyrics").innerHTML = `
        <h2 class="text-success mb-4">${title}</h2>
        <h4 class="text-success mb-3">${artist}</h4>
        <pre class="lyric text-white">${lyrics}</pre>`;
    })
}