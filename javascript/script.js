const Allvideo = document.querySelector('#allVideo')
const videoPoster = document.querySelectorAll('.videoPoster');
const playPart = document.querySelector('#play-part');
const playVid = document.querySelector('.playVid')
const backButton = document.querySelector('#backButton')
const playListvp = document.querySelectorAll('.playListvp');
const progressBar = document.querySelector('.progressbar');
const videoContainer = document.querySelector('.Videocontainer')
const currentTimeEl = document.querySelector('.current');
const durationEl = document.querySelector('.duration');
const playBTN = document.querySelector('#playBTN');
const controls = document.querySelector('.controler');
const playMiddle = document.querySelector('.playMiddle')

//////////////////////////////////////////////////////////////////////// single Play////////////////////////////////////////////////////////////////////////////////////////////////////////////

backButton.addEventListener('click',()=>{
    playPart.style.display = 'none';
    playVid.src = '#';
    Allvideo.style.display = 'block'
});
videoPoster[0].addEventListener('click' ,()=>{

    playPart.style.display = 'block';
    playVid.src = '1.mp4';
    Allvideo.style.display = 'none'
});

videoPoster[1].addEventListener('click' ,()=>{

    playPart.style.display = 'block';
    playVid.src = '2.mp4';
    Allvideo.style.display = 'none'
});

videoPoster[2].addEventListener('click' ,()=>{

    playPart.style.display = 'block';
    playVid.src = '3.mp4';
    Allvideo.style.display = 'none'
});

videoPoster[3].addEventListener('click' ,()=>{

    playPart.style.display = 'block';
    playVid.src = '4.mp4';
    Allvideo.style.display = 'none'
});

videoPoster[4].addEventListener('click' ,()=>{

    playPart.style.display = 'block';
    playVid.src = '5.mp4';
    Allvideo.style.display = 'none'
});

videoPoster[5].addEventListener('click' ,()=>{

    playPart.style.display = 'block';
    playVid.src = 'siraj1.mp4';
    Allvideo.style.display = 'none'
});

videoPoster[6].addEventListener('click' ,()=>{

    playPart.style.display = 'block';
    playVid.src = 'siraj2.mp4';
    Allvideo.style.display = 'none'
});

videoPoster[7].addEventListener('click' ,()=>{

    playPart.style.display = 'block';
    playVid.src = 'siraj3.mp4';
    Allvideo.style.display = 'none'
});

videoPoster[8].addEventListener('click' ,()=>{

    playPart.style.display = 'block';
    playVid.src = 'siraj4.mp4';
    Allvideo.style.display = 'none'
});

videoPoster[9].addEventListener('click' ,()=>{

    playPart.style.display = 'block';
    playVid.src = 'siraj5.mp4';
    Allvideo.style.display = 'none'
});

videoPoster[10].addEventListener('click' ,()=>{

    playPart.style.display = 'block';
    playVid.src = 'siraj6.mp4';
    Allvideo.style.display = 'none'
});

videoPoster[11].addEventListener('click' ,()=>{

    playPart.style.display = 'block';
    playVid.src = 'siraj7.mp4';
    Allvideo.style.display = 'none'
});


// play part////////////////////////////////////////////////////////////////////////////////////////////////////
controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
playMiddle.setAttribute('style','display:none');

playListvp[0].addEventListener('click' ,()=>{
    playVid.src = '1.mp4';
    controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
    playMiddle.setAttribute('style','display:none');
});

playListvp[1].addEventListener('click' ,()=>{
    playVid.src = '2.mp4';
    controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
    playMiddle.setAttribute('style','display:none');
});

playListvp[2].addEventListener('click' ,()=>{
    playVid.src = '3.mp4';
    controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
    playMiddle.setAttribute('style','display:none');
});

playListvp[3].addEventListener('click' ,()=>{
    playVid.src = '4.mp4';
    controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
    playMiddle.setAttribute('style','display:none');
});

