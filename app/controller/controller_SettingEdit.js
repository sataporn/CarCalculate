/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 26/2/2557
 * Time: 13:47 น.
 * To change this template use File | Settings | File Templates.
 */
// d e a c(r c)
Ext.define('CarCalculate.controller.controller_SettingEdit',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            ref_wg_view_MainApp:'wg_view_MainApp',
            ref_wg_view_SettingEdit:'wg_view_SettingEdit',
            ref_wg_view_SettingEdit_btn_Back:'wg_view_SettingEdit #btn_Back',
            ref_wg_view_SettingEdit_btn_Update:'wg_view_SettingEdit #btn_Update'
        },
        control:{
            ref_wg_view_SettingEdit_btn_Back:{ tap:'FNC_btn_Back' },
            ref_wg_view_SettingEdit_btn_Update:{ tap:'FNC_btn_Update' }
        }
    },
    FNC_btn_Back:function(){
        //Debug event.
        console.log('SettingEdit: back tap...');
        //Define MainApp page as variable.
        var _viewMainApp = this.getRef_wg_view_MainApp();
        //Debug view object.
        console.log(_viewMainApp);
        //Port to screen.
        Ext.Viewport.animateActiveItem(_viewMainApp, { type:'slide', direction:'right' });
    },
    FNC_btn_Update:function(){
        //Debug event.
        console.log('SettingEdit: back tap...');
        //Define SettingEdit page as variable.
        var _viewSettingEdit = this.getRef_wg_view_SettingEdit();
        //Debug view_SettingEdit object.
        console.log(_viewSettingEdit);
        //Define values of Setting view as variable.
        var _valuesSettingEdit = _viewSettingEdit.getValues();
        //Debug for value of view_FormAdd.
        console.log(_valuesSettingEdit);
        //Define error message.
        errorMsg = "";
        //Define variable.
        _fname = _valuesSettingEdit.txt_name;
        _lname = _valuesSettingEdit.txt_surname;
        _email = _valuesSettingEdit.txt_email;
        _mobileno = _valuesSettingEdit.txt_mobileno;
        _lineid = _valuesSettingEdit.txt_lineid;
        //Check error condition.
        if((_fname == null)||(_lname == null)||(_email == null)||(_mobileno == null)||(_lineid == null)){
            errorMsg = errorMsg+"กรุณาตรวจสอบข้อมูลให้ถูกต้องด้วยค่ะ<br>";
        }
        //Final check.
        if(errorMsg == ""){
            //New store object Class store_MainApp.
            var _storeSettingAdd = Ext.getStore('store_SettingAdd');
            _storeSettingAdd.getData().each(function(record) {
                record.set('f_name',_fname);
                record.set('f_surname',_lname);
                record.set('f_email',_email);
                record.set('f_mobileno',_mobileno);
                record.set('f_lineid',_lineid);
                _storeSettingAdd.sync();
            });
            //Define MainApp page as variable.
            var _viewMainApp = this.getRef_wg_view_MainApp();
            //Debug view object.
            console.log(_viewMainApp);
            //Port to screen.
            Ext.Viewport.animateActiveItem(_viewMainApp, { type:'slide', direction:'right' });
        }else{
            errorMsg = "<div style='text-align:left; color:red; padding-left:20px;'>"+errorMsg+"</div>";
            //Alert message.
            Ext.Msg.alert('Data Error!!', errorMsg);
        }
    },
    launch:function(){
        console.log('Controller --> FormEdit start...');
    }
});
