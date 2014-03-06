/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 26/2/2557
 * Time: 16:01 น.
 * To change this template use File | Settings | File Templates.
 */
// d e a c
Ext.define('CarCalculate.view.view_Result',{
//Form Must be class Ext.form.panel.
//    extend:'Ext.Container',
    extend:'Ext.form.Panel',
    alias:'widget.wg_view_Result',
    requires:['Ext.TitleBar','Ext.form.FieldSet','Ext.field.Text','Ext.field.Number'],
//    requires:['Ext.TitleBar','Ext.dataview.List'],
    config:{
//        html:'Form Add'
        //Must have with table for show on page.
//        layout:'fit',
        items:[//items tag#1
            //Object1
            {
                xtype:'titlebar',
                title:'Result',
                //กำหนดแนวตั้งให้กับ object.
                docked:'top',
                items:[
                    {
                        xtype:'button',
                        text:'Back',
                        ui:'back',
                        itemId:'btn_Back',
                        //กำหนดแนวนอนให้กับ object.
                        align:'left'
                    }
                ]
            },{
                //Object2
                xtype:'fieldset',
                title:'<b>Result</b>',
                items:[//items tag#2
                    {//Sub Object 2.1
                        xtype:'numberfield',
                        //Element name.
                        name:'txt_price',
                        //Element Label.
                        label:'ราคา',
                        disabled: true
                    },{//Sub Object 2.2
                        xtype:'numberfield',
                        //Element name.
                        name:'txt_down',
                        //Element Label.
                        label:'เงินดาวน์',
                        disabled: true
                    },{//Sub Object 2.3
                        xtype:'numberfield',
                        //Element name.
                        name:'txt_tax',
                        //Element Label.
                        label:'ดอกเบี้ย',
                        disabled: true
                    },{//Sub Object 2.4
                        xtype:'numberfield',
                        //Element name.
                        name:'txt_year',
                        //Element Label.
                        label:'จำนวนปีที่ผ่อน',
                        disabled: true
                    },{//Sub Object 2.5
                        xtype:'numberfield',
                        //Element name.
                        name:'txt_payment',
                        //Element Label.
                        label:'จำนวนเงินที่ต้องจ่ายรายเดือน',
                        disabled: true
                    }
                ]//Close items tag#2.
            },{
                //Object3
                xtype:'fieldset',
                title:'<b>Customer Info:</b>',
                items:[//items tag#3
                    {//Sub Object 3.1
                        xtype:'textfield',
                        //Element name.
                        name:'txt_name',
                        //Element Label.
                        label:'Name',
                        placeHolder:'your name'
                    },{//Sub Object 3.2
                        xtype:'textfield',
                        //Element name.
                        name:'txt_email',
                        //Element Label.
                        label:'Email',
                        placeHolder:'your email'
                    },{
                        //Sub Object2.4
                        xtype:'button',
                        //Value of button input.
                        text:'Send',
                        itemId:'btn_Send'
                    }
                ]//Close items tag#3.
            }
        ]//Close items tag#1.
    },
    launch:function(){
        console.log('View: FormAdd start...');
    }
});
