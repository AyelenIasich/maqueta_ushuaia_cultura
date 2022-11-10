




var carouselWidth = $('#artistas .carousel-inner')[0].scrollWidth;
var cardWitdth = $('#artistas .carousel-item').width();

var scrollPosition = 0;

$('.carousel-control-next').on('click', function(){
    if(scrollPosition < (carouselWidth - (cardWitdth * 5))){
        console.log('next');
        scrollPosition = scrollPosition + cardWitdth;
        $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
    }
   
});
$('.carousel-control-prev').on('click', function(){
    if(scrollPosition > 0 ){
        console.log('prev');
        scrollPosition = scrollPosition - cardWitdth;
        $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
    }
   
});



// .img-wrapper {
//     max-width: 100%!important;
//     height: 65vw!important;
//     display: flex!important;
//     justify-content: center!important;
//     align-items: flex-start!important;
//   }
  
//   img {
//     max-width: 100%!important;
//     max-height: 100%!important;
//     border-radius: 5px;
//   }
  
//   @media screen and (min-width: 576px) {
//     .carousel-inner {
//       display: flex!important;
//     }
//     .carousel-item {
//       display: block!important;
//       margin-right: 0!important;
//       flex: 0 0 calc(100% / 4)!important;
//     }
//     .img-wrapper {
//       height: 28vw!important;
//     }
//   }
//   .carousel-inner {
//     padding: 1.8em!important;
//   }
  
//   .card {
//     margin:0 .9em!important;
//     background: var(--body-bg-color)!important;
//     color: var(--white-color)!important;
//     border:none!important;
//   }
  
  
  







/* 1) Generar una función que le ingrese por parámetro algún dato ya 
sea ingresado por el usuario o declarado anteriormente en su código
 y mostrar por consola el tipo de dato que es.*/

// var varString = "Maria";
// var varNumber = 1250;
// var varBoolean = true;
// var varNull = null;
// var varArray = [1, 2, 3];

// function tipoDeDato(params) {
  
//     return  typeof (params);

// }

// console.log(tipoDeDato(varString) );
