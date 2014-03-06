/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 26/2/2557
 * Time: 13:47 น.
 * To change this template use File | Settings | File Templates.
 */
// d e a c(r c)
Ext.define('CarCalculate.controller.controller_MainApp',{
    extend:'Ext.app.Controller',
    requires:['Ext.MessageBox'],
    config:{
        refs:{
            //All view ref.
            ref_wg_view_Result:'wg_view_Result',
            ref_wg_view_SettingEdit:'wg_view_SettingEdit',
            ref_wg_view_MainApp:'wg_view_MainApp',
            //All button ref.
            ref_wg_view_MainApp_btn_Setting:'wg_view_MainApp #btn_Setting',
            ref_wg_view_MainApp_btn_AboutUs:'wg_view_MainApp #btn_AboutUs',
            ref_wg_view_MainApp_btn_PaymentCal:'wg_view_MainApp #btn_PaymentCal'
        },
        control:{
            ref_wg_view_MainApp_btn_Setting:{ tap:'FNC_btn_Setting' },
            ref_wg_view_MainApp_btn_AboutUs:{ tap:'FNC_btn_AboutUs' },
            ref_wg_view_MainApp_btn_PaymentCal:{ tap:'FNC_btn_PaymentCal' }
        }
    },
    launch:function(){
        //Debug this object.
        console.log('Controller --> MainApp start...');
    },
    FNC_btn_Setting:function(){
        //Debug setting event.
        console.log('MainApp: setting tap...');
        //define settingEdit page as variable.
        var _viewSettingEdit = this.getRef_wg_view_SettingEdit();
        //Debug view_SettingEdit.
        console.log(_viewSettingEdit);
        //Define store object to set data in fieldset.
        var _storeSettingAdd = Ext.getStore('store_SettingAdd');
        //Debug record_SettingAdd.
        console.log(_storeSettingAdd.getData());
//        //Fill data in text field.
        _storeSettingAdd.getData().each(function(record) {
            _viewSettingEdit.setValues({
                txt_name:record.data.f_name,
                txt_surname:record.data.f_surname,
                txt_email:record.data.f_email,
                txt_mobileno:record.data.f_mobileno,
                txt_lineid:record.data.f_lineid
            });
        });
        //Switch screen to SettingEdit page.
        Ext.Viewport.animateActiveItem(_viewSettingEdit, { type:'slide', direction:'left' });
    },
    FNC_btn_AboutUs:function(){
        //Debug AboutUs event.
        console.log('MainApp: aboutUs tap...');
        //Set AboutUs Message.
        aboutMsg = "<div style='text-align:center;'>Team: Exista</div><br />";
        aboutMsg = aboutMsg + "<div style='text-align:left; padding-left:20px;'>Member 1: Pimpaka<br />";
        aboutMsg = aboutMsg + "Member 2: Santi<br />Member 3: Sataporn</div>";
        //Alert aboutUs message.
        Ext.Msg.alert('AboutUs',aboutMsg);
    },
    FNC_btn_PaymentCal:function(){
        //Debug PaymentCal event.
        console.log('MainApp: PaymentCalculate tap...');
        //define Result view as variable.
        var _viewResult = this.getRef_wg_view_Result();
        //Debug view_Result object.
        console.log(_viewResult);
        //define MainApp view as variable.
        var _viewMainApp = this.getRef_wg_view_MainApp();
        //Debug view_MainApp object.
        console.log(_viewMainApp);
        //define values of form as variable.
        var _valuesMainApp = _viewMainApp.getValues();
        //Debug for value of view_FormAdd.
        console.log(_valuesMainApp);
        //Define error message.
        errorMsg = "";
        //Define variable.
        _price = _valuesMainApp.txt_price;
        _down = _valuesMainApp.txt_down;
        _tax = _valuesMainApp.txt_tax;
        _year = _valuesMainApp.txt_year;
        //Check error condition.
        if((_price == null)||(_down == null)||(_tax == null)){
            errorMsg = errorMsg+"กรุณาตรวจสอบข้อมูลให้ถูกต้องด้วยค่ะ<br>";
        }
        if((_price < 0)||(_price < _down)){
            errorMsg = errorMsg+"กรุณาตรวจสอบราคารถยนต์ด้วยค่ะ<br>";
        }
        if(_down < 0){
            errorMsg = errorMsg+"กรุณาตรวจสอบจำนวนเงินดาวน์ด้วยค่ะ<br>";
        }
        if(_tax < 0){
            errorMsg = errorMsg+"กรุณาตรวจสอบจำนวนดอกเบี้ยด้วยค่ะ<br>";
        }
        if(_year < 0){
            errorMsg = errorMsg+"กรุณาตรวจสอบจำนวนปีที่ผ่อนด้วยค่ะ<br>";
        }
        //Final check.
        if(errorMsg == ""){
            total_interest = (_valuesMainApp.txt_price - _valuesMainApp.txt_down)*(_valuesMainApp.txt_tax/100)*_valuesMainApp.txt_year;
            total_payment = ((_valuesMainApp.txt_price - _valuesMainApp.txt_down)+total_interest)/(_valuesMainApp.txt_year*12);
            _viewResult.setValues({
                txt_price:_price,
                txt_down:_down,
                txt_tax:_tax,
                txt_year:_year,
                txt_payment:total_payment
            });
        //Switch screen to Result page.
            Ext.Viewport.animateActiveItem(_viewResult, { type:'slide', direction:'left' });
        }else{
            errorMsg = "<div style='text-align:left; color:red; padding-left:20px;'>"+errorMsg+"</div>";
            //Alert message.
            Ext.Msg.alert('Data Error!!', errorMsg);
        }
    }
});
