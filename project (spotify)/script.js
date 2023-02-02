console.log("Welcome to javascript");
//  initialize the variables
let audioelement = new Audio('songs/1.mp3'); 
let songIndex = 0;
let masterplay = document.getElementById('masterplay');
let mastersong = document.getElementById('mastersong');
let myprogressbar = document.getElementById('myProgressbar');
let gif = document.getElementById('gif');
let bottom= document.getElementById("b1"); //bottom ka colour change ke liye
let songItem = Array.from(document.getElementsByClassName('songItem')); //
let songs = [

    { songName: "Lose yourself", filePath: "songs/1.mp3", coverPath: "p.jpg" },
    { songName: "My ordinary life", filePath: "songs/2.mp3", coverPath: "or.jpg" },
    { songName: "Anti-hero", filePath: "songs/3.mp3", coverPath: "taylor.jpg" },
    { songName: "Beautiful people", filePath: "songs/4.mp3", coverPath: "be.jpg" },
    { songName: "Toman", filePath: "songs/5.mp3", coverPath: "mikey.jpg" },
    { songName: "I wanna be yours ", filePath: "songs/6.mp3", coverPath: "h.jpg" },
    { songName: "Spacebound", filePath: "songs/7.mp3", coverPath: "l.jpg" },

]


// handle pause/play click
masterplay.addEventListener('click', () => {                                             
    if (audioelement.paused || audioelement.currentTime <= 0) {                            
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');                                  
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;                                                          

        bottom.style.transition="all 1s";
        document.getElementById("b1").style.backgroundColor="crimson";
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');                                 
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
      
      bottom.style.transition="all 0.7s";
      bottom.style.backgroundColor="rgb(44, 42, 42)";
      

    }
})

//listen to event
audioelement.addEventListener('timeupdate', () => {                                       
    console.log('timeupdate');                                                           
    let progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);    
    console.log(progress);
    myProgressbar.value = progress;                                                        
})
myProgressbar.addEventListener('change', () => {
    audioelement.currentTime = myProgressbar.value * audioelement.duration / 100;         
})


songItem.forEach((element, i) => {                                                       

    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText= songs[i].songName;
}

)

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{  
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    makeallplays();
    
    element.addEventListener('click', (e) => {

        
        console.log(e.target);                                                    
        mastersong.innerHTML=songs[songIndex].songName;                           
        songIndex = parseInt( e.target.id);                                       
        audioelement.currentTime=0;                   
        if(audioelement.paused ){
       currentSong=songIndex;
       
        e.target.classList.remove('fa-circle-play');                                
        e.target.classList.add('fa-circle-pause');
        
        //audioelement.src= 'songs/.mp3';
        audioelement.src= 'songs/' + (songIndex+1) + '.mp3';
       // audioelement.src= 'songs/[songIndex].mp3';                                             
      // player.src = song2[currentSong];  player.play();
                                                
        audioelement.play();                                                    
        gif.style.opacity = 1; 
        masterplay.classList.remove('fa-circle-play');                                 
        masterplay.classList.add('fa-circle-pause');

        bottom.style.transition="all 1s";
        document.getElementById("b1").style.backgroundColor="crimson";
        
 }
else{
    e.target.classList.remove('fa-circle-pause');                                  
        e.target.classList.add('fa-circle-play');
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');                                 
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0; 
        bottom.style.transition="all 0.7s";
      bottom.style.backgroundColor="rgb(44, 42, 42)";
}  
})
}
)     
 
let next=document.getElementById('next');
let previous=document.getElementById('previous');
console.log(songIndex);

next.addEventListener('click', ()=>{                   
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioelement.src='songs/' + (songIndex+1) + '.mp3';
    audioelement.currentTime=0;                                                 
        audioelement.play();                                                       
        gif.style.opacity = 1; 
        masterplay.classList.remove('fa-circle-play');                                 
        masterplay.classList.add('fa-circle-pause');

        mastersong.innerHTML=songs[songIndex].songName;  

        bottom.style.transition="all 1s";
        document.getElementById("b1").style.backgroundColor="crimson";

    }
)
previous.addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=6;
    }
    else{
        songIndex -= 1;
    }
    audioelement.src='songs/' + (songIndex+1) + '.mp3';
    audioelement.currentTime=0;                                                 
        audioelement.play();                                                       
        gif.style.opacity = 1; 
        masterplay.classList.remove('fa-circle-play');                                 
        masterplay.classList.add('fa-circle-pause');
        mastersong.innerHTML=songs[songIndex].songName;

        bottom.style.transition="all 1s";
        document.getElementById("b1").style.backgroundColor="crimson";

    }
)

