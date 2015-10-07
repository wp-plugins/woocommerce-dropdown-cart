jQuery(function($){
    $('.widget_shopping_mini_cart').on('click', '.dropdown-total', function($e){
        $(this).next().slideToggle();

        return false;
    });

    $('body').bind('adding_to_cart', function(){
        $('.widget_shopping_mini_cart').show();
    });

    $('body').bind('added_to_cart', function(){
        $('.widget_shopping_mini_cart').addClass('loading');
        var this_page = window.location.toString();
        this_page = this_page.replace( 'add-to-cart', 'added-to-cart' );
        if(this_page.indexOf('?') >= 0){
            this_page += '&t=' + new Date().getTime();
        }else{
            this_page += '?t=' + new Date().getTime();
        }

        $('.widget_shopping_mini_cart_content').load( this_page + ' .dropdown-cart-button', function(){
            $('.widget_shopping_mini_cart').removeClass('loading');
        });
    });

    $('.widget_shopping_mini_cart').on('click', function($e){
        $e.stopPropagation();
    });

    $(document).on('click', function(){
        $('.widget_shopping_mini_cart .dropdown').hide();
    });
});
