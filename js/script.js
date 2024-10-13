function removeTaskbar()
{
    if (screen.width/screen.height < 1/1.7){
        var element = document.getElementById("taskbar-orgnaizers");
        element.parentNode.removeChild(element);
    }
}