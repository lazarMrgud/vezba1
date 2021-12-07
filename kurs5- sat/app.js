

const  _hourhand   = document.querySelector("[data-hour-hand]")
const  _minhand    = document.querySelector("[data-minut-hand]")
const  _secondhand = document.querySelector("[data-secund-hand]")


/*setovanje sata na 1000 --- jedna sekunda sekundi */
setInterval(setClock,1000);

function setClock(){
    const currentDate=new Date()
    const secundradio=currentDate.getSeconds() / 60
    const minutes=(secundradio +currentDate.getMinutes ())/ 60
    const hours=(minutes + currentDate.getHours() / 12)
    
    
    setRotation( _secondhand   ,        secundradio)
    setRotation( _minhand      ,            minutes)
    setRotation( _hourhand     ,              hours)
    
}

/* element -sta zelimo da rotiramo a rotation gde zelimo da postavimo*/
function setRotation(element, rotations){
    
    /*setovanje rotacije*/
    element.style.setProperty("--rotations",rotations*360);

}
const currentDate=new Date()
const secundradio=currentDate.getSeconds() / 60
const minutes=(secundradio + currentDate.getMinutes())/ 60
const hours=(minutes + currentDate.getHours() / 12)



console.log(secundradio);
console.log(minutes);
console.log(hours);
