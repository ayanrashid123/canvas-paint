var mouse_event="";
var lastx,lasty;
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouse_event="mouse_down";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    if(mouse_event=="mouse_down"){
        ctx.beginPath();
        ctx.strokeStyle="black";
        ctx.lineWidth=5;
        ctx.moveTo(lastx,lasty)
        ctx.lineTo(currentx,currenty)
        ctx.stroke()
    };
    lastx=currentx;
    lasty=currenty;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouse_up"
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouse_leave"
}