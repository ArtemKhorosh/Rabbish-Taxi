//Mobile menu
function Menu(el) {
    if (el === null) {
      return
    }
  
    this.el = el;
  
    this.addEvents();
  }
  
  Menu.prototype.addEvents = function() {
    this.el.addEventListener('click', this.onClick, false);
  }
  
  Menu.prototype.onClick = function() {
    document.body.classList.toggle('menu-open');
  }
  
  const menu = new Menu(document.querySelector('.btn-menu'));