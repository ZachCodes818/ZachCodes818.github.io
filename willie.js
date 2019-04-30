$('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {

        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  $(document).ready(function(){
    $('.modal').modal();
  });
  $(function(){
    $("form").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                  var elems = document.querySelector('.modal');
                  var instance = M.Modal.init(elems);
                  instance.open();
                  setTimeout(function(){
                    window.location.replace("https://www.jaysoncodes.com");
                  }, 5000)
                
              
                }else{
                    alert("An error occured: " + response.message);
                }
            }
        });
    });
});

$('.dropdown-trigger').dropdown({
  coverTrigger:false
});