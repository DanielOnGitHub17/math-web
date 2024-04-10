generatePiMaker.onclick=()=>{
    event.preventDefault();
    if(numberOfSides.reportValidity()){
        let n = +numberOfSides.value;
        Polygon.blink((new PiMaker(n, userMadePiMakers)).innerPolygon.polygon);
    }
}
