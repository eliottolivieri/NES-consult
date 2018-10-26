
var refreshTime = setInterval(transCount,10)
    function transCount() {
        var myFistTime = new Date(1998,5,10);
        var myCurrentTime = new Date.now(); 
        var diffz = (myCurrentTime - myFistTime);

        $("#countEm").innerHTML(diffz);
}