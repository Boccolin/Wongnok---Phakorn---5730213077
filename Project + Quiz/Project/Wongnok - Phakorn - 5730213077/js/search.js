$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
            for(var i=0;i<data.length;i++){
                var row = '<div class = "col-12 col-8 col-md-4" style="padding-bottom: 25px;">' +
                
                '<a href="detail.html?placeid=' + data[i].id + '">' +
                '<p>' + data[i].name + '</p>' +
                '<img src=' + data[i].photo + ' class="thumbnail" height="300" width="300" />';
                if(data[i].rating != 0 || data[i].rating != "undefined"){
                    row += '<div>';
                    for(var j=0;j< data[i].rating;j++){
                        row += '<span class="fa fa-star-o" data-rating="'+j+'" style="color: yellow;" ></span>';
                    }
                    row += '</div>';
                }
                row += '</a>'+'</div>';
                
                $('#searchresult').append(row);
            }
        });
    });    
});