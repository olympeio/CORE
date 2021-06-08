
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Date$_47_$Time_ff021000000000000014     = 'ff021000000000000014';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
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
const _instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9 = db.assignTag('01717d4924328261f7f9');
const _instance_of_Runnable_Input____dateTimeString_01717d4926137d5baef8 = db.assignTag('01717d4926137d5baef8');
const _instance_of_Runnable_Output____date_01717d4927b3e7661061 = db.assignTag('01717d4927b3e7661061');
const _instance_of_Runnable_Input____format_01717d9e11426b3b70f8 = db.assignTag('01717d9e11426b3b70f8');
const _instance_of_Documentation_Function_Metadata_d0c17d4924328261f7f9 = db.assignTag('d0c17d4924328261f7f9');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Datetime_0179b2690f49a1f52652           = '0179b2690f49a1f52652';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9
db.newModel(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9, 'Parse DateTime') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Parse DateTime',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9);
// :_instance_of_Runnable_Input____dateTimeString_01717d4926137d5baef8
db.newInstance(_instance_of_Runnable_Input____dateTimeString_01717d4926137d5baef8)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'dateTimeString',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____date_01717d4927b3e7661061
db.newInstance(_instance_of_Runnable_Output____date_01717d4927b3e7661061)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'date',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____format_01717d9e11426b3b70f8
db.newInstance(_instance_of_Runnable_Input____format_01717d9e11426b3b70f8)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'format',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c17d4924328261f7f9
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c17d4924328261f7f9)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01717d4926137d5baef8-dateTimeString | String | dateTime as a String |\n| 01717d9e11426b3b70f8-format | String | format |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01717d4927b3e7661061-date | DateTime | The result of the conversion. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nConverts a string to a datetime using provided format\nhttps://momentjs.com/docs/#/parsing/string-format/\n\n**Examples:**\n\n  - "2010-10-20 4:30",       "YYYY-MM-DD HH:mm"\n  - "2010-10-20 4:30 +0000", "YYYY-MM-DD HH:mm Z"\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Converts a string to a datetime using provided format',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____dateTimeString_01717d4926137d5baef8);
db.assign(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____format_01717d9e11426b3b70f8);
db.assign(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____date_01717d4927b3e7661061);
db.assign(_instance_of_Runnable_Input____dateTimeString_01717d4926137d5baef8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____date_01717d4927b3e7661061, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Input____format_01717d9e11426b3b70f8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c17d4924328261f7f9);
db.assign(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____dateTimeString_01717d4926137d5baef8);
db.assign(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____date_01717d4927b3e7661061);
db.assign(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____format_01717d9e11426b3b70f8);
db.assign(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c17d4924328261f7f9);
db.assignOptional(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9, _Object_gooRel_ff022000000000000003, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9, _GOO_parentGooRel_ff02200000000000000u, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Parse_DateTime_01717d4924328261f7f9);
