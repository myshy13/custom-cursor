var mousePos;
var prevX;
var prevY;

document.onmousemove = handleMouseMove;

setInterval(move, 1); // setInterval repeats every X ms
setInterval(moveLarge, 35)

function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX =
            event.clientX +
            ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
            ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
        event.pageY =
            event.clientY +
            ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
            ((doc && doc.clientTop) || (body && body.clientTop) || 0);
    }

    mousePos = {
        x: event.pageX,
        y: event.pageY,
    };
}
function move() {
    var pos = mousePos;
    if (!pos) {
        // We haven't seen any movement yet
    } else {
        // Use pos.x and pos.y
        const cursor = document.getElementById("cursor");
        cursor.style.left = pos.x + "px";
        cursor.style.top = pos.y + "px";
    }
}

function moveLarge(params) {
    var pos = mousePos;
    if (!pos) {
        // We haven't seen any movement yet
    } else {
        // Use pos.x and pos.y
        const cursor = document.getElementById("largeCursor");
        cursor.style.left = pos.x - 10 + "px";
        cursor.style.top = pos.y - 10 + "px";
    }
}

document.onmouseleave = () => {
    const largeCursor = document.getElementById("largeCursor");
    const cursor = document.getElementById("cursor");

    cursor.style.display = none
    largeCursor.style.display = none
}