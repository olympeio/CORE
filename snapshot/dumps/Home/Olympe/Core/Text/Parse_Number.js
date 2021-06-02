
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


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
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c = db.assignTag('01626c12dfcb3580121c');
const _instance_of_Runnable_Input____s_01626c1369c329d7feb9 = db.assignTag('01626c1369c329d7feb9');
const _instance_of_Runnable_Output____number_01626c138ead94cfd335 = db.assignTag('01626c138ead94cfd335');
const _instance_of_Documentation_Function_Metadata_d0c26c12dfcb3580121c = db.assignTag('d0c26c12dfcb3580121c');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c
db.newModel(_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c, 'Parse Number') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Parse Number',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c);
// :_instance_of_Runnable_Input____s_01626c1369c329d7feb9
db.newInstance(_instance_of_Runnable_Input____s_01626c1369c329d7feb9)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____number_01626c138ead94cfd335
db.newInstance(_instance_of_Runnable_Output____number_01626c138ead94cfd335)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'number',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c26c12dfcb3580121c
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c26c12dfcb3580121c)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01626c1369c329d7feb9-s | String | The string to convert. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01626c138ead94cfd335-number | Number | The result of the conversion. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nAttempts to parse the provided string to convert it into a number value.\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Converts a String into a Number.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s_01626c1369c329d7feb9);
db.assign(_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____number_01626c138ead94cfd335);
db.assign(_instance_of_Runnable_Input____s_01626c1369c329d7feb9, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____number_01626c138ead94cfd335, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c26c12dfcb3580121c);
db.assign(_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s_01626c1369c329d7feb9);
db.assign(_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____number_01626c138ead94cfd335);
db.assign(_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c26c12dfcb3580121c);
db.assignOptional(_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c, _Object_gooRel_ff022000000000000003, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c, _GOO_parentGooRel_ff02200000000000000u, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Parse_Number_01626c12dfcb3580121c);
