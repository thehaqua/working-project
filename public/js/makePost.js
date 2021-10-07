

window.onload=function(){
    var createThread = document.getElementById("newThreadBtn");
    createThread.addEventListener("click", handler);
}

function handler() {
    document.location.replace('/api/post');
}