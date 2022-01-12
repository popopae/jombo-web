var winWidth;
var winHeight;
winWidth = $(window).width();
winHeight = $(window).height();

var init = {
    initFunctionReady: function () {
        //init.equalHeight();
        init.loginAction();
        init.placeholderDropdown();
        init.dropdownCheckList();
        init.modal();
        init.tooltip();
        init.dropdown();
        init.dropdownTag();
        init.dropdownPlaceholder();
        init.navigation();
        //init.isAnchor();
        init.checkActiveWizard();
        init.searchCompany();
        init.checkTbodyScroll();
        init.tableColumnFix();
        init.subDropdown();
        if ( $('.slider-for').length ) {
            init.slickSlide();
        }
        init.scrollTable();
        init.inputGroupFocus();
        init.fixAlert();
        init.usermenu();
        init.sidebarHeight();
        init.navTabsFix();
        init.navTabsWidth();
    },

    initFunctionResize: function () {
        init.checkHeightSize();
        init.tableColumnFix();
        init.checkTbodyScroll();
        init.fixAlert();
        init.usermenu();
        init.sidebarHeight();
        init.navTabsWidth();
    },

    checkHeightSize: function () {
        winWidth = $(window).width();
        winHeight = $(window).height();
    },

    /*checkMiddle: function() {
        var middle = $(window);
        var middleInner = $('.body-login .row>.col-6');
        var middleHeight = middle.height();
        middleInner.removeAttr('style').css('height', middleHeight + 'px');
    },*/

    navTabsFix() {
        var rowScroll = $('.nav-tabs-1');

        if ($(rowScroll).length) {
            var positionOffset = Math.round(rowScroll.offset().top - 88);

            $(window).scroll(function(){
                scroll = $(window).scrollTop();
                if (scroll >= positionOffset) rowScroll.parent().addClass('fixed-left-1');
                else rowScroll.parent().removeClass('fixed-left-1')
            });
        }
    },

    navTabsWidth() {
        var widthCardTab = $('.nav-tabs-1').closest('[class*=col-]').width();
        $('.nav-tabs-1').parent().css('width', widthCardTab + 'px');
    },

    usermenu: function() {
        $('.user-dropdown .btn, .user-menu .title-header button').off('click')
        $('.user-dropdown .btn, .user-menu .title-header button').on('click', function() {
            $('body').toggleClass('user-nav-open');
        });

        var userMenu = $('.user-menu');
        if(userMenu.length) {
            var company = $('.user-menu .card-body').removeAttr('style');
            var userMenuHeight = userMenu.height();
            var scrollUserMenu = $('.user-menu-scroll').get(0).scrollHeight;
            var companyHeight = company.outerHeight();

            if(userMenuHeight <= (scrollUserMenu - companyHeight + 120)) {
                userMenu.addClass('all-scroll');
            } else {
                userMenu.removeClass('all-scroll');
                company.css({ "maxHeight" : userMenuHeight - (scrollUserMenu - companyHeight) + 'px'})
            }
        }
        $('.notification .btn-dropdown .btn-icon').on('click', function() {
            $(this).parent().toggleClass('show');
        });
        
    },

    sidebarHeight: function() {
        function checkSidebar() {
            var hContent = $('.content').outerHeight();
            var Hfooter = $('.footer').outerHeight();
            var hHead = $('.headbar').outerHeight();
            $('.sidebar-left').removeAttr('style').css('height', hContent - Hfooter - hHead + 'px');
        }
        checkSidebar();
        $('.accordion').on('shown.bs.collapse', function () {
            checkSidebar();
        });
        $('.accordion').on('hidden.bs.collapse', function () {
            checkSidebar();
        });
    },

    fixAlert: function() {
        var fixAlert = $('.fixed-alert');
        var heightAlert = fixAlert.removeAttr('style').outerHeight();
        if(fixAlert.length > 0) {
            fixAlert.next().css('margin-top', heightAlert - 24 + 'px');
        } else {
            $('.content>div:first-child').removeAttr('style');
        }   
    },
    
    dropdown: function() {
        $('[data-toggle="dropdown"]').dropdown({boundary: 'window'});
        $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip({boundary: 'window'});
        $('.dropdown-freeze, .dropdown-menu.min-w-auto').on('click', function(e) {
            e.stopPropagation();
        });

        $('.dropdown-submenu i').on("click", function(e) {
            $(this).parent().parent().next('.dropdown-menu').toggleClass('show');
            $(this).parent().next('.dropdown-menu').toggleClass('show');
            $(this).toggleClass('show');
            e.stopPropagation();
            
        });
    },

    inputGroupFocus: function() {
        $('.form-control').bind('focus', function(){
            $(this).prev('.text-prepend').toggleClass('focus');
            console.log('focus');
        });
        $('.form-control').bind('blur', function(){
            $(this).prev('.text-prepend').toggleClass('focus');
            console.log('focus');
        });
        $('.form-control.has-text-append').bind('focus', function(){
            $(this).toggleClass('focus');
        });
        $('.form-control.has-text-append').bind('blur', function(){
            $(this).toggleClass('focus');
        });
    },

    equalHeight: function () {

        var max = 0,
            $els = $('.row-equalheight>div>div').removeAttr('style');
        $els.each(function () {
            max = Math.max($(this).height(), max);
        });

        $els.height(max);
        $('.has-first>div:first-child>div').removeAttr('style');
        
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            init.equalHeight();
        });
    },

    scrollTable: function() {
        $(".table-tbody-scroll").scroll(function() {
            $(this).parent().find(".table-thead-fixed > table").offset({ left: -1*this.scrollLeft + $(this).offset().left - $(window).scrollLeft()});
        });
    },

    slickSlide: function() {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: 0,
            prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="icon-small-angle-Left"></i></button>',
            nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="icon-small-angle-right"></i></button>'
        });
    },
    
    subDropdown: function() {
        $('.dropdown-menu [data-toggle="dropdown"]').on('click', function() {
            console.log('===');
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');

            $(this).parents('.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show').removeClass("show");
            });
            
            return false;
        });
    },

    tableColumnFix: function () {
        /* check height row-detail */
        var wrapperTable = $('.table-column-fix')
        var tableColFix = $('.table-column-fix > .table')
        var tableWidth = wrapperTable.width() - 26;

        if(tableColFix.width() > wrapperTable.width()) {
            tableColFix.parent().addClass('slide-left');
        } else {
            tableColFix.parent().removeClass('slide-left');
        }

        $('.table-column-fix .row-detail table').removeAttr('style').css('width', tableWidth + 'px');
        wrapperTable.scroll(function() {
            if($(this).scrollLeft() == 0){
                $(this).addClass('slide-left');
                $(this).removeClass('slide-right');
                console.log('left');
            } else if($(this).scrollLeft() == $(this)[0].scrollWidth - $(wrapperTable).width()) {
                $(this).removeClass('slide-left');
                //console.log('remove left');
            } else if($(this).scrollLeft() != 0) {
                $(this).addClass('slide-left');
                $(this).addClass('slide-right');
                console.log('right');
            }
        });
    },

    /* for GUI only */
    isAnchor: function () {
        $('.mainmenu a').click(function () {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 24
            }, 500);
            $(this).parent().siblings().removeClass('active');
            $(this).closest('.has-submenu').siblings().removeClass('active');
            $(this).parent().addClass('active');
            $(this).closest('.has-submenu').addClass('active');
            return false;
        });
        $('.mainmenu>li>a').click(function () {
            $(this).parent().siblings().find('.submenu li').removeClass('active');
        });
    },
    /* for GUI only */

    checkTbodyScroll: function() {
        $.fn.hasScrollBar = function() {
            return this[0] ? this[0].scrollHeight > this.innerHeight() : false;
        }
        if(!$(".table-tbody-scroll").hasScrollBar()) {
            $(".has-scroll").addClass('hide');
            //console.log('no scroll');
        } else {
            //console.log('has scroll');
        }
    },

    navigation: function () {
        var navToggle = $('.nav-toggle');
        var navMenu = $('.nav-menu');
        var content = $('.container-fluid');
        var subMenu = $('.has-submenu a');

        navMenu.click(function (e) {
            if ($(this).hasClass('nav-open')) {
                e.preventDefault();
            } else {
                if (navToggle.has(e.target).length == 0 && !navToggle.is(e.target)) {
                    content.addClass('nav-open');
                    $(this).addClass('nav-open');
                    navToggle.children().toggleClass('icon-action icon-menu');
                }
            }
            init.navTabsWidth();
        });

        navToggle.click(function () {
            content.toggleClass('nav-open');
            $(this).closest('body').find('.nav-menu').toggleClass('nav-open');
            $(this).children().toggleClass('icon-action icon-menu');
            init.navTabsWidth();
        });

        $(window).click(function (e) {
            if (navMenu.has(e.target).length == 0 && !navMenu.is(e.target)) {
                /*content.removeClass('nav-open');
                navToggle.parent().removeClass('nav-open');
                navToggle.children().addClass('icon-action');
                navToggle.children().removeClass('icon-menu');*/
                $(".table-responsive").removeClass('open-dropdown');
            }
        });

        subMenu.parent(this).each(function () {
            if ($(this).hasClass('open')) {
                $(this).find('ul').css('height', $(this).find('li').length * 40 + 'px');
            }
        });
        subMenu.click(function (e) {
            $(this).parent().toggleClass('open');
            $(this).parent().siblings().removeClass('open');
            e.preventDefault();
            if ($(this).parent().hasClass('open')) {
                $(this).parent().siblings().find('ul').css('height', '0');
                $(this).parent().find('ul').css('height', $(this).parent().find('li').length * 40 + 'px');
            } else {
                $(this).parent().find('ul').css('height', '0');
            }
        });
    },

    searchCompany: function() {
        $('#sc').click(function() {
            $('.content .card-content .title-header').slideUp({
                complete: function(){
                    $('#result').slideDown();
                }
            });
        });
        /*document.querySelector('#sc').addEventListener('click', function () {
            document.querySelector('#result').classList.toggle('height0')
        });*/
    },

    loginAction: function () {
        const body = $('.body-login');
        const nav = $('.navbar, .headbar');
        const container = $('.body-login>[class*=container-]');
        const buttton = $('.btn-outline');
        const sec = 400;

        buttton.click(function (e) {
            e.preventDefault();
            container.each(function () {
                $(this).closest(container).toggleClass('show hide').delay(sec).queue(function () {
                    $(this).toggleClass('above').dequeue();
                });
            });
            $(this).closest(body).find(nav).delay(sec).queue(function () {
                nav.toggleClass('light dark').dequeue();
            });
        });

        $('.btn-signup').click(function (e) {
            e.preventDefault();
            container.each(function () {
                $(this).closest(container).toggleClass('show hide').delay(sec).queue(function () {
                    $(this).toggleClass('above').dequeue();
                });
            });
            $(this).closest(body).find(nav).delay(sec).queue(function () {
                nav.toggleClass('light dark').dequeue();
            });
        });
    },
    placeholderDropdown: function () {
        $('.dropdown, .lang').on('click', '.dropdown-item', function (e) {
            if ($(this).children().hasClass('row')) {
                $(this).parent().parent().find('.dropdown-toggle').html('<img src="' + $(this).find('img').attr("src") + '" class="icon-flags" alt="" />');
            } else if ($(this).children().hasClass('dropdown-inline-icon') && !$(this).parent().parent().hasClass("dropdown-tag")) {
                $(this).parent().parent().find('.dropdown-toggle, .dropdown-text').html($(this).html());
                $(this).parent().parent().find('.dropdown-text').removeClass('filtered');
                $(this).closest('.dropdown').find('input[type="text"]').val('');
            } else if ($(this).data("title")) {
                $(this).parent().parent().find('.dropdown-toggle').html('<span>' + $(this).data("title") + '</span>');
                $(this).closest('.dropdown').find('input[type="text"]').val('');
            } else if ($(this).parent().parent().hasClass("dropdown-tag")) {
                if($(this).find('img').length > 0) {
                    $(this).parent().parent().find('.dropdown-toggle').prepend('<span class="btn-tag tag-primary"><img src="../../assets/images/flags/flag-th.svg" class="icon-first">' + $(this).children().text() +'<i class="icon-cancel-circle close"><span class="path1"></span><span class="path2"></span></i></span>');
                }

                var textSelect = $(this).children().text();
                var htmlCurrent = $(this).parent().parent().find('.dropdown-toggle > span');

                /*if($(this).hasClass('showall')) {
                    htmlCurrent.each(function(){
                        $(this).children().children().prop("checked", true);
                        for ( var i = 0; i < $(this).length; i++ ) {
                            $(this).parent().parent().find('.dropdown-toggle').prepend('<span class="btn-tag tag-primary">' + textSelect[i] +'<i class="icon-cancel-circle close"><span class="path1"></span><span class="path2"></span></i></span>');
                        }
                    });
                } else*/
                if($(this).children().children().is(':checked')) {
                    e.stopPropagation();
                    $(this).parent().parent().find('.dropdown-toggle').prepend('<span class="btn-tag tag-primary">' + textSelect +'<i class="icon-cancel-circle close"><span class="path1"></span><span class="path2"></span></i></span>');
                } else if($(this).find('img').length == 0) {
                    e.stopPropagation();
                    htmlCurrent.each(function(){
                        $(this).parent().dropdown('update');
                        if(textSelect.indexOf($(this).text()) != -1) {
                            $(this).remove();
                            console.log('aaa');
                        }
                    });
                }

                $(this).closest('.dropdown').find('input[type="text"]').val('');
            } else {
                $(this).parent().parent().find('.dropdown-toggle').html('<span>' + $(this).html() + '</span>');
                $(this).parent().parent().find('.dropdown-text').removeClass('filtered').html('<span>' + $(this).html() + '</span>');
                $(this).closest('.dropdown').find('input[type="text"]').val('');
            }
        });

        /*$('.dropdown').on('click', '.dropdown-item .form-check input[type="checkbox"]:checked', function() {
            $(this).closest('.dropdown-menu').addClass("show");
        });*/
    },
    dropdownCheckList: function () {
        $('.table-col-scroll .dropdown-menu').click(function (e) {
            e.stopPropagation();
        });
    },
    modal: function () {
        $(".modal").modal();
        /* check height modal */
        if($('.modal-body').height() >= 420) {
            $('.modal-body').css('overflowY', 'auto');
        }
    },
    tooltip: function () {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip({});
        })
    },
    checkField() {
        if (document.forms['frm'].question.value === "") {
            alert("empty");
            return false;
        }
    },
    dropdownPlaceholder() {
        var dropdownInput = $(".dropdown input");

        dropdownInput.keyup(function (e) {
            $(this).parent().find('.dropdown-text .placeholder').removeClass('hide')
            $(this).parent().find('.dropdown-text').removeClass('filtered')
            if ($(this).val() != '') {
                $(this).parent().find('.dropdown-text .placeholder').addClass('hide')
                $(this).parent().find('.dropdown-text').addClass('filtered')
            }

            $(this).dropdown('update');

            matchesFound = false;
            filter = this.value.toLowerCase().trim();
            listWrapper = $(this).next();
            noResults = listWrapper.find(".no-results");
            listItem = listWrapper.find("a");
            for (i = 0; i < listItem.length; i++) {
                if (listItem[i].text.toLowerCase().trim().indexOf(filter) > -1) {
                    listItem[i].style.display = "";
                    matchesFound = true;
                } else {
                    listItem[i].style.display = "none";
                }
            }

            if (matchesFound == false) {
                noResults.show();
            } else {
                noResults.hide();
            }
        });
    },
    
    dropdownTag() {
        var dropdownInputTag = $('.dropdown-tag input[type="text"], .form-tag input[type="text"]');

        dropdownInputTag.keyup(function () {
            $(this).next('.placeholder').removeClass('hide')
            if ($(this).val() != '') {
                $(this).next('.placeholder').addClass('hide')
            }
            $(this).parent().dropdown('update');

            var value = this.value.toLowerCase().trim();
            $(this).parent().next().children().show().filter(function () {
                return $(this).text().toLowerCase().trim().indexOf(value) == -1;
            }).hide();
        });

        dropdownInputTag.on('input', function () {
            var lng = $(this).val().length;
            $(this).width(lng * 10);
        });

        $('.dropdown-tag .dropdown-toggle, .form-tag').click(function (e) {
            if ((e.target == $(this)) || ($(this).children('.placeholder'))) {
                $.fn.setCursorPosition = function (pos) {
                    $(this).each(function (index, elem) {
                        if (elem.setSelectionRange) {
                            elem.setSelectionRange(pos, pos);
                        } else if (elem.createTextRange) {
                            var range = elem.createTextRange();
                            range.collapse(true);
                            range.moveEnd('character', pos);
                            range.moveStart('character', pos);
                            range.select();
                        }
                    });
                    return $(this);
                };
                $(this).find('input[type="text"]').focus().setCursorPosition(1000);
            }
        });

        $('.dropdown .btn-tag, .btn-toggle-tag+.dropdown-menu, .btn-toggle-tag>.close, th .dropdown-menu').click(function (e) {
            e.stopPropagation();
        });
        /*$('table [data-toggle="dropdown"]').click(function (e) {
            $(this).closest(".table-responsive").toggleClass('open-dropdown');
        });*/
        //file:///Users/sittipat.won/Documents/ptvn-design/src/sww/jadehtml/add_product/05_products_services_list.html

        /* for tag */
        $('.form-tag input[type="text"]').on("keydown",function(e) {
            if(e.keyCode == 13) {
                $(this).parent().prepend('<span class="btn-tag tag-primary">' + $(this).val() + '<i class="icon-cancel-circle close"><span class="path1"></span><span class="path2"></span></i></span>');
                $(this).removeAttr('style').removeAttr('placeholder').val('');
            }
        });

        if($(".form-tag").hasClass(".btn-tag")) {
            $(".form-tag").find('input[type="text" placeholder="Value"]').removeAttr('style').removeAttr('placeholder');
        }
    },

    checkActiveWizard() {
        $('.wizard-steps li.active').last().addClass('last');
    }
};
$(document).ready(init.initFunctionReady);
$(window).resize(init.initFunctionResize);