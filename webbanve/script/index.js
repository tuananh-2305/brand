const buyBtns = document.querySelectorAll('.btn');
const ticket = document.querySelector('.modal');
const closeTicket  = document.querySelector('.modal-close');
const modalContainer = document.querySelector('.modal-container');

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showTicket)
}
function showTicket(){
    ticket.classList.add('open');
}
closeTicket.addEventListener('click', hideTicket)

function hideTicket(){
    ticket.classList.remove('open');
}
ticket.addEventListener('click', hideTicket)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
});

var menuHeader = document.querySelector('.header');
var mobileMenu = document.querySelector('.menu-btn');
var headerHeight = menuHeader.clientHeight;
mobileMenu.onclick = function () {
    var isClosed = menuHeader.clientHeight === headerHeight;
    if (isClosed) {
        menuHeader.style.height = 'auto';
    } else {
        menuHeader.style.height = null;
    }

};

var menuItems = document.querySelectorAll('.nav li a[href*="#"]');
for(var i = 0;i < menuItems.length; i++){
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            event.preventDefault();
        }else{
            menuHeader.style.height = null;
        }
    }
}