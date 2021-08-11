
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001 = '01621fb84e320000f001';
const _Documentation_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_summary_01703376c4a81c0e9d91   = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_Input_Default_Value_01740c5d4ae4b520dd02 = '01740c5d4ae4b520dd02';
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
const _instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94 = db.assignTag('016324e7338307c3ed94');
const _instance_of_Runnable_Input____value_016324e734c079126513 = db.assignTag('016324e734c079126513');
const _instance_of_Runnable_Input____prefix_016324e735d1b86b4147 = db.assignTag('016324e735d1b86b4147');
const _instance_of_Runnable_Output____value_016324e736b15634d3e0 = db.assignTag('016324e736b15634d3e0');
const _instance_of_Documentation_017b35893b87635b85ce = db.assignTag('017b35893b87635b85ce');
const _instance_of_Documentation_017b35893f866d413a60 = db.assignTag('017b35893f866d413a60');
const _instance_of_Documentation_017b35893f86755e09b3 = db.assignTag('017b35893f86755e09b3');
const _instance_of_Documentation_017b3589427de6c2e38e = db.assignTag('017b3589427de6c2e38e');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _System_0179b269b5c75228d70f             = '0179b269b5c75228d70f';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94
db.newModel(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94, 'Debug Log') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Debug Log',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94);
// :_instance_of_Runnable_Input____value_016324e734c079126513
db.newInstance(_instance_of_Runnable_Input____value_016324e734c079126513)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____prefix_016324e735d1b86b4147
db.newInstance(_instance_of_Runnable_Input____prefix_016324e735d1b86b4147)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'prefix',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:'Info',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____value_016324e736b15634d3e0
db.newInstance(_instance_of_Runnable_Output____value_016324e736b15634d3e0)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b87635b85ce
db.newInstance(_instance_of_Documentation_017b35893b87635b85ce)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Outputs the provided value on the console, it can be any JS object that has a string representation.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Logs a message on the console.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f866d413a60
db.newInstance(_instance_of_Documentation_017b35893f866d413a60)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The value to display.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f86755e09b3
db.newInstance(_instance_of_Documentation_017b35893f86755e09b3)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'A label to put in front of the message.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427de6c2e38e
db.newInstance(_instance_of_Documentation_017b3589427de6c2e38e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The object that was passed in.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____value_016324e734c079126513);
db.assign(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____prefix_016324e735d1b86b4147);
db.assign(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____value_016324e736b15634d3e0);
db.assign(_instance_of_Runnable_Input____value_016324e734c079126513, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____prefix_016324e735d1b86b4147, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____value_016324e736b15634d3e0, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Documentation_017b35893b87635b85ce   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94);
db.assign(_instance_of_Documentation_017b35893f866d413a60   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____value_016324e734c079126513);
db.assign(_instance_of_Documentation_017b35893f86755e09b3   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____prefix_016324e735d1b86b4147);
db.assign(_instance_of_Documentation_017b3589427de6c2e38e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____value_016324e736b15634d3e0);
db.assign(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____value_016324e734c079126513);
db.assign(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____prefix_016324e735d1b86b4147);
db.assign(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____value_016324e736b15634d3e0);
db.assign(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b87635b85ce   );
db.assign(_instance_of_Runnable_Input____value_016324e734c079126513, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f866d413a60   );
db.assign(_instance_of_Runnable_Input____prefix_016324e735d1b86b4147, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f86755e09b3   );
db.assign(_instance_of_Runnable_Output____value_016324e736b15634d3e0, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427de6c2e38e   );
db.assignOptional(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94, _Object_gooRel_ff022000000000000003, _System_0179b269b5c75228d70f);
db.assignOptional(_instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94, _GOO_parentGooRel_ff02200000000000000u, _System_0179b269b5c75228d70f);
db.assignOptional(_System_0179b269b5c75228d70f, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94);
db.assignOptional(_System_0179b269b5c75228d70f, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Debug_Log_016324e7338307c3ed94);
