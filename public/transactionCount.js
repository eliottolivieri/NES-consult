
var refreshTime = setInterval(
    function transCount() {
        var myFirstTime = new Date(1998,5,10);
        var myCurrentTime = new Date.now(); 
        var diffz = (myCurrentTime - myFirstTime);

        $("#countEm").innerHTML= diffz;
    },10);