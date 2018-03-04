$(document).ready(function() {
  
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
     
      slideBy : 3,
      navigation : true,
      margin: 20,
      autoWidth:true
  });
});

function toggle(source) {
  checkboxes = document.getElementsByName('foo');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
}




  
 