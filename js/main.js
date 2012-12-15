jQuery(function($){
    jQuery('.dropdown-cart-button .dropdown-total').live('click', function(){
        $(this).next().slideToggle();

        return false;
    });
});
