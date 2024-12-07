function template1(){
    
    $('.template-bg,.template-preview').attr('src','/template/1.webp')
    $('.template-song-box,.template-artist-box,.template-footer,.template-minute-box,.template-genre-box').css('background-color','#111111')
    $('.ft-color,.ft1-color').css('color','#f3ff48')
    $('.template-img-wrapper img').css({'height':'142px', 'width': '152px'})
    $('.template-img-wrapper').css('padding', '5rem 4rem 4rem 4rem')
}
function template2(){
    $('.template-bg,.template-preview').attr('src','/template/2.webp')
    $('.template-song-box,.template-artist-box,.template-footer,.template-minute-box,.template-genre-box').css('background-color','#410075')
    $('.ft-color,.ft1-color').css('color','#F1E8FA')
    $('.template-img-wrapper img').css({'height':'170px', 'width': '164px'})
    $('.template-img-wrapper').css('padding', '1.2rem 4rem 4rem 4rem')
}
function template3(){
    $('.template-bg,.template-preview').attr('src','/template/3.jpg')
    $('.template-song-box,.template-artist-box,.template-footer,.template-minute-box,.template-genre-box').css('background-color','#503658')
    $('.ft1-color').css('color','#BFF849')
    $('.ft-color').css('color','#EFA983')
      $('.template-img-wrapper img').css({'height':'157px', 'width': '163px'})
    $('.template-img-wrapper').css('padding', '4.9rem 4.1rem 4rem 4rem')
}
function template4(){
    $('.template-bg,.template-preview').attr('src','/template/4.jpeg')
    $('.template-song-box,.template-artist-box,.template-footer,.template-minute-box,.template-genre-box').css('background-color','#f3ff48')
    $('.ft-color,.ft1-color').css('color','#121212')
      $('.template-img-wrapper img').css({'height':'150px', 'width': '162px'})
    $('.template-img-wrapper').css('padding', '5rem 4rem 4rem 4rem')
}
function template5(){
    $('.template-bg,.template-preview').attr('src','/template/5.webp')
    $('.template-song-box,.template-artist-box,.template-footer,.template-minute-box,.template-genre-box').css('background-color','#96EFB8')
    $('.ft1-color').css('color','#090500')
    $('.ft-color').css('color','#223074')
      $('.template-img-wrapper img').css({'height':'152px', 'width': '164px'})
    $('.template-img-wrapper').css('padding', '4.4rem 4rem 4rem 4rem')
}
function template6(){
    $('.template-bg,.template-preview').attr('src','/template/6.jpg')
    $('.template-song-box,.template-artist-box,.template-footer,.template-minute-box,.template-genre-box').css('background-color','#3B00E4')
    $('.ft1-color').css('color','#9BEDC4')
    $('.ft-color').css('color','#C5B3CC')
      $('.template-img-wrapper img').css({'height':'154px', 'width': '164px'})
    $('.template-img-wrapper').css('padding', '4.48rem 4rem 4rem 4rem')
}
function template7(){
    $('.template-bg,.template-preview').attr('src','/template/7.webp')
    $('.template-song-box,.template-artist-box,.template-footer,.template-minute-box,.template-genre-box').css('background-color','#DBB505')
    $('.ft-color,.ft1-color').css('color','#121212')
      $('.template-img-wrapper img').css({'height':'154px', 'width': '164px'})
    $('.template-img-wrapper').css('padding', '4.8rem 4rem 4rem 4rem')
}
function template8(){
    $('.template-bg,.template-preview').attr('src','/template/8.jpg')
    $('.template-song-box,.template-artist-box,.template-footer,.template-minute-box,.template-genre-box').css('background-color','#6800BB')
    $('.ft-color,.ft1-color').css('color','#E1F95A')
      $('.template-img-wrapper img').css({'height':'142px', 'width': '152px'})
    $('.template-img-wrapper').css('padding', '5.2rem 4rem 4rem 4rem')
}
function template9(){
    $('.template-bg,.template-preview').attr('src','/template/9.jpg')
    $('.template-song-box,.template-artist-box,.template-footer,.template-minute-box,.template-genre-box').css('background-color','#F774C4')
    $('.ft-color,.ft1-color').css('color','#121212')
      $('.template-img-wrapper img').css({'height':'142px', 'width': '152px'})
    $('.template-img-wrapper').css('padding', '5.2rem 4rem 4rem 4rem')
}
function template10(){
    $('.template-bg,.template-preview').attr('src','/template/10.webp')
    $('.template-song-box,.template-artist-box,.template-footer,.template-minute-box,.template-genre-box').css('background-color','#FE5B47')
    $('.ft-color,.ft1-color').css('color','#121212')
      $('.template-img-wrapper img').css({'height':'154px', 'width': '164px'})
    $('.template-img-wrapper').css('padding', '4.8rem 4rem 4rem 4rem')
}

function downloadTemplate(){
    html2canvas($('.template-box')[0]).then(function(canvas) { 
        var link = $('<a></a>') .attr('href', canvas.toDataURL('image/png')) .attr('download', 'spotify-wrapped-by-rle.png') .appendTo('body'); link[0].click(); link.remove(); 
    });
}
$(document).ready(function() {
    $('#welcome-modal').modal('show')
    $('.template-selection-items').on('click',function(){
        $('.template-selection-items').removeClass('template-selected')
        $(this).addClass('template-selected')
    })

    $('.change-cover').on('change', function(event) { 
        var file = event.target.files[0]; if (file && file.type.match('image.*')) { 
            var reader = new FileReader(); reader.onload = function(e) { 
                $('.cover-img').attr('src', e.target.result).show();
             } 
             reader.readAsDataURL(file); 
            } else { 
                alert('Please select a valid image file.'); 
                $(this).val('')
             } });

    $('.input-artist').on('keyup',function(){
        var artistInput = $(this).val()
        var artistNum = $(this).data('num')
        $('.artist'+artistNum).text(artistInput)
    })

    $('.input-song').on('keyup',function(){
        var songInput = $(this).val()
        var songNum = $(this).data('num')
        $('.song'+songNum).text(songInput)
    })
    
    $('.input-minutelist').on('keyup',function(){
        $('.minuteslist').text($(this).val())
    })

    $('.input-topgenre').on('keyup',function(){
        $('.topgenre').text($(this).val())
    })
    
    
});
