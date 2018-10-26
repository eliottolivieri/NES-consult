
setInterval(donuts,1000);

function donuts(){
    var myFirst = new Date(1998,5,10);
    var myNow = new Date();
    var diffz = myFirst - myNow;
$("#countEm").text(diffz);
}