
function onClock() {
    var obj = document.documentElement;
    obj.onmousedown = function (e) {
        oEvent = e||event;
        obj.mouseStart={};
        obj.mouseStart.x = oEvent.clientX;
        obj.mouseStart.y = oEvent.clientY;
        console.log('x:'+obj.mouseStart.x);
        console.log('y:'+obj.mouseStart.y);

    }
}