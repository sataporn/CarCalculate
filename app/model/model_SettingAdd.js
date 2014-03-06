/**
 * Created with JetBrains WebStorm.
 * User: Sataporn
 * Date: 26/2/2557
 * Time: 13:50 น.
 * To change this template use File | Settings | File Templates.
 */
// d e a c
Ext.define('CarCalculate.model.model_SettingAdd', {
    extend:'Ext.data.Model',
    config:{
        identifier:'uuid',
        fields:[
            { name:'id', type:'string' },
            { name:'f_name', type:'string' },
            { name:'f_surname', type:'string' },
            { name:'f_email', type:'string' },
            { name:'f_mobileno', type:'string' },
            { name:'f_lineid', type:'string' }
        ]
    }
});
