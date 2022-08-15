let recordBtn=document.querySelector(".record-btn");
let recordBtnCont=document.querySelector(".record-btn-cont");
let captureBtn=document.querySelector(".capture-btn");
let captureBtnCont=document.querySelector(".capture-btn-cont");
let timerCont=document.querySelector(".timer-cont");
let timer=document.querySelector(".timer");
let video=document.querySelector("video");

let constraints={
    video:true,
    audio:true,
};

navigator.mediaDevices.getUserMedia(constraints).then(
    (stream)=>{
        video.srcObject=stream;
    }
);






captureBtnCont.addEventListener("click",function(){
    captureBtn.classList.add("scale-capture");
    setTimeout(()=>{
        captureBtn.classList.remove("scale-capture");
    },1000);
});

let isRecording=false;
recordBtnCont.addEventListener("click",function(){
    if(!isRecording){
        recordBtn.classList.add("scale-record");
        timer.style.display="block";
    }
    else{
        recordBtn.classList.remove("scale-record");
        timer.style.display="none";
    }
    isRecording=!isRecording;
});



