var donuts  = 0;
var clickingPower = 1;

var cursorCost = 100;
var cursors = 0;
var grannyCost = 300;
var granny = 0;
var shopCost = 1000;
var shop = 0;
var warehouse = 0;
var warehouseCost = 12000;
var factory = 0;
var factoryCost = 123000;

function buyCursor() {
    if (donuts >= cursorCost) {
        donuts = donuts - cursorCost;
        cursors = cursors + 1;
        cursorCost = Math.round(cursorCost * 1.1);

        document.getElementById("donuts").innerHTML = donuts;
        document.getElementById("cursorcost").innerHTML = cursorCost;
        document.getElementById("cursors").innerHTML = cursors;
        updateDonutsPerSecond();
    }
}

function buyGranny() {
    if (donuts >= grannyCost) {
        donuts = donuts - grannyCost;
        granny = granny + 1;
        grannyCost = Math.round(grannyCost * 1.1);

        document.getElementById("donuts").innerHTML = donuts;
        document.getElementById("grannycost").innerHTML = grannyCost;
        document.getElementById("granny").innerHTML = granny;
        updateDonutsPerSecond();
    }
}

function buyShop() {
    if (donuts >= shopCost) {
        donuts = donuts - shopCost;
        shop = shop + 1;
        shopCost = Math.round(shopCost * 1.1);

        document.getElementById("donuts").innerHTML = donuts;
        document.getElementById("shopCost").innerHTML = shopCost;
        document.getElementById("shop").innerHTML = shop;
        updateDonutsPerSecond();
    }
}

function buyWarehouse() {
    if (donuts >= warehouseCost) {
        donuts = donuts - shopCost;
        warehouse = warehouse + 1;
        warehouseCost = Math.round(warehouseCost * 1.1);

        document.getElementById("donuts").innerHTML = donuts;
        document.getElementById("warehousecost").innerHTML = warehouseCost;
        document.getElementById("warehouse").innerHTML = warehouse;
        updateDonutsPerSecond();
    }
}

function buyFactory() {
    if (donuts >= factoryCost) {
        donuts = donuts - factoryCost;
        factory = factory + 1;
        factoryCost = Math.round(factoryCost * 1.1);

        document.getElementById("donuts").innerHTML = donuts;
        document.getElementById("factoryCost").innerHTML = factoryCost;
        document.getElementById("factory").innerHTML = factory;
        updateDonutsPerSecond();
    }
}

function addToScore(amount) {
    donuts = donuts + amount;
    document.getElementById("donuts").innerHTML = donuts;
}

function updateDonutsPerSecond() {
    donutsPerSecond = cursors + granny * 2;
    donutsPerSecond = cursors + shop * 3;
    donutsPerSecond = cursors + warehouse * 4;
    donutsPerSecond = cursors + factory * 5;
    document.getElementById("donutspersecond").innerHTML = donutsPerSecond;
}

setInterval (function() {
    donuts = donuts + cursors;
    donuts = donuts + granny * 2;
    donuts = donuts + shop * 3;
    donuts = donuts + warehouse * 4;
    donuts = donuts + factory * 5;
    document.getElementById("donuts").innerHTML = donuts;

    document.title = score + "donuts - Donut Clicker";
}, 1000);


