// Varuns baby plugin. DOnt mess with it!

$(document).ready(function(){

            $.jribbble.setToken('171c0913c95d4abe56291ede214788b2be28cf801e6f22de7ef8f876cda11a85');
            $.jribbble.users('vamoha').shots({per_page: 9}).then(function(shots) {
                var html = [];

                shots.forEach(function(shot) {
                    html.push('<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4"> <div class="grid-list" id="khana">');
                    html.push('<a href="' + shot.html_url + '" target="_blank">');
                    html.push('<img class="img-responsive" src="' + shot.images.hidpi + '" alt="' + shot.title + '"><\/a>');
                    html.push('<div class="overlay"><a target="_blank"  href="' + shot.html_url + '">');
                    html.push('<h2 class="shot-title">' + shot.title + '<\/h2>');
                    html.push('<\/a> <\/div><\/div><\/div>');
                });

                $('#shots').html(html.join(''));
                setTimeout(function() {$(window).trigger('resize');}, 1000);

                $.fn.fullpage.reBuild();
                
            });

        });