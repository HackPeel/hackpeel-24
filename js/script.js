function removeTaskbar()
{
    if (screen.width/screen.height < 1.0/1.7){
        element = document.getElementById("taskbar-faq");
        element.parentNode.removeChild(element);
    }
}

window.smoothScroll = function(target) {
    target.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
}