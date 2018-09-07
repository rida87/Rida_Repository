$( "#go" ).click(function() {
    var user = $('#username').val();

    $.ajax
  ({
    type: "GET",
    url: "https://api.github.com/users/"+user,
    dataType: 'json',
    async: false,
    data: '{}',
    beforeSend: function (xhr){ 
        xhr.setRequestHeader ("Authorization", "Basic " + btoa("Yanisjs" + ":" + "Panda159753!"));
        xhr.setRequestHeader('Accept', "application/vnd.github.v3+json"); 
    },
    success: function (data){
        $('#pic').attr("src", data.avatar_url);
        $('#userid').text(data.id);
        $('#created').text(data.created_at);
        $('#type').text(data.type);
    },
    error:function (){
        $('#pic').attr("src", "https://ih1.redbubble.net/image.540019792.5734/ap,550x550,12x12,1,transparent,t.u1.png");
        $('#userid').text("No user selected...B-B-Bakka");
        $('#created').text("No user selected");
        $('#type').text("No user selected");      
        }
    });

});