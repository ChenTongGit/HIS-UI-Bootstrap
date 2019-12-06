
/**
 * 将token存入cookie中，时间三十天
 * **/
function setTokenToCookie(mytoken) {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime()+ 20*60*1000)//保存十分钟
    document.cookie = "my_token =" + escape(mytoken) + ";expires =" +exp.toGMTString();

}

// 获取cookie中的某个值，此处获取my_token
function getCookie(name) {
    var cookieValue = " ";
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = $.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function checkToken(portnum){
    var json;
    $.ajax({
        type:'post',
        async:false,
        url:portnum+'/api/user/tokentest',
        beforeSend:function (xhr) {
            var token = getCookie("my_token");
            alert(token);
            xhr.setRequestHeader("Authorization",token);
        },
        contentType:'application/json;charset=utf-8',
        success:function(data){
            console.log(data);
            if (data.code===0){
                alert(JSON.stringify(data.data));
                json = data.data["id"];
            }else {
                alert(data.msg);
            }


        }
    });

    return json;
}
