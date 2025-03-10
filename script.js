setHeightAndWidth();  
window.onresize = function (event) {//Ao redimensionar a tela, garante que atualiza o tam da div
  setHeightAndWidth();  
};

function setHeightAndWidth(){
    var text_img_wrapper_height = document.getElementById('text-img-wrapper').clientHeight;
    var text_img_wrapper_width = document.getElementById('text-img-wrapper').clientWidth;
    document.getElementById('sparkle-wrapper').setAttribute("style", "height:" + text_img_wrapper_height + 
    "px; width:" + text_img_wrapper_width + "px");
}