const handelSidebar = () => {
    if (window.innerWidth < 992) {

        document.querySelectorAll('.sidebar .nav-link').forEach(function (element) {

            element.addEventListener('click', function (e) {

                let nextEl = element.nextElementSibling;
                let parentEl = element.parentElement;

                if (nextEl && nextEl.classList.contains('submenu')) {
                    e.preventDefault();
                    if (nextEl.style.display == 'block') {
                        nextEl.style.display = 'none';
                    } else {
                        nextEl.style.display = 'block';
                    }
                }
            });
        })
    } else {
        document.querySelectorAll('.sidebar .nav-link').forEach(function (element) {
            let nextEl = element.nextElementSibling;
            
            nextEl.style.display = "none"
            
        })
    }
}
document.querySelectorAll('.form-input').forEach(element => {
    console.log(element);
    element.onclick = () =>{
        element.parentElement.querySelector('select').click()
    }
});

document.addEventListener("DOMContentLoaded", function () {
    handelSidebar();
});
window.onresize = () => {
    handelSidebar();
}


// DOMContentLoaded  end

