
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
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
const _instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54 = db.assignTag('0175b1ab88cf39df4c54');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0175b1ab88d039df4c54 = db.assignTag('0175b1ab88d039df4c54');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_0175b1ab88d139df4c54 = db.assignTag('0175b1ab88d139df4c54');
const _instance_of_Runnable_Input____object_0175b1aba1cadf4c9401 = db.assignTag('0175b1aba1cadf4c9401');
const _instance_of_Runnable_Output____json_0175b1abb3198b6454db = db.assignTag('0175b1abb3198b6454db');
const _instance_of_Documentation_017b35893b7271f1aa98 = db.assignTag('017b35893b7271f1aa98');
const _instance_of_Documentation_017b35893f70740077b0 = db.assignTag('017b35893f70740077b0');
const _instance_of_Documentation_017b3589427acc1b37a0 = db.assignTag('017b3589427acc1b37a0');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _JSON_0179b2684a901d133726               = '0179b2684a901d133726';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54
db.newModel(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54, 'Object to Json') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Object to Json',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54);
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0175b1ab88d039df4c54
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0175b1ab88d039df4c54)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_0175b1ab88d139df4c54
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_0175b1ab88d139df4c54)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____object_0175b1aba1cadf4c9401
db.newInstance(_instance_of_Runnable_Input____object_0175b1aba1cadf4c9401)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____json_0175b1abb3198b6454db
db.newInstance(_instance_of_Runnable_Output____json_0175b1abb3198b6454db)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'json',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b7271f1aa98
db.newInstance(_instance_of_Documentation_017b35893b7271f1aa98)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Parses an object into a json.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Parse an Object into a stringified Json',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f70740077b0
db.newInstance(_instance_of_Documentation_017b35893f70740077b0)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'An instance of a BusinessModel.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427acc1b37a0
db.newInstance(_instance_of_Documentation_017b3589427acc1b37a0)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'stringified Json',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0175b1ab88d039df4c54);
db.assign(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____object_0175b1aba1cadf4c9401);
db.assign(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_0175b1ab88d139df4c54);
db.assign(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____json_0175b1abb3198b6454db);
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0175b1ab88d039df4c54, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0175b1ab88d139df4c54, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____object_0175b1aba1cadf4c9401, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Model_type_0162f672366be5ca7a86                  );
db.assign(_instance_of_Runnable_Output____json_0175b1abb3198b6454db, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893b7271f1aa98   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54);
db.assign(_instance_of_Documentation_017b35893f70740077b0   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____object_0175b1aba1cadf4c9401);
db.assign(_instance_of_Documentation_017b3589427acc1b37a0   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____json_0175b1abb3198b6454db);
db.assign(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0175b1ab88d039df4c54);
db.assign(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0175b1ab88d139df4c54);
db.assign(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____object_0175b1aba1cadf4c9401);
db.assign(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____json_0175b1abb3198b6454db);
db.assign(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b7271f1aa98   );
db.assign(_instance_of_Runnable_Input____object_0175b1aba1cadf4c9401, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f70740077b0   );
db.assign(_instance_of_Runnable_Output____json_0175b1abb3198b6454db, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427acc1b37a0   );
db.assignOptional(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54, _Object_gooRel_ff022000000000000003, _JSON_0179b2684a901d133726);
db.assignOptional(_instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54, _GOO_parentGooRel_ff02200000000000000u, _JSON_0179b2684a901d133726);
db.assignOptional(_JSON_0179b2684a901d133726, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54);
db.assignOptional(_JSON_0179b2684a901d133726, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Object_to_Json_0175b1ab88cf39df4c54);
