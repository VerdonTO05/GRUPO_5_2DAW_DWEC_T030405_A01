document.addEventListener ( 'DOMContentLoaded' , () => {
 const interruptor = document.getElementById ( 'theme-toggle' ) ;
 const darkModeEnabled = localStorage.getItem ( 'dark-mode' ) === 'true' ;

 document.body.classList.toggle ( 'dark-mode' , darkModeEnabled ) ;
 interruptor.checked = modooscuroActivado ;

 toggleSwitch.addEventListener ( 'change' , () => {
 const isDark = toggleSwitch.checked ;
 document.body.classList.toggle ( 'dark-mode' , isDark ) ;
 localStorage.setItem ( 'modo oscuro' , isDark );
 });
 });