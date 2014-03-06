/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 26/2/2557
 * Time: 13:48 น.
 * To change this template use File | Settings | File Templates.
 */
// d e a c
Ext.define('CarCalculate.view.view_MainApp',{
//Form Must be class Ext.form.panel.
//    extend:'Ext.Container',
    extend:'Ext.form.Panel',
    alias:'widget.wg_view_MainApp',
    requires:['Ext.TitleBar','Ext.form.FieldSet','Ext.field.Text','Ext.field.Number','Ext.field.Spinner'],
//    requires:['Ext.TitleBar','Ext.dataview.List'],
    config:{
//        html:'Form Add'
        //Must have with table for show on page.
//        layout:'fit',
        items:[//items tag#1
            //Object1
            {
                xtype:'titlebar',
                title:'CarCalculate App',
                //กำหนดแนวตั้งให้กับ object.
                docked:'top',
                items:[
                    {
                        xtype:'button',
                        text:'Setting',
                        itemId:'btn_Setting',
                        //กำหนดแนวนอนให้กับ object.
                        align:'left'
                    },{
                        xtype:'button',
                        text:'About Us',
                        itemId:'btn_AboutUs',
                        //กำหนดแนวนอนให้กับ object.
                        align:'right'
                    }
                ]
            },{
                //Object2
                xtype:'fieldset',
                title:'<b>Payment Info:</b>',
                items:[//items tag#2
                    {//Sub Object 2.1
                        xtype:'numberfield',
                        //Element name.
                        name:'txt_price',
                        //Element Label.
                        label:'ราคา',
                        placeHolder:'กรุณากรอกราคารถยนต์'
                    },{//Sub Object 2.2
                        xtype:'numberfield',
                        //Element name.
                        name:'txt_down',
                        //Element Label.
                        label:'เงินดาวน์',
                        placeHolder:'กรุณากรอกจำนวนเงินดาวน์'
                    },{//Sub Object 2.3
                        xtype:'numberfield',
                        //Element name.
                        name:'txt_tax',
                        //Element Label.
                        label:'ดอกเบี้ย',
                        placeHolder:'กรุณากรอกจำนวนดอกเบี้ย'
                    },{//Sub Object 2.4
                        xtype:'spinnerfield',
                        //Element name.
                        name:'txt_year',
                        //Element Label.
                        label:'จำนวนปีที่ผ่อน',
                        minValue: 0,
                        maxValue: 10,
                        increment: 1,
                        cycle: false
//                        placeHolder:'กรุณากรอกจำนวนปีที่ผ่อน'
                    },{//Sub Object 2.5
                        xtype:'button',
                        //Value of button input.
                        text:'Payment Calculate',
                        itemId:'btn_PaymentCal'
                    }
                ]//Close items tag#2.
            }
        ]//Close items tag#1.
    },
    launch:function(){
        console.log('View: FormAdd start...');
    }
});
