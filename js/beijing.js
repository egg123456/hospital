(function($) {
        $.fn.extend({
                slide: function(options) {
                    var _that = this,
                        init = null,
                        defaults = {
                            event: 'click',
                            time: 100,
                            direct: 'right',
                            trigger: _that,
                            object: _that
                        }
                    options = $.extend(defaults, options);
                    $(options.trigger).on(options.event, function() {
                            switch (options.direct) {
                                case 'right':
                                    options.stance = $(options.object).outerWidth();
                                    $(options.object).animate({
                                        left: '+=' + options.stance
                                    }, options.time);
                                    break;
                                case 'left':
                                    options.stance = $(options.object).outerWidth();
                                    $(options.object).animate({
                                        right: '+=' + options.stance
                                    }, options.time);
                                    break;
                                default:
                                    alert('param is error');
                            }
                        }
                    }
                })
        })(jquery)