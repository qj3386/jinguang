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
                layer.msg(data.info, {icon: 5});//ʧ�ܵı���
                return false;
            }
        }, 'json');
        return false;//��ֹ���ύ
    });
});
//��Ϊ��ҳ
function SetHome(obj,url){
    try{
        obj.style.behavior='url(#default#homepage)';
        obj.setHomePage(url);
    }catch(e){
        if(window.netscape){
            try{
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            }catch(e){
                alert("��Ǹ���˲�����������ܾ���\n\n�����������ַ�����롰about:config�����س�Ȼ��[signed.applets.codebase_principal_support]����Ϊ'true'");
            }
        }else{
            alert("��Ǹ������ʹ�õ�������޷���ɴ˲�����\n\n����Ҫ�ֶ�����"+url+"������Ϊ��ҳ��");
        }
    }
}
//�ղر�վ
function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("��Ǹ������ʹ�õ�������޷���ɴ˲�����\n\n�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
        }
    }
}
//���浽����
function toDesktop(sUrl,sName){
    try {
        var WshShell = new ActiveXObject("WScript.Shell");
        var oUrlLink =          WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop")     + "\\" + sName + ".url");
        oUrlLink.TargetPath = sUrl;
        oUrlLink.Save();
    }
    catch(e)  {
        alert("��ǰIE��ȫ�������������");
    }
}


//search checkLength
function SearchKey()
	{
		sc=document.KFO.Key.value;
		if(sc=="" || sc=="��������Ҫ�˽�Ĳ�Ʒ����")
		{
			alert("�������Ʒ���ƽ�������");
			document.KFO.Key.focus();
			return false;
		}
		if(sc=="<" || sc==">" || sc=="%")
		{
			alert("������Ϸ��������ؼ���!");
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
        layer.msg('��������Ҫ�˽�Ĳ�Ʒ����', {icon: 5});
        return false;
    }else{
        $("#tosearch").submit();
    }
}

//�û���¼
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
            layer.msg(data.info, {icon: 5});//ʧ�ܵı���
            return false;
        }
    }, 'json');
}
//�û�ע��
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
            layer.msg(data.info, {icon: 5});//ʧ�ܵı���
            return false;
        }
    }, 'json');
}