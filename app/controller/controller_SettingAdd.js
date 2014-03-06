/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 26/2/2557
 * Time: 13:46 น.
 * To change this template use File | Settings | File Templates.
 */
// d e a c(r c)
Ext.define('CarCalculate.controller.controller_SettingAdd',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            ref_wg_view_MainApp:'wg_view_MainApp',
            ref_wg_view_SettingAdd:'wg_view_SettingAdd',
            ref_wg_view_SettingAdd_btn_Save:'wg_view_SettingAdd #btn_Save'
        },
        control:{
            ref_wg_view_SettingAdd_btn_Save:{ tap:'FNC_btn_Save' }
        }
    },
    launch:function(){
        console.log('Controller --> SettingAdd start...');
    },
    FNC_btn_Save:function(){
        //Debug save event.
        console.log('SettingAdd: save tap...');
        //define SettingAdd view as variable.
        var _viewSettingAdd = this.getRef_wg_view_SettingAdd();
        //Debug view_SettingAdd object.
        console.log(_viewSettingAdd);
        //define values of form as variable.
        var _valuesSettingAdd = _viewSettingAdd.getValues();
        //Debug for values of view_SettingAdd.
        console.log(_valuesSettingAdd);
        //Define error message.
        errorMsg = "";
        //Define variable.
        _fname = _valuesSettingAdd.txt_name;
        _lname = _valuesSettingAdd.txt_surname;
        _email = _valuesSettingAdd.txt_email;
        _mobileno = _valuesSettingAdd.txt_mobileno;
        _lineid = _valuesSettingAdd.txt_lineid;
        //Check error condition.
        if((_fname == null)||(_lname == null)||(_email == null)||(_mobileno == null)||(_lineid == null)){
            errorMsg = errorMsg+"กรุณาตรวจสอบข้อมูลให้ถูกต้องด้วยค่ะ<br>";
        }
        //Final check.
        if(errorMsg == ""){
            //New record object Class model_SettingAdd.
            var _recordSettingAdd = Ext.create('CarCalculate.model.model_SettingAdd');
            //Set value in record object.
            _recordSettingAdd.set('f_name',_valuesSettingAdd.txt_name);
            _recordSettingAdd.set('f_surname',_valuesSettingAdd.txt_surname);
            _recordSettingAdd.set('f_email',_valuesSettingAdd.txt_email);
            _recordSettingAdd.set('f_mobileno',_valuesSettingAdd.txt_mobileno);
            _recordSettingAdd.set('f_lineid',_valuesSettingAdd.txt_lineid);
            //Debug record object.
            console.log(_recordSettingAdd);
            //New store object Class store_MainApp.
            var _storeMainApp = Ext.getStore('store_SettingAdd');
            _storeMainApp.add(_recordSettingAdd);
            _storeMainApp.sync();
            //define MainApp view as variable.
            var _viewMainApp = this.getRef_wg_view_MainApp();
            //Debug view_MainApp object.
            console.log(_viewMainApp);
            //Switch screen to Result page.
            Ext.Viewport.animateActiveItem(_viewMainApp, { type:'slide', direction:'left' });
        }else{
            errorMsg = "<div style='text-align:left; color:red; padding-left:20px;'>"+errorMsg+"</div>";
            //Alert message.
            Ext.Msg.alert('Data Error!!', errorMsg);
        }
    }
});

