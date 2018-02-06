
 	//var body = document.querySelector('body'),
    var menu = document.querySelector('#navigation_list'),
    menuBtn = document.querySelector('#menu_icon');
  
  	//body.classList.add('js');
 
  	menuBtn.addEventListener('click', function(e){
      menu.classList.toggle('show_menu');
      e.preventDefault();
      console.log('Clicked!');
    });
