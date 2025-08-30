// navbar animation
gsap.from("#nav img,#nav h2,#nav li",{
    y:-40,
    duration:0.7,
    delay:1,
    opacity:0,
    stagger:0.15
})

const videoElement = document.querySelector('.secright video');

videoElement.addEventListener('mouseenter', () => {
  videoElement.play(); 
});

videoElement.addEventListener('mouseleave', () => {
  videoElement.pause();
  videoElement.currentTime = 0; 
});

let snoozeTimeout;
let alarmTimeout; 
let currentTone = 'Tone1.mp3'; 

function setTone(tone) {
    currentTone = tone; 
    const audioSource = document.getElementById('audioSource');
    audioSource.src = tone; 
    document.getElementById('bellSound').load(); 
}

function toggleToneMenu() {
    const toneMenu = document.getElementById('toneMenu');
    toneMenu.style.display = toneMenu.style.display === 'none' || toneMenu.style.display === '' ? 'block' : 'none';
}
document.getElementById('startButton').addEventListener('click', function() {
    document.querySelector('.container p').textContent = "Take a 20 second break and look at something 20 feet away when the reminder rings.";
})

function startAlarm() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('stopButton').style.display = 'inline-block';
    document.getElementById('snoozeButton').style.display = 'inline-block';
    document.getElementById('toneButton').style.display = 'none';
    alarmTimeout = setTimeout(() => {
        const bellSound = document.getElementById('bellSound');
        bellSound.loop = true;
        bellSound.play();
    }, 10000); 
}
document.getElementById('stopButton').addEventListener('click', function() {
    // Reset the paragraph text to the original message
    document.querySelector('.container p').textContent = "It's important to take regular breaks to rest your eyes.";
})

function stopAlarm() {
    const bellSound = document.getElementById('bellSound');
    bellSound.loop = false;
    bellSound.pause();
    bellSound.currentTime = 0;

    clearTimeout(alarmTimeout); 
    clearTimeout(snoozeTimeout); 

    document.getElementById('startButton').style.display = 'inline-block';
    document.getElementById('stopButton').style.display = 'none';
    document.getElementById('snoozeButton').style.display = 'none';
    document.getElementById('toneButton').style.display = 'inline-block';
    document.getElementById('toneMenu').style.display = 'none';
}  

function snoozeAlarm() {
    const bellSound = document.getElementById('bellSound');
    bellSound.pause();
    clearTimeout(snoozeTimeout);

    snoozeTimeout = setTimeout(() => {
        bellSound.play();
    }, 10000); // Snooze for 10 seconds

    document.getElementById('snoozeButton').disabled = true;
    setTimeout(() => {
        document.getElementById('snoozeButton').disabled = false;
    }, 10000); 
}

document.getElementById('startButton').addEventListener('click', startAlarm);
document.getElementById('stopButton').addEventListener('click', stopAlarm);
document.getElementById('snoozeButton').addEventListener('click', snoozeAlarm);

// For Cursor Effect
function cursoreffect(){
var main=document.querySelector("#main")
var cursor=document.querySelector("#cursor")
var page2=document.querySelector("#page2")
main.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y
  })
})
page2.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
    opacity:0.7,
    scale:1
    })
})

page3.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
    opacity:0,
    scale:0
    })
})
}
cursoreffect()

document.getElementById("homeLink").addEventListener("click", function(e) {
    e.preventDefault();
    
    if (window.location.pathname === "/index.html" || window.location.pathname === "/") {       
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.location.href = "/index.html";
    }
});

const wrapper = document.querySelector(".wrapper");
const loginLink= document.querySelector(".login-link");
const registerLink= document.querySelector(".Register-link");
const btnPopup= document.querySelector(".btnLogin-popup");
const iconClose=document.querySelector(".icon-close");

registerLink.addEventListener("click",()=>{
    wrapper.classList.add("active");
});

loginLink.addEventListener("click",()=>{
    wrapper.classList.remove("active");
});

btnPopup.addEventListener("click",()=>{
    wrapper.classList.add("active-popup")
});

iconClose.addEventListener("click",()=>{
    wrapper.classList.remove("active-popup")
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.btnLogin-popup').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
});








