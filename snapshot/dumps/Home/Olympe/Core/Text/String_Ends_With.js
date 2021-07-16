
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
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
const _Runnable_Input_Default_Value_01740c5d4ae4b520dd02 = '01740c5d4ae4b520dd02';
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
const _instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292 = db.assignTag('01717ca51b73ccbd9292');
const _instance_of_Runnable_Input____s1_01717ca51d23ce9b4727 = db.assignTag('01717ca51d23ce9b4727');
const _instance_of_Runnable_Input____s2_01717ca51e9602f4d51e = db.assignTag('01717ca51e9602f4d51e');
const _instance_of_Runnable_Output____s1_endsWith$_40_$s2$_41_$_01717ca5200d54df0c35 = db.assignTag('01717ca5200d54df0c35');
const _instance_of_Runnable_Input____length_01717ce9cce0f7a6cf4a = db.assignTag('01717ce9cce0f7a6cf4a');
const _instance_of_Documentation_Function_Metadata_d0c17ca51b73ccbd9292 = db.assignTag('d0c17ca51b73ccbd9292');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292
db.newModel(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292, 'String Ends With') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        ['01621fb84e320000f001']:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292);
// :_instance_of_Runnable_Input____s1_01717ca51d23ce9b4727
db.newInstance(_instance_of_Runnable_Input____s1_01717ca51d23ce9b4727)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s1',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____s2_01717ca51e9602f4d51e
db.newInstance(_instance_of_Runnable_Input____s2_01717ca51e9602f4d51e)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s2',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____s1_endsWith$_40_$s2$_41_$_01717ca5200d54df0c35
db.newInstance(_instance_of_Runnable_Output____s1_endsWith$_40_$s2$_41_$_01717ca5200d54df0c35)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s1.endsWith(s2)',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____length_01717ce9cce0f7a6cf4a
db.newInstance(_instance_of_Runnable_Input____length_01717ce9cce0f7a6cf4a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'length',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:-1,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c17ca51b73ccbd9292
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c17ca51b73ccbd9292)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01717ca51d23ce9b4727-s1 | String | The string to search. |\n| 01717ca51e9602f4d51e-s2 | String | The string to be searched for at the end of s1. |\n| 01717ce9cce0f7a6cf4a-length | Number | Used as the length of str. Defaults to -1 which means s1.length. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01717ca5200d54df0c35-s1.endsWith(s2, length) | Boolean | True if s1 ends with s2 |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nDetermines whether a string ends with the characters of a specified string, returning true or false as appropriate.\nUse endsWith js function: See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Determines whether the s1 ends with the characters of string s2',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s1_01717ca51d23ce9b4727);
db.assign(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s2_01717ca51e9602f4d51e);
db.assign(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____length_01717ce9cce0f7a6cf4a);
db.assign(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____s1_endsWith$_40_$s2$_41_$_01717ca5200d54df0c35);
db.assign(_instance_of_Runnable_Input____s1_01717ca51d23ce9b4727, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____s2_01717ca51e9602f4d51e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____s1_endsWith$_40_$s2$_41_$_01717ca5200d54df0c35, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Input____length_01717ce9cce0f7a6cf4a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c17ca51b73ccbd9292);
db.assign(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s1_01717ca51d23ce9b4727);
db.assign(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s2_01717ca51e9602f4d51e);
db.assign(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____s1_endsWith$_40_$s2$_41_$_01717ca5200d54df0c35);
db.assign(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____length_01717ce9cce0f7a6cf4a);
db.assign(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c17ca51b73ccbd9292);
db.assignOptional(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292, _Object_gooRel_ff022000000000000003, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292, _GOO_parentGooRel_ff02200000000000000u, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____String_Ends_With_01717ca51b73ccbd9292);
