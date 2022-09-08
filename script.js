function logoSwitch () {
    $('.endlogo').each(function() {
      $(this).css('top',
        $('.startlogo').offset().top -  $(this).closest('section').offset().top
      );
    });
  };
  
  $(document).scroll(function() {logoSwitch();});
  
  logoSwitch();