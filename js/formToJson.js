<!--	  封装以对象形式输出json-->
$.fn.serializeObject = function () {
    //当前数据
    var ct = this.serializeArray();
    var obj = {};
    $.each(ct,function () {
        if(obj[this.name]!== undefined){
            if(!obj[this.name].push){
                obj[this.name] = [obj[this.name]];
            }
            obj[this.name].push(this.value || "");
        }else {
            obj[this.name] = this.value || "";
        }
    });
    return obj;
}
