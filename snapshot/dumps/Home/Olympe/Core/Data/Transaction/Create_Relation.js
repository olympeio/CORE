
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';
const _Relation_ff021000000000000006           = 'ff021000000000000006';
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
const _instance_of_Runnable_Input____destination_01694800e25a1bfe24a3 = db.assignTag('01694800e25a1bfe24a3');
const _instance_of_Runnable_Output____origin_01694800e25a5172b9c6 = db.assignTag('01694800e25a5172b9c6');
const _instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0 = db.assignTag('01694800e25a7c39f7b0');
const _instance_of_Runnable_Input____relation_01694800e25aa267755e = db.assignTag('01694800e25aa267755e');
const _instance_of_Runnable_Input____origin_01694800e25aafcecf7c = db.assignTag('01694800e25aafcecf7c');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_01694800e25b7c39f7b0 = db.assignTag('01694800e25b7c39f7b0');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_01694800e25c7c39f7b0 = db.assignTag('01694800e25c7c39f7b0');
const _instance_of_Documentation_017b35893b6d3b4c068d = db.assignTag('017b35893b6d3b4c068d');
const _instance_of_Documentation_017b35893f6dc7b20785 = db.assignTag('017b35893f6dc7b20785');
const _instance_of_Documentation_017b35893f6e43a9172a = db.assignTag('017b35893f6e43a9172a');
const _instance_of_Documentation_017b35893f6ee0dcf92b = db.assignTag('017b35893f6ee0dcf92b');
const _instance_of_Documentation_017b3589427938f8eea7 = db.assignTag('017b3589427938f8eea7');
const _instance_of_Runnable_Output____error_017bb7ae5638c6d3c25f = db.assignTag('017bb7ae5638c6d3c25f');
const _instance_of_Documentation_017bb7ae56589aa37159 = db.assignTag('017bb7ae56589aa37159');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Transaction_0179b26880c1af51a32b        = '0179b26880c1af51a32b';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0
db.newModel(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, 'Create Relation') // tag and name of the model
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012)
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, {
    [db.DEFAULT+_Object_name_ff023000000000000011]:'Create Relation',
    'v'                                     :2
});
db.setRootInstanceTag(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0);
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_01694800e25b7c39f7b0
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_01694800e25b7c39f7b0)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____origin_01694800e25aafcecf7c
db.newInstance(_instance_of_Runnable_Input____origin_01694800e25aafcecf7c)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'origin',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____relation_01694800e25aa267755e
db.newInstance(_instance_of_Runnable_Input____relation_01694800e25aa267755e)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'relation',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____destination_01694800e25a1bfe24a3
db.newInstance(_instance_of_Runnable_Input____destination_01694800e25a1bfe24a3)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'destination',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_01694800e25c7c39f7b0
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_01694800e25c7c39f7b0)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____origin_01694800e25a5172b9c6
db.newInstance(_instance_of_Runnable_Output____origin_01694800e25a5172b9c6)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'origin',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b6d3b4c068d
db.newInstance(_instance_of_Documentation_017b35893b6d3b4c068d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Creates a specified relation between 2 given objects.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Creates a relation between 2 objects.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f6dc7b20785
db.newInstance(_instance_of_Documentation_017b35893f6dc7b20785)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The origin object.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f6e43a9172a
db.newInstance(_instance_of_Documentation_017b35893f6e43a9172a)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The destination object.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f6ee0dcf92b
db.newInstance(_instance_of_Documentation_017b35893f6ee0dcf92b)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The relation.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427938f8eea7
db.newInstance(_instance_of_Documentation_017b3589427938f8eea7)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The origin Object.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____error_017bb7ae5638c6d3c25f
db.newInstance(_instance_of_Runnable_Output____error_017bb7ae5638c6d3c25f)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'error',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017bb7ae56589aa37159
db.newInstance(_instance_of_Documentation_017bb7ae56589aa37159)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Output____error_017bb7ae5638c6d3c25f)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'If the provided object doesn\'t have the specified relation',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____destination_01694800e25a1bfe24a3);
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____relation_01694800e25aa267755e);
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____origin_01694800e25aafcecf7c);
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_01694800e25b7c39f7b0);
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____origin_01694800e25a5172b9c6);
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_01694800e25c7c39f7b0);
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____error_017bb7ae5638c6d3c25f);
db.assign(_instance_of_Runnable_Input____destination_01694800e25a1bfe24a3, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Output____origin_01694800e25a5172b9c6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____relation_01694800e25aa267755e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Relation_ff021000000000000006                    );
db.assign(_instance_of_Runnable_Input____origin_01694800e25aafcecf7c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_01694800e25b7c39f7b0, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_01694800e25c7c39f7b0, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____error_017bb7ae5638c6d3c25f, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Documentation_017b35893b6d3b4c068d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0);
db.assign(_instance_of_Documentation_017b35893f6dc7b20785   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____origin_01694800e25aafcecf7c);
db.assign(_instance_of_Documentation_017b35893f6e43a9172a   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____destination_01694800e25a1bfe24a3);
db.assign(_instance_of_Documentation_017b35893f6ee0dcf92b   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____relation_01694800e25aa267755e);
db.assign(_instance_of_Documentation_017b3589427938f8eea7   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____origin_01694800e25a5172b9c6);
db.assign(_instance_of_Documentation_017bb7ae56589aa37159   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____error_017bb7ae5638c6d3c25f);
db.assign(_instance_of_Runnable_Input____destination_01694800e25a1bfe24a3, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f6e43a9172a   );
db.assign(_instance_of_Runnable_Output____origin_01694800e25a5172b9c6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427938f8eea7   );
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____destination_01694800e25a1bfe24a3);
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____origin_01694800e25a5172b9c6);
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____relation_01694800e25aa267755e);
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____origin_01694800e25aafcecf7c);
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_01694800e25b7c39f7b0);
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_01694800e25c7c39f7b0);
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b6d3b4c068d   );
db.assign(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____error_017bb7ae5638c6d3c25f);
db.assign(_instance_of_Runnable_Input____relation_01694800e25aa267755e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f6ee0dcf92b   );
db.assign(_instance_of_Runnable_Input____origin_01694800e25aafcecf7c, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f6dc7b20785   );
db.assign(_instance_of_Runnable_Output____error_017bb7ae5638c6d3c25f, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017bb7ae56589aa37159   );
db.assignOptional(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _Object_gooRel_ff022000000000000003, _Transaction_0179b26880c1af51a32b);
db.assignOptional(_instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0, _GOO_parentGooRel_ff02200000000000000u, _Transaction_0179b26880c1af51a32b);
db.assignOptional(_Transaction_0179b26880c1af51a32b, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0);
db.assignOptional(_Transaction_0179b26880c1af51a32b, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Create_Relation_01694800e25a7c39f7b0);
