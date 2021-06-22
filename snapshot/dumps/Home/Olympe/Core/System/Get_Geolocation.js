
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Documentation_Function_Metadata_errors_0172c6ae82952a74193f = '0172c6ae82952a74193f';
const _Documentation_Function_Metadata_inputs_0172c6ae82952a74193d = '0172c6ae82952a74193d';
const _Documentation_Function_Metadata_outputs_0172c6ae82952a74193e = '0172c6ae82952a74193e';
const _Documentation_Metadata_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_Metadata_toolTip_01703376c4a81c0e9d91 = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69 = db.assignTag('0162d8ec885fdf7a6b69');
const _instance_of_Runnable_Output____Longitude_0162d8ec8b4c40c47989 = db.assignTag('0162d8ec8b4c40c47989');
const _instance_of_Runnable_Output____Latitude_0162d8ec8d7ecc432126 = db.assignTag('0162d8ec8d7ecc432126');
const _instance_of_Runnable_Output____Altitude_0162d8ec8f79ccbdc487 = db.assignTag('0162d8ec8f79ccbdc487');
const _instance_of_Documentation_Function_Metadata_d0c2d8ec885fdf7a6b69 = db.assignTag('d0c2d8ec885fdf7a6b69');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _System_0179b269b5c75228d70f             = '0179b269b5c75228d70f';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69
db.newModel(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69, 'Get Geolocation') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get Geolocation',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69);
// :_instance_of_Runnable_Output____Longitude_0162d8ec8b4c40c47989
db.newInstance(_instance_of_Runnable_Output____Longitude_0162d8ec8b4c40c47989)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Longitude',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Latitude_0162d8ec8d7ecc432126
db.newInstance(_instance_of_Runnable_Output____Latitude_0162d8ec8d7ecc432126)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Latitude',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Altitude_0162d8ec8f79ccbdc487
db.newInstance(_instance_of_Runnable_Output____Altitude_0162d8ec8f79ccbdc487)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Altitude',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c2d8ec885fdf7a6b69
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c2d8ec885fdf7a6b69)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| longitude | Number | The longitude. |\n| latitude | Number | The latitude. |\n| altitude | Number | The altitude. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nThis function creates 3 data-flows from the geo-location of the device.\nThis is updated in real time, but can require a permission check with the user.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Obtain the current geo-location.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Longitude_0162d8ec8b4c40c47989);
db.assign(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Latitude_0162d8ec8d7ecc432126);
db.assign(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Altitude_0162d8ec8f79ccbdc487);
db.assign(_instance_of_Runnable_Output____Longitude_0162d8ec8b4c40c47989, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____Latitude_0162d8ec8d7ecc432126, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____Altitude_0162d8ec8f79ccbdc487, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c2d8ec885fdf7a6b69);
db.assign(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Longitude_0162d8ec8b4c40c47989);
db.assign(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Latitude_0162d8ec8d7ecc432126);
db.assign(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Altitude_0162d8ec8f79ccbdc487);
db.assign(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c2d8ec885fdf7a6b69);
db.assignOptional(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69, _Object_gooRel_ff022000000000000003, _System_0179b269b5c75228d70f);
db.assignOptional(_instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69, _GOO_parentGooRel_ff02200000000000000u, _System_0179b269b5c75228d70f);
db.assignOptional(_System_0179b269b5c75228d70f, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69);
db.assignOptional(_System_0179b269b5c75228d70f, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Get_Geolocation_0162d8ec885fdf7a6b69);
