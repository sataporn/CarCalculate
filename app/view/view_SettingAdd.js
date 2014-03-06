/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 26/2/2557
 * Time: 13:49 น.
 * To change this template use File | Settings | File Templates.
 */
// d e a c
Ext.define('CarCalculate.view.view_SettingAdd',{
//Form Must be class Ext.form.panel.
    extend:'Ext.form.Panel',
    alias:'widget.wg_view_SettingAdd',
    requires:['Ext.TitleBar','Ext.form.FieldSet','Ext.field.Text','Ext.field.Email','Ext.field.Number'],
    config:{
//        html:'Form Add'
        items:[//items tag#1
            //Object1
            {
                xtype:'titlebar',
                title:'Welcome to CarCalculate App',
                //กำหนดแนวตั้งให้กับ object.
                docked:'top'
            },{
                //Object2
                xtype:'fieldset',
                title:'<b>Please config your information:</b>',
                instructions:'<h2>instructions</h2><hr>',
                items:[//items tag#2
                    {//Sub Object 2.1
                        xtype:'textfield',
                        //Element name.
                        name:'txt_name',
                        //Element Label.
                        label:'<div style="text-align:left;">Name</div>',
                        placeHolder:'your name'
                    },{//Sub Object 2.2
                        xtype:'textfield',
                        //Element name.
                        name:'txt_surname',
                        //Element Label.
                        label:'Surname',
                        placeHolder:'your surname'
                    },{//Sub Object 2.3
                        xtype:'emailfield',
                        //Element name.
                        name:'txt_email',
                        //Element Label.
                        label:'Email',
                        placeHolder:'you@email.com'
                    },{//Sub Object 2.4
                        xtype:'numberfield',
                        //Element name.
                        name:'txt_mobileno',
                        //Element Label.
                        label:'Mobile No.',
                        placeHolder:'your mobile number'
                    },{//Sub Object 2.5
                        xtype:'textfield',
                        //Element name.
                        name:'txt_lineid',
                        //Element Label.
                        label:'Line ID.',
                        placeHolder:'your line ID'
                    },{
                        //Sub Object2.4
                        xtype:'button',
                        //Value of button input.
                        text:'Save',
                        itemId:'btn_Save'
                    }
                ]//Close items tag#2.
            }
        ]//Close items tag#1.
    },
    launch:function(){
        console.log('View: SettingAdd start...');
    }
});
