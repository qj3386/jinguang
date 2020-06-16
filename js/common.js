layui.use(['layer', 'form', 'element'], function () {
    var $ = layui.jquery;
    var layer = layui.layer
        , form = layui.form
        , element = layui.element;
    form.on('submit(addformpage)', function (data) {
        var data = $('.ajaxform').serializeArray();
        var url = $('.ajaxform').attr('action');
        $.post(url, data, function (data) {
            if (data.status == 1) {
                $("input[type=text],textarea").val('');
                layer.msg(data.info, {icon: 1,time:2000},function () {
                    window.location.reload();
                });
            } else {
                layer.msg(data.info, {icon: 5});//失败的表情
                return false;
            }
        }, 'json');
        return false;//阻止表单提交
    });
});
//设为首页
function SetHome(obj,url){
    try{
        obj.style.behavior='url(#default#homepage)';
        obj.setHomePage(url);
    }catch(e){
        if(window.netscape){
            try{
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch(e){
                alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
            }
        }else{
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
        }
    }
}
//收藏本站
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
//保存到桌面
function toDesktop(sUrl,sName){
    try {
        var WshShell = new ActiveXObject("WScript.Shell");
        var oUrlLink =          WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop")     + "\\" + sName + ".url");
        oUrlLink.TargetPath = sUrl;
        oUrlLink.Save();
    }
    catch(e)  {
        alert("当前IE安全级别不允许操作！");
    }
}


//search checkLength
function SearchKey()
	{
		sc=document.KFO.Key.value;
		if(sc=="" || sc=="请输入您要了解的产品名称")
		{
			alert("请输入产品名称进行搜索");
			document.KFO.Key.focus();
			return false;
		}
		if(sc=="<" || sc==">" || sc=="%")
		{
			alert("请输入合法的搜索关键字!");
			document.KFO.Key.focus();
			return false;
		}
		else
		{
			return true;
		}
	}



function checkLength(){
    var name=document.getElementById('Key').value;
    if(name.length < 1){
        layer.msg('请输入您要了解的产品名称', {icon: 5});
        return false;
    }else{
        $("#tosearch").submit();
    }
}

//用户登录
function login_form() {
    var data = $('.ajaxformloggin').serializeArray();
    var url = $('.ajaxformloggin').attr('action');
    $.post(url, data, function (data) {
        if (data.status == 1) {
            layer.msg(data.info, {icon: 1,time:2000},function () {
                self.location='/user/index.html';
                //window.location.reload();
            });
        } else {
            layer.msg(data.info, {icon: 5});//失败的表情
            return false;
        }
    }, 'json');
}
//用户注册
function regest_form() {
    var data = $('.regest_form').serializeArray();
    var url = $('.regest_form').attr('action');
    $.post(url, data, function (data) {
        if (data.status == 1) {
            layer.msg(data.info, {icon: 1,time:2000},function () {
                self.location='/index/login.html';
                //window.location.reload();
            });
        } else {
            layer.msg(data.info, {icon: 5});//失败的表情
            return false;
        }
    }, 'json');
}