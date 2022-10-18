

let timer=document.querySelector('#stopwatch')
let sec=0;
let min=0;
let hr=0;
let mic=0;
let= intervalid;


let id=setInterval(() => {
    
    if (mic==100) {
    //    sec=sec+1;
       mic=0 
    }



   }, 100); 


function starttimer(){
  intervalid=  setInterval(() => {
    
       if(sec<59){
        sec++;
    }else if(min>=59){
        hr++;
        min=0;
    }else{
        sec=0;
        min++;
    }
                 const micro =String(mic).padStart(2,"0")
                const second =String(sec).padStart(2,"0")
                const minute =String(min).padStart(2,"0")
                const hour =String(hr).padStart(2,"0")
                
                

     timer.innerText= hour + ":"  +  minute  +":"   +  second +  " ";
    
      
    
    
  
    
       
    
    

    
       




   
}, 1000);


}

function stoptimer() {
    
clearInterval(intervalid)

}
function resettimer() {
    
    hr = 0;
    min = 0;
    sec = 0;
    clearInterval(intervalid)
    document.getElementById('stopwatch').innerHTML="00:00:00";

    
              
}


