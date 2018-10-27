
setInterval(donuts,20);

function donuts(){
    var myFirst = new Date(1998,5,10);
    var myNow = new Date();
    var diffz = myNow - myFirst;
    var transactionCount = diffz;
    var delimitedCount = transactionCount.toLocaleString();


$("#countEm").text(delimitedCount);
}