playListvp[4].addEventListener('click' ,()=>{
    playVid.src = '5.mp4';
    controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
    playMiddle.setAttribute('style','display:none');
});

playListvp[5].addEventListener('click' ,()=>{
    playVid.src = 'siraj1.mp4';
    controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
    playMiddle.setAttribute('style','display:none');
});

playListvp[6].addEventListener('click' ,()=>{
    playVid.src = 'siraj2.mp4';
    controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
    playMiddle.setAttribute('style','display:none');
});

playListvp[7].addEventListener('click' ,()=>{
    playVid.src = 'siraj3.mp4';
    controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
    playMiddle.setAttribute('style','display:none');
});

playListvp[8].addEventListener('click' ,()=>{
    playVid.src = 'siraj4.mp4';
    controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
    playMiddle.setAttribute('style','display:none');
});

playListvp[9].addEventListener('click' ,()=>{
    playVid.src = 'siraj5.mp4';
    controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
    playMiddle.setAttribute('style','display:none');
});

playListvp[10].addEventListener('click' ,()=>{
    playVid.src = 'siraj6.mp4';
    controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
    playMiddle.setAttribute('style','display:none');
});

playListvp[11].addEventListener('click' ,()=>{
    playVid.src = 'siraj7.mp4';
    controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
    playMiddle.setAttribute('style','display:none');
});

// video control---------------------------------------------------------------------------
controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
playMiddle.setAttribute('style','display:none');

playVid.addEventListener('click' , ()=>{
    if (playVid.paused){
        playVid.play();
        document.querySelector('#playBTN').classList.replace('fa-play','fa-pause');
        controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
        playMiddle.setAttribute('style','display:none');
    }
    else if(playVid.played){
        playVid.pause();
        document.querySelector('#playBTN').classList.replace('fa-pause','fa-play');
        controls.setAttribute('style','transition : .3s;transform : scaleY(1);transform-origin : bottom;');
        playMiddle.setAttribute('style','display:block');
    }
});

playBTN.addEventListener('click' , ()=>{
    if (playVid.paused){
        playVid.play();
        document.querySelector('#playBTN').classList.replace('fa-play','fa-pause');
        controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
        playMiddle.setAttribute('style','display:none');
    }
    else if(playVid.played){
        playVid.pause();
        document.querySelector('#playBTN').classList.replace('fa-pause','fa-play');
        controls.setAttribute('style','transition : .3s;transform : scaleY(1);transform-origin : bottom;');
        playMiddle.setAttribute('style','display:block');
    }
});

playMiddle.addEventListener('click' , ()=>{
    if (playVid.paused){
        playVid.play();
        document.querySelector('#playBTN').classList.replace('fa-play','fa-pause');
        controls.setAttribute('style','transition : .3s;transform : scaleY(0);transform-origin : bottom;');
        playMiddle.setAttribute('style','display:none');
    }
    else if(playVid.played){
        playVid.pause();
        document.querySelector('#playBTN').classList.replace('fa-pause','fa-play');
        controls.setAttribute('style','transition : .3s;transform : scaleY(1);transform-origin : bottom;');
        playMiddle.setAttribute('style','display:block');
    }
});

progressBar.addEventListener('input', ()=>{
    playVid.currentTime = progressBar.value;
    progressBar.max = playVid.duration;
});

// time update ///////////////////////////////////////////

const time = ()=>{
    let currentMinite = Math.floor(playVid.currentTime / 60);
    let currentSecond = Math.floor(playVid.currentTime - currentMinite * 60);
    let durationMinite = Math.floor(playVid.duration / 60);
    let durationSecond = Math.floor(playVid.duration - durationMinite * 60);

    currentTimeEl.innerHTML = `${currentMinite}:${currentSecond<10 ? '0'+currentSecond : currentSecond}`;
    durationEl.innerHTML = `${durationMinite}:${+durationSecond}`;

    progressBar.value = playVid.currentTime ;
    progressBar.max = playVid.duration;

}

playVid.addEventListener('timeupdate',time);