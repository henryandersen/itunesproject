$(document).ready(function () {
    $('#button').on('click',function () {
        var rows = $('#results').val();
        var artist = $('#artists').val();
        console.log(artist);
        $.ajax({
            url: "https://itunes.apple.com/search?term=" + artist,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                console.log(result);
                myfunction(result,rows);
            },
            error: function() { alert('Failed!'); }
        });

    });

});

//


function myfunction(json,row) {
    console.log(json.results[0].trackName);
    $("#table").empty();
    var html = "<table class='table table-bordered' cellpadding='15'>";
    for(var i = 0; i < row; i++){
        html += "<tr><td><img src=" + json.results[i].artworkUrl60 + "></td>";
        html += "<td>" + json.results[i].trackName +  "</td>";
        html += "<td>" + "<audio controls='true' src='" + json.results[i].previewUrl + "' id='audio' type='audio/m4a'></audio>" + "</td>";
        html += "</tr>"
    }
    html +="</table>";

    console.log(html);
    $("#table").append(html);


}