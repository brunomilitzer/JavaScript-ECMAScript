function Timer() {
    setInterval(function (){
        console.log(this)
    }, 250);
}

const timer = new Timer();