function drawCircle(elementId, color) {
    const canvas = document.getElementById(elementId);
    const ctx = canvas.getContext("2d");
    //to start a new path invoke BeginPath function.
    //Call this function when you want to create a new path
    ctx.beginPath();

    //to specify a color or style for your canvas use fillStyle property
    ctx.fillStyle = color;

    //to create a full circle invoke the arc method and in that method
    //pass the value for x and y, radius, start point,
    ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2, true);

    //to close the path invoke the closePath function
    ctx.closePath();
    ctx.fill();
}

drawCircle("registers",   "yellow");
drawCircle("memory", "red");
drawCircle("graphics",   "purple");
drawCircle("info", "green");


const registersTab = document.querySelector("#registers-tab");
const memoryTab = document.querySelector("#memory-tab");
const graphicsTab = document.querySelector("#graphics-tab");
const infoTab = document.querySelector("#info-tab");


registersTab.addEventListener("click", (event) => {
    document.querySelector("#registers").classList.remove("hidden");
    document.querySelector("#memory").classList.add("hidden");
    document.querySelector("#graphics").classList.add("hidden");
    document.querySelector("#info").classList.add("hidden");

});

memoryTab.addEventListener("click", (event) => {
    document.querySelector("#registers").classList.add("hidden");
    document.querySelector("#memory").classList.remove("hidden");
    document.querySelector("#graphics").classList.add("hidden");
    document.querySelector("#info").classList.add("hidden");
});

graphicsTab.addEventListener("click", (event) => {
    document.querySelector("#registers").classList.add("hidden");
    document.querySelector("#memory").classList.add("hidden");
    document.querySelector("#graphics").classList.remove("hidden");
    document.querySelector("#info").classList.add("hidden");
});

infoTab.addEventListener("click", (event) => {
    document.querySelector("#registers").classList.add("hidden");
    document.querySelector("#memory").classList.add("hidden");
    document.querySelector("#graphics").classList.add("hidden");
    document.querySelector("#info").classList.remove("hidden");
});