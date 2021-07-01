
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
const _instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055 = db.assignTag('01717ca5c5bc30fde055');
const _instance_of_Runnable_Input____s_01717ca5c81f2932427a = db.assignTag('01717ca5c81f2932427a');
const _instance_of_Runnable_Input____length_01717ca65a0797881748 = db.assignTag('01717ca65a0797881748');
const _instance_of_Runnable_Input____pad_string_01717ca65ba687c6eeff = db.assignTag('01717ca65ba687c6eeff');
const _instance_of_Runnable_Output____padded_string_01717ca65d2e4cdc1339 = db.assignTag('01717ca65d2e4cdc1339');
const _instance_of_Documentation_Function_Metadata_d0c17ca5c5bc30fde055 = db.assignTag('d0c17ca5c5bc30fde055');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055
db.newModel(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055, 'Pad Start of String') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Pad Start of String',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055);
// :_instance_of_Runnable_Input____s_01717ca5c81f2932427a
db.newInstance(_instance_of_Runnable_Input____s_01717ca5c81f2932427a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____length_01717ca65a0797881748
db.newInstance(_instance_of_Runnable_Input____length_01717ca65a0797881748)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'length',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____pad_string_01717ca65ba687c6eeff
db.newInstance(_instance_of_Runnable_Input____pad_string_01717ca65ba687c6eeff)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'pad string',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____padded_string_01717ca65d2e4cdc1339
db.newInstance(_instance_of_Runnable_Output____padded_string_01717ca65d2e4cdc1339)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'padded string',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c17ca5c5bc30fde055
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c17ca5c5bc30fde055)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01717ca5c81f2932427a-s | String | String to pad. |\n| 01717ca65a0797881748-length | Number | Output string length. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01717ca65d2e4cdc1339-padded string | String | Padded string. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nMethod pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.\nUse padStart js function. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Pads the current string from the start with a given string and returns a new string of the provided length',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s_01717ca5c81f2932427a);
db.assign(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____length_01717ca65a0797881748);
db.assign(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____pad_string_01717ca65ba687c6eeff);
db.assign(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____padded_string_01717ca65d2e4cdc1339);
db.assign(_instance_of_Runnable_Input____s_01717ca5c81f2932427a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____length_01717ca65a0797881748, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____pad_string_01717ca65ba687c6eeff, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____padded_string_01717ca65d2e4cdc1339, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c17ca5c5bc30fde055);
db.assign(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s_01717ca5c81f2932427a);
db.assign(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____length_01717ca65a0797881748);
db.assign(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____pad_string_01717ca65ba687c6eeff);
db.assign(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____padded_string_01717ca65d2e4cdc1339);
db.assign(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c17ca5c5bc30fde055);
db.assignOptional(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055, _Object_gooRel_ff022000000000000003, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055, _GOO_parentGooRel_ff02200000000000000u, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Pad_Start_of_String_01717ca5c5bc30fde055);
