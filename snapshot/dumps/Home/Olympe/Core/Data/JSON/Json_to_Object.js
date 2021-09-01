
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
const _Model_type_0162f672366be5ca7a86         = '0162f672366be5ca7a86';
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
const _instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462 = db.assignTag('017598dae77177e73462');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017598dae77277e73462 = db.assignTag('017598dae77277e73462');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_017598dae77377e73462 = db.assignTag('017598dae77377e73462');
const _instance_of_Runnable_Input____json_017598db8fc9dd09a173 = db.assignTag('017598db8fc9dd09a173');
const _instance_of_Runnable_Input____businessModel_017598dba19b54126f76 = db.assignTag('017598dba19b54126f76');
const _instance_of_Runnable_Input____persist_017598dba19b54126f77 = db.assignTag('017598dba19b54126f77');
const _instance_of_Runnable_Output____object_017598dbb3c32a2f3298 = db.assignTag('017598dbb3c32a2f3298');
const _instance_of_Documentation_017b35893b762cf28be5 = db.assignTag('017b35893b762cf28be5');
const _instance_of_Documentation_017b35893f7a008f8c0e = db.assignTag('017b35893f7a008f8c0e');
const _instance_of_Documentation_017b35893f7a41436e4b = db.assignTag('017b35893f7a41436e4b');
const _instance_of_Documentation_017b35893f7ae2a8ed68 = db.assignTag('017b35893f7ae2a8ed68');
const _instance_of_Documentation_017b3589427b487e4e70 = db.assignTag('017b3589427b487e4e70');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _JSON_0179b2684a901d133726               = '0179b2684a901d133726';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462
db.newModel(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, 'JSON to Object') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Json to Object',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462);
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017598dae77277e73462
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017598dae77277e73462)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_017598dae77377e73462
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_017598dae77377e73462)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____json_017598db8fc9dd09a173
db.newInstance(_instance_of_Runnable_Input____json_017598db8fc9dd09a173)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'json',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____businessModel_017598dba19b54126f76
db.newInstance(_instance_of_Runnable_Input____businessModel_017598dba19b54126f76)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'businessModel',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____persist_017598dba19b54126f77
db.newInstance(_instance_of_Runnable_Input____persist_017598dba19b54126f77)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'persist',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:false,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____object_017598dbb3c32a2f3298
db.newInstance(_instance_of_Runnable_Output____object_017598dbb3c32a2f3298)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b762cf28be5
db.newInstance(_instance_of_Documentation_017b35893b762cf28be5)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Parses a JSON into target business model.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Parse a JSON into an instance of business model',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f7a008f8c0e
db.newInstance(_instance_of_Documentation_017b35893f7a008f8c0e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The target business model',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f7a41436e4b
db.newInstance(_instance_of_Documentation_017b35893f7a41436e4b)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Indicates if the instance should be persisted, default: false',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f7ae2a8ed68
db.newInstance(_instance_of_Documentation_017b35893f7ae2a8ed68)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'JSON to parse',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427b487e4e70
db.newInstance(_instance_of_Documentation_017b3589427b487e4e70)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The resulting instance.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017598dae77277e73462);
db.assign(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____json_017598db8fc9dd09a173);
db.assign(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____businessModel_017598dba19b54126f76);
db.assign(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____persist_017598dba19b54126f77);
db.assign(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_017598dae77377e73462);
db.assign(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____object_017598dbb3c32a2f3298);
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017598dae77277e73462, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_017598dae77377e73462, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____json_017598db8fc9dd09a173, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____businessModel_017598dba19b54126f76, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Model_type_0162f672366be5ca7a86                  );
db.assign(_instance_of_Runnable_Input____persist_017598dba19b54126f77, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Output____object_017598dbb3c32a2f3298, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Model_type_0162f672366be5ca7a86                  );
db.assign(_instance_of_Documentation_017b35893b762cf28be5   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462);
db.assign(_instance_of_Documentation_017b35893f7a008f8c0e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____businessModel_017598dba19b54126f76);
db.assign(_instance_of_Documentation_017b35893f7a41436e4b   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____persist_017598dba19b54126f77);
db.assign(_instance_of_Documentation_017b35893f7ae2a8ed68   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____json_017598db8fc9dd09a173);
db.assign(_instance_of_Documentation_017b3589427b487e4e70   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____object_017598dbb3c32a2f3298);
db.assign(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017598dae77277e73462);
db.assign(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_017598dae77377e73462);
db.assign(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____json_017598db8fc9dd09a173);
db.assign(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____businessModel_017598dba19b54126f76);
db.assign(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____persist_017598dba19b54126f77);
db.assign(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____object_017598dbb3c32a2f3298);
db.assign(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b762cf28be5   );
db.assign(_instance_of_Runnable_Input____json_017598db8fc9dd09a173, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f7ae2a8ed68   );
db.assign(_instance_of_Runnable_Input____businessModel_017598dba19b54126f76, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f7a008f8c0e   );
db.assign(_instance_of_Runnable_Input____persist_017598dba19b54126f77, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f7a41436e4b   );
db.assign(_instance_of_Runnable_Output____object_017598dbb3c32a2f3298, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427b487e4e70   );
db.assignOptional(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _Object_gooRel_ff022000000000000003, _JSON_0179b2684a901d133726);
db.assignOptional(_instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462, _GOO_parentGooRel_ff02200000000000000u, _JSON_0179b2684a901d133726);
db.assignOptional(_JSON_0179b2684a901d133726, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462);
db.assignOptional(_JSON_0179b2684a901d133726, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____JSON_to_Object_017598dae77177e73462);