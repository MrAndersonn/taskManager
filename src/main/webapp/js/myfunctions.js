//WalkingBjorn was here
//gitignore test
function sendAjax() {

    // get inputs
    var article = new Object();


    article.title = $('#title').val();
    //article.url = $('#url').val();
    article.categories = $('#categories').val().split(";");

    //article.tags = $('#tags').val().split(";");

    $.ajax({
        url: "jsonservlet",
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(article),
        contentType: 'application/json',
        mimeType: 'application/json',

        success: function (data) {
            $("tr:has(td)").remove();

            $.each(data, function (index, article) {

                if (article.title != '') {
                    var td_categories = $("<td/>");
                    $.each(article.categories, function (i, tag) {
                        var span = $("<span class='label label-info' style='margin:4px;padding:4px' />");
                        span.text(tag);
                        td_categories.append(span);
                    });

                    var td_tags = $("<td/>");
                    /* $.each(article.tags, function (i, tag) {
                     var span = $("<span class='label' style='margin:4px;padding:4px' />");
                     span.text(tag);
                     td_tags.append(span);
                     });*/

                    $("#added-articles").append($('<tr/>')
                            .append($('<td/>').html(article.title))
                            .append(td_categories)
                            .append(article.tags)
                    );
                }
                $('#title').val('');
                //article.url = $('#url').val();
                $('#categories').val('');

            });
        },
        error: function (data, status, er) {
            alert("error: " + data + " status: " + status + " er:" + er);
        }
    });
}