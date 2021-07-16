
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
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
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199 = db.assignTag('01633f1440e8af58e199');
const _instance_of_Runnable_Input____s_01633f144293e8e69d4e = db.assignTag('01633f144293e8e69d4e');
const _instance_of_Runnable_Output____boolean_01633f1443c3c2a2f29b = db.assignTag('01633f1443c3c2a2f29b');
const _instance_of_Documentation_Function_Metadata_d0c33f1440e8af58e199 = db.assignTag('d0c33f1440e8af58e199');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199
db.newModel(_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199, 'Parse Boolean') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        ['01621fb84e320000f001']:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Parse Boolean',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199);
// :_instance_of_Runnable_Input____s_01633f144293e8e69d4e
db.newInstance(_instance_of_Runnable_Input____s_01633f144293e8e69d4e)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____boolean_01633f1443c3c2a2f29b
db.newInstance(_instance_of_Runnable_Output____boolean_01633f1443c3c2a2f29b)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'boolean',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c33f1440e8af58e199
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c33f1440e8af58e199)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01633f144293e8e69d4e-s | String | The string to convert. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01633f1443c3c2a2f29b-boolean | Boolean | The result of the conversion. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nAttempts to parse the provided string to convert it into a boolean value.\nI.E. If the string is \'true\' (case-insensitive match), then it returns `true`, otherwise `false`.\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Converts a String into a Boolean.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s_01633f144293e8e69d4e);
db.assign(_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____boolean_01633f1443c3c2a2f29b);
db.assign(_instance_of_Runnable_Input____s_01633f144293e8e69d4e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Output____boolean_01633f1443c3c2a2f29b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c33f1440e8af58e199);
db.assign(_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s_01633f144293e8e69d4e);
db.assign(_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____boolean_01633f1443c3c2a2f29b);
db.assign(_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c33f1440e8af58e199);
db.assignOptional(_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199, _Object_gooRel_ff022000000000000003, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199, _GOO_parentGooRel_ff02200000000000000u, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Parse_Boolean_01633f1440e8af58e199);
