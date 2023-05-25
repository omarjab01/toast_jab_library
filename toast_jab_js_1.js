const closeBtn = document.querySelectorAll('.closeAlertBtn');
const container = document.createElement('div')
container.classList.add('container_alert_jab')
document.querySelector('body').appendChild(container)

container.addEventListener('click', (e) => {
    if (e.target.matches('.closeAlertBtn')) {
        const id = e.target.closest('.toast_jab').id
        document.getElementById(id).remove()
    }
});


const toast = (type, title, message, mode = 'light') => {
    var color = ''
    var iconType = ''

    var iconColor = mode == "light" ? "iconToastLight" : "iconToastDark"
    var modeBg = mode == "light" ? "toastLightMode" : "toastDarkMode"
    var titleColor = mode == "light" ? "darkTextColor" : "lightTextColor"
    var bodyColor = mode == "light" ? "lightTextColor" : "darkTextColor"

    switch (type) {
        case 'error':
            color = 'bg-danger'
            iconType = `<i class="fa-solid fa-triangle-exclamation ${color} ${iconColor}"></i>`
            break;
        case 'success':
            color = 'bg-success'
            iconType = `<i class="fa-solid fa-check ${color} ${iconColor}"></i>`
            break;
        case 'warning':
            color = 'bg-warning'
            iconType = `<i class="fa-solid fa-exclamation ${color} ${iconColor}"></i>`
            break;
        case 'info':
            color = 'bg-info'
            iconType = `<i class="fa-solid fa-info ${color} ${iconColor}"></i>`
            break;
        default:
            color = 'bg-info'
            iconType = `<i class="fa-solid fa-info ${color} ${iconColor}"></i>`
            break;
    }

    createToast(color, iconType, title, message, modeBg, titleColor, bodyColor)
}


const createToast = (color, icon, title, message, mode, titleColor, bodyColor) => {

    console.log(mode)

    const id = `toast-${new Date().getTime()}`
    var toast = ` 
        <div class="toast_jab ${mode}" id="${id}">
            <div class="content">
                <div class="left">
                    <div class="left__color ${color}"></div>  
                    ${icon}
                </div>
                <div class="message">
                    <h4 class="${titleColor}">${title}</h4>
                    <p class="${bodyColor}">${message}</p>
                </div>
            </div>
            <span class="closeAlertBtn" title="Chiudi Alert">&times;</span>
        </div>
    `;
    var toastDiv = document.createElement('div');
    toastDiv.innerHTML = toast;
    container.insertBefore(toastDiv, container.firstChild);
    document.getElementById(id).classList.add('reveal')
    document.getElementById(id).style.animationPlayState = "running";
    toastDiv.classList.remove('reveal');
    toastDiv.classList.add('hideElement');
    setTimeout(() => {
        /* toastDiv.classList.remove('reveal');
        toastDiv.classList.add('hideElement'); */
        toastDiv.remove()
    }, 2800)
}

window.toaster = {
    toast: toast
}