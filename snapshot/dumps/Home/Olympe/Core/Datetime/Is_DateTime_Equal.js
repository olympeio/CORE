
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Date$_47_$Time_ff021000000000000014     = 'ff021000000000000014';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94 = '01703376c4a81c0e9d94';
const _Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001 = '01621fb84e320000f001';
const _Documentation_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_summary_01703376c4a81c0e9d91   = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Documentation_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9 = db.assignTag('01783b83d0a24b160fa9');
const _instance_of_Runnable_Input____date_to_compare_01783b93b58136f3ea29 = db.assignTag('01783b93b58136f3ea29');
const _instance_of_Runnable_Input____comparison_date_01783b93c9716edff2ed = db.assignTag('01783b93c9716edff2ed');
const _instance_of_Runnable_Output____is_equal_01783b93e537a19a318d = db.assignTag('01783b93e537a19a318d');
const _instance_of_Documentation_017b35893b2f8dac5842 = db.assignTag('017b35893b2f8dac5842');
const _instance_of_Documentation_017b35893ec6ab8bbd3d = db.assignTag('017b35893ec6ab8bbd3d');
const _instance_of_Documentation_017b35893ec75d4d1cf7 = db.assignTag('017b35893ec75d4d1cf7');
const _instance_of_Documentation_017b3589426ac40df5a9 = db.assignTag('017b3589426ac40df5a9');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Datetime_0179b2690f49a1f52652           = '0179b2690f49a1f52652';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9
db.newModel(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, 'Is DateTime Equal') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Is DateTime Equal',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9);
// :_instance_of_Runnable_Input____date_to_compare_01783b93b58136f3ea29
db.newInstance(_instance_of_Runnable_Input____date_to_compare_01783b93b58136f3ea29)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'date to compare',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____comparison_date_01783b93c9716edff2ed
db.newInstance(_instance_of_Runnable_Input____comparison_date_01783b93c9716edff2ed)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'comparison date',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____is_equal_01783b93e537a19a318d
db.newInstance(_instance_of_Runnable_Output____is_equal_01783b93e537a19a318d)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'is equal',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b2f8dac5842
db.newInstance(_instance_of_Documentation_017b35893b2f8dac5842)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Returns true if the datetime object equals another datetime object, false otherwise.',
        [_Documentation_summary_01703376c4a81c0e9d91]:' Returns a boolean indicating whether a datetime equals another.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec6ab8bbd3d
db.newInstance(_instance_of_Documentation_017b35893ec6ab8bbd3d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The reference date.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec75d4d1cf7
db.newInstance(_instance_of_Documentation_017b35893ec75d4d1cf7)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The date we want to know if it is equals to another date.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589426ac40df5a9
db.newInstance(_instance_of_Documentation_017b3589426ac40df5a9)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The result.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____date_to_compare_01783b93b58136f3ea29);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____comparison_date_01783b93c9716edff2ed);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____is_equal_01783b93e537a19a318d);
db.assign(_instance_of_Runnable_Input____date_to_compare_01783b93b58136f3ea29, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Input____comparison_date_01783b93c9716edff2ed, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Output____is_equal_01783b93e537a19a318d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Documentation_017b35893b2f8dac5842   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9);
db.assign(_instance_of_Documentation_017b35893ec6ab8bbd3d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____comparison_date_01783b93c9716edff2ed);
db.assign(_instance_of_Documentation_017b35893ec75d4d1cf7   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____date_to_compare_01783b93b58136f3ea29);
db.assign(_instance_of_Documentation_017b3589426ac40df5a9   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____is_equal_01783b93e537a19a318d);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____date_to_compare_01783b93b58136f3ea29);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____comparison_date_01783b93c9716edff2ed);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____is_equal_01783b93e537a19a318d);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b2f8dac5842   );
db.assign(_instance_of_Runnable_Input____date_to_compare_01783b93b58136f3ea29, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec75d4d1cf7   );
db.assign(_instance_of_Runnable_Input____comparison_date_01783b93c9716edff2ed, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec6ab8bbd3d   );
db.assign(_instance_of_Runnable_Output____is_equal_01783b93e537a19a318d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589426ac40df5a9   );
db.assignOptional(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Object_gooRel_ff022000000000000003, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _GOO_parentGooRel_ff02200000000000000u, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9);
