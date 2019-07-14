document.getElementsByClassName(icon-bar);
$('icon-bar a').smoothScroll(); {
    
        offset = 0
       
        // one of 'top' or 'left'
        direction= 'top'
       
        // only use if you want to override default behavior or if using $.smoothScroll
        scrollTarget= null
       
        // automatically focus the target element after scrolling to it (see readme for details)
        autoFocus= false
       
        // string to use as selector for event delegation
        delegateSelector= null
       
        // fn(opts) function to be called before scrolling occurs.
        // `this` is the element(s) being scrolled
        beforeScroll= function() {}
       
        // fn(opts) function to be called after scrolling occurs.
        // `this` is the triggering element
        afterScroll= function() {}
       
        // easing name. jQuery comes with "swing" and "linear." For others, you'll need an easing plugin
        // from jQuery UI or elsewhere
        easing: 'swing',
       
        // speed can be a number or 'auto'
        // if 'auto', the speed will be calculated based on the formula:
        // (current scroll position - target scroll position) / autoCoefficient
        speed= 400,
       
        autoCoefficient= 2,
       
        // $.fn.smoothScroll only: whether to prevent the default click action
        preventDefault= true
       
      }
    
