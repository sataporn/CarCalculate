/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 26/2/2557
 * Time: 15:40 น.
 * To change this template use File | Settings | File Templates.
 */
// d e a c(r c)
Ext.define('CarCalculate.controller.controller_Result',{
    extend:'Ext.app.Controller',
    requires:['Ext.MessageBox'],
    config:{
        refs:{
            ref_wg_view_MainApp:'wg_view_MainApp',
            ref_wg_view_Result:'wg_view_Result',
            ref_wg_view_Result_btn_Back:'wg_view_Result #btn_Back',
            ref_wg_view_Result_btn_Send:'wg_view_Result #btn_Send'
        },
        control:{
            ref_wg_view_Result_btn_Back:{ tap:'FNC_btn_Back' },
            ref_wg_view_Result_btn_Send:{ tap:'FNC_btn_Send' }
        }
    },
    launch:function(){
        console.log('Controller --> MainApp start...');
    },
    FNC_btn_Back:function(){
        console.log('SendEmail: back tap...');
        //define page as variable.
        var _viewMainApp = this.getRef_wg_view_MainApp();
        //Debug view_ShowData.
        console.log(_viewMainApp);
        //
        Ext.Viewport.animateActiveItem(_viewMainApp, { type:'slide', direction:'right' });

    },
    FNC_btn_Send:function(){
        console.log('SendEmail: send tap...');
        //define view as variable.
        var _viewMainApp = this.getRef_wg_view_MainApp();
        //Debug for ref of view_FormAdd.
        console.log(_viewMainApp);
        //define values store value of form.
        var _valuesMainApp = _viewMainApp.getValues();
        //Debug for value of view_FormAdd.
        console.log(_valuesMainApp);

        var _viewResult = this.getRef_wg_view_Result();
        //Debug for ref of view_FormAdd.
        console.log(_viewResult);
        //define values store value of form.
        var _valuesResult = _viewResult.getValues();
        //Debug for value of view_FormAdd.
        console.log(_valuesResult);

        var emailMsg = "Customer: "+_valuesResult.txt_name+"<br>";
        emailMsg = emailMsg+"To: "+_valuesResult.txt_email+"<br>";
        emailMsg = emailMsg+"<br>Payment: "+_valuesResult.txt_payment+"<br>";

        var _storeSettingAdd = Ext.getStore('store_SettingAdd');
        _storeSettingAdd.getData().each(function(record) {
            emailMsg = emailMsg+"<br>"+record.data.f_name+" "+record.data.f_surname+"<br>";
            emailMsg = emailMsg+"Email: "+record.data.f_email+"<br>";
            emailMsg = emailMsg+"Mobile No.: "+record.data.f_mobileno+"<br>";
            emailMsg = emailMsg+"Line ID.: "+record.data.f_lineid+"<br>";
        });

        if((_valuesResult.txt_name != null)&&(_valuesResult.txt_email != null)&&(_valuesResult.txt_name != '')&&(_valuesResult.txt_email != '')){
            emailMsg = "<div style='text-align:left; color:blue; padding-left:20px;'>"+emailMsg+"</div>";
            Ext.Msg.alert('Sending...',emailMsg);
            _viewMainApp.setValues({
                txt_price:'',
                txt_down:'',
                txt_tax:'',
                txt_year:0
            });
            _viewResult.setValues({
                txt_price:'',
                txt_down:'',
                txt_tax:'',
                txt_year:'',
                txt_payment:'',
                txt_name:'',
                txt_email:''
            });
            Ext.Viewport.animateActiveItem(_viewMainApp, { type:'slide', direction:'right' });
        }else{
            Ext.Msg.alert('Error!!',"<div style='text-align:left; color:red; padding-left:20px;'>Please enter your name and email.</div>");
        }
    }
});
