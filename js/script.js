function removeTaskbar()
{
    if (screen.width/screen.height < 1.0/1.7){
        var element = document.getElementById("taskbar-organizers");
        element.parentNode.removeChild(element);
        element = document.getElementById("taskbar-faq");
        element.parentNode.removeChild(element);
    }
}