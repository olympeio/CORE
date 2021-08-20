
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';
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
const _instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5 = db.assignTag('016755c484eeed3da5e5');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016755c484efed3da5e5 = db.assignTag('016755c484efed3da5e5');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_016755c484f0ed3da5e5 = db.assignTag('016755c484f0ed3da5e5');
const _instance_of_Runnable_Input____URL_016755c4877502dfa2e1 = db.assignTag('016755c4877502dfa2e1');
const _instance_of_Runnable_Output____Result_016755c489b6a3ad6dd5 = db.assignTag('016755c489b6a3ad6dd5');
const _instance_of_Documentation_017b35893b3248aa1b5f = db.assignTag('017b35893b3248aa1b5f');
const _instance_of_Documentation_017b35893f106bd39f2a = db.assignTag('017b35893f106bd39f2a');
const _instance_of_Documentation_017b3589426ee2380783 = db.assignTag('017b3589426ee2380783');
const _instance_of_Runnable_Input____Open_in_same_tab_017b59cddbca4340fbef = db.assignTag('017b59cddbca4340fbef');
const _instance_of_Documentation_017b59cdfffc6823bf4d = db.assignTag('017b59cdfffc6823bf4d');
const _instance_of_Documentation_017b59ce000ae4bac388 = db.assignTag('017b59ce000ae4bac388');
const _instance_of_Documentation_017b59ce00151e93422f = db.assignTag('017b59ce00151e93422f');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Navigation_0179b269f70efbab6b8d         = '0179b269f70efbab6b8d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5
db.newModel(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, 'Open URL') // tag and name of the model
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012)
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, {
    [db.DEFAULT+_Object_name_ff023000000000000011]:'Open URL',
    'v'                                     :2
});
db.setRootInstanceTag(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5);
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016755c484efed3da5e5
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016755c484efed3da5e5)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_016755c484f0ed3da5e5
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_016755c484f0ed3da5e5)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____URL_016755c4877502dfa2e1
db.newInstance(_instance_of_Runnable_Input____URL_016755c4877502dfa2e1)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'URL',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Result_016755c489b6a3ad6dd5
db.newInstance(_instance_of_Runnable_Output____Result_016755c489b6a3ad6dd5)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Result',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b3248aa1b5f
db.newInstance(_instance_of_Documentation_017b35893b3248aa1b5f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Opens an URL in a separate tab or window depending on the environment.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Open an URL.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f106bd39f2a
db.newInstance(_instance_of_Documentation_017b35893f106bd39f2a)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The URL to open.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589426ee2380783
db.newInstance(_instance_of_Documentation_017b3589426ee2380783)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'`true` if the URL was successfully opened.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Open_in_same_tab_017b59cddbca4340fbef
db.newInstance(_instance_of_Runnable_Input____Open_in_same_tab_017b59cddbca4340fbef)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Open in same tab',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b59cdfffc6823bf4d
db.newInstance(_instance_of_Documentation_017b59cdfffc6823bf4d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b59ce000ae4bac388
db.newInstance(_instance_of_Documentation_017b59ce000ae4bac388)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'If true, the url will be opened within the same tab as the current page',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b59ce00151e93422f
db.newInstance(_instance_of_Documentation_017b59ce00151e93422f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016755c484efed3da5e5);
db.assign(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____URL_016755c4877502dfa2e1);
db.assign(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Open_in_same_tab_017b59cddbca4340fbef);
db.assign(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_016755c484f0ed3da5e5);
db.assign(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Result_016755c489b6a3ad6dd5);
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016755c484efed3da5e5, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_016755c484f0ed3da5e5, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____URL_016755c4877502dfa2e1, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____Result_016755c489b6a3ad6dd5, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Input____Open_in_same_tab_017b59cddbca4340fbef, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Documentation_017b35893b3248aa1b5f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5);
db.assign(_instance_of_Documentation_017b35893f106bd39f2a   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____URL_016755c4877502dfa2e1);
db.assign(_instance_of_Documentation_017b3589426ee2380783   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Result_016755c489b6a3ad6dd5);
db.assign(_instance_of_Documentation_017b59cdfffc6823bf4d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016755c484efed3da5e5);
db.assign(_instance_of_Documentation_017b59ce000ae4bac388   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Open_in_same_tab_017b59cddbca4340fbef);
db.assign(_instance_of_Documentation_017b59ce00151e93422f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_output_Control_Flow____Control_Flow_016755c484f0ed3da5e5);
db.assign(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016755c484efed3da5e5);
db.assign(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_016755c484f0ed3da5e5);
db.assign(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____URL_016755c4877502dfa2e1);
db.assign(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Result_016755c489b6a3ad6dd5);
db.assign(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b3248aa1b5f   );
db.assign(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Open_in_same_tab_017b59cddbca4340fbef);
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016755c484efed3da5e5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b59cdfffc6823bf4d   );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_016755c484f0ed3da5e5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b59ce00151e93422f   );
db.assign(_instance_of_Runnable_Input____URL_016755c4877502dfa2e1, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f106bd39f2a   );
db.assign(_instance_of_Runnable_Output____Result_016755c489b6a3ad6dd5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589426ee2380783   );
db.assign(_instance_of_Runnable_Input____Open_in_same_tab_017b59cddbca4340fbef, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b59ce000ae4bac388   );
db.assignOptional(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, _Object_gooRel_ff022000000000000003, _Navigation_0179b269f70efbab6b8d);
db.assignOptional(_instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5, _GOO_parentGooRel_ff02200000000000000u, _Navigation_0179b269f70efbab6b8d);
db.assignOptional(_Navigation_0179b269f70efbab6b8d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5);
db.assignOptional(_Navigation_0179b269f70efbab6b8d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Open_URL_016755c484eeed3da5e5);
