
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


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
const _instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c = db.assignTag('01626bf8811fa380be1c');
const _instance_of_Runnable_Input____s1_01626bf9b3b43525c946 = db.assignTag('01626bf9b3b43525c946');
const _instance_of_Runnable_Input____s2_01626bfb12f7ee3b833a = db.assignTag('01626bfb12f7ee3b833a');
const _instance_of_Runnable_Output____s1_contains$_40_$s2$_41_$_01626bfb92937330648b = db.assignTag('01626bfb92937330648b');
const _instance_of_Documentation_017b35893b9702a13502 = db.assignTag('017b35893b9702a13502');
const _instance_of_Documentation_017b35893f9c8c019563 = db.assignTag('017b35893f9c8c019563');
const _instance_of_Documentation_017b35893f9cc9482b69 = db.assignTag('017b35893f9cc9482b69');
const _instance_of_Documentation_017b358942930edf3de2 = db.assignTag('017b358942930edf3de2');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c
db.newModel(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c, 'Contains') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.setRootInstanceTag(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c);
// :_instance_of_Runnable_Input____s1_01626bf9b3b43525c946
db.newInstance(_instance_of_Runnable_Input____s1_01626bf9b3b43525c946)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s1',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____s2_01626bfb12f7ee3b833a
db.newInstance(_instance_of_Runnable_Input____s2_01626bfb12f7ee3b833a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s2',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____s1_contains$_40_$s2$_41_$_01626bfb92937330648b
db.newInstance(_instance_of_Runnable_Output____s1_contains$_40_$s2$_41_$_01626bfb92937330648b)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s1.contains(s2)',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b9702a13502
db.newInstance(_instance_of_Documentation_017b35893b9702a13502)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Determines whether one string may be found within another string, returning true or false as appropriate.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Checks whether a string contains another one.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f9c8c019563
db.newInstance(_instance_of_Documentation_017b35893f9c8c019563)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The string to search in.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f9cc9482b69
db.newInstance(_instance_of_Documentation_017b35893f9cc9482b69)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The string to search for.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942930edf3de2
db.newInstance(_instance_of_Documentation_017b358942930edf3de2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'`true` if s2 is found anywhere in s1.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s1_01626bf9b3b43525c946);
db.assign(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s2_01626bfb12f7ee3b833a);
db.assign(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____s1_contains$_40_$s2$_41_$_01626bfb92937330648b);
db.assign(_instance_of_Runnable_Input____s1_01626bf9b3b43525c946, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____s2_01626bfb12f7ee3b833a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____s1_contains$_40_$s2$_41_$_01626bfb92937330648b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Documentation_017b35893b9702a13502   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c);
db.assign(_instance_of_Documentation_017b35893f9c8c019563   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____s1_01626bf9b3b43525c946);
db.assign(_instance_of_Documentation_017b35893f9cc9482b69   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____s2_01626bfb12f7ee3b833a);
db.assign(_instance_of_Documentation_017b358942930edf3de2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____s1_contains$_40_$s2$_41_$_01626bfb92937330648b);
db.assign(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s1_01626bf9b3b43525c946);
db.assign(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s2_01626bfb12f7ee3b833a);
db.assign(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____s1_contains$_40_$s2$_41_$_01626bfb92937330648b);
db.assign(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b9702a13502   );
db.assign(_instance_of_Runnable_Input____s1_01626bf9b3b43525c946, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f9c8c019563   );
db.assign(_instance_of_Runnable_Input____s2_01626bfb12f7ee3b833a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f9cc9482b69   );
db.assign(_instance_of_Runnable_Output____s1_contains$_40_$s2$_41_$_01626bfb92937330648b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942930edf3de2   );
db.assignOptional(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c, _Object_gooRel_ff022000000000000003, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c, _GOO_parentGooRel_ff02200000000000000u, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Contains_01626bf8811fa380be1c);
