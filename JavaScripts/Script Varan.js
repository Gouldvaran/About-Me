//Start

let theNumber = 0;

let youtubeEmbed = "https://www.youtube.com/embed/";

const youtubeLinks = [
    "n1q-R6iNxRE", 
    "0OEJWoI9Y-M",
    "qcMicgMHddE",
    "ylC5y4okPT8",
    "slWcQORjPUk",
    "r5LF2kgu8mg",
    "HkCsiBwQ2lk",
    "Z_F9hVr_BdI",
    "w2pgfr6xHPY",
    "EvkCcbd7oJM"
];

const youtubeTitles = [
    "Camellia - Venomous Snake (feat. Hatsune Miku)",
    "Boombox Cartel - Moon Love",
    "RIOT - Blackwater",
    "Fakeheist - Anima Projection",
    "KEYGEN CHURCH - Bullug Gegbug Ibgabiug Gixcure Dagabciea Fuic",
    "2Scratch - FROZEN (prod. by 2Scratch)",
    "KUURO - Don't Stop",
    "SWARM & Dani King - Heartless",
    "Porter Robinson - Sad Machine (KLOUD Remix)",
    "deadmau5 - My Heart Has Teeth (feat. Skylar Grey)"
];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function toggleSecret(id){
    document.getElementById(id).classList.toggle("noDisplay");
}

function switchVideo(){
    let videoContainer = document.getElementById("videoContainer");
    let videoTitle = document.getElementById("vidTitle");
    if (theNumber === 0){
        videoTitle.innerText= "Varan - ID (Not released)";
        videoContainer.innerHTML = '<video id="videoPlayer" controls><source src="Videos/Example 2.mp4" type="video/mp4"></video>';
        theNumber++;
    }else if(theNumber === 1){
        videoTitle.innerText= "Varan - Malfunction";
        videoContainer.innerHTML = '<video id="videoPlayer" controls><source src="Videos/Example 1.mp4" type="video/mp4"></video>';
        theNumber--;
    }
}

function changeYoutubeVideo(){
    let videoContainer = document.getElementById("youtubeVidContainer");
    let youtubeTitle = document.getElementById("youtubeVidTitle");
    let random = getRandomNumber(0, 9);
    vid = youtubeLinks[random];
    rngText = youtubeTitles[random];

    youtubeTitle.innerText = rngText;
    videoContainer.innerHTML = '<iframe id="youtubeVideo" src="'+ youtubeEmbed + vid + '" ' + 'title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    //Long string go brrr. ^ I call that an innerHTML moment.
}

//End