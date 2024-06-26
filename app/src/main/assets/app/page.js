

const animationTypeRad = localStorage.getItem('selectedAnimation');

if(animationTypeRad === 'ScaleIn'){
    document.querySelector('body').classList.add('in')
    } else{
        document.querySelector('body').classList.add('out')


    }

window.transitionToPage = function(href) {


    if(animationTypeRad === 'ScaleIn'){
    document.querySelector('body').style.transform = 'scale(1.2)';
    } else{
    document.querySelector('body').style.transform = 'scale(0.9)';
    }

     document.querySelector('body').style.opacity = '0';

    setTimeout(function() { 
        window.location.href = href

    }, 500);

 
}






document.addEventListener('DOMContentLoaded', function(event) {

        document.querySelector('body').style.transform = 'unset';   


    document.querySelector('body').style.opacity = '1';

    if(focusDisplay){
    focusDisplay.focus();
    }


});


if(localStorage.getItem('noAnimtionSwitch') === 'true'){
    document.body.style.transition = 'none';
    if(document.getElementById('clearClipboardAfter')){
    document.getElementById('pageAnimationSetting').disabled = true;
    document.getElementById('pageAnimationSetting').style.pointerEvents = 'none';
    }

    if(document.querySelector('.mainMenuHome')){
    document.querySelector('.mainMenuHome').setAttribute('quick', '')
    }


    if(document.querySelector('.historyDeleteMenu')){
        document.querySelector('.historyDeleteMenu').setAttribute('quick', '')
        }
}