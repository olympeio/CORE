
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _File_ff021000000000000030               = 'ff021000000000000030';
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
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0179e54f2f4b5630399a = db.assignTag('0179e54f2f4b5630399a');
const _instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003 = db.assignTag('0179e54f2f4c25c47003');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_0179e54f2f4d621b7223 = db.assignTag('0179e54f2f4d621b7223');
const _instance_of_Runnable_Input____file_0179e54f2f4e4037de0f = db.assignTag('0179e54f2f4e4037de0f');
const _instance_of_Runnable_Output____content_0179e54f2f4fd4e331ed = db.assignTag('0179e54f2f4fd4e331ed');
const _instance_of_Documentation_017b35893b331432e499 = db.assignTag('017b35893b331432e499');
const _instance_of_Documentation_017b35893f1407ccb273 = db.assignTag('017b35893f1407ccb273');
const _instance_of_Documentation_017b3589426f62cfaf08 = db.assignTag('017b3589426f62cfaf08');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _File_0179b2692921b321f99d               = '0179b2692921b321f99d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003
db.newModel(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003, 'Get File Content') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get File Content',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003);
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0179e54f2f4b5630399a
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0179e54f2f4b5630399a)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_0179e54f2f4d621b7223
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_0179e54f2f4d621b7223)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____file_0179e54f2f4e4037de0f
db.newInstance(_instance_of_Runnable_Input____file_0179e54f2f4e4037de0f)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'file',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____content_0179e54f2f4fd4e331ed
db.newInstance(_instance_of_Runnable_Output____content_0179e54f2f4fd4e331ed)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'content',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b331432e499
db.newInstance(_instance_of_Documentation_017b35893b331432e499)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Get the file content, as a plain string for MIME types text/* and application/json. For other MIME types, a string encoded in Base64 is returned.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Get the text or Base64 content of a file',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f1407ccb273
db.newInstance(_instance_of_Documentation_017b35893f1407ccb273)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The file to be read.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589426f62cfaf08
db.newInstance(_instance_of_Documentation_017b3589426f62cfaf08)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The text or Base64 content of the file.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0179e54f2f4b5630399a);
db.assign(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____file_0179e54f2f4e4037de0f);
db.assign(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_0179e54f2f4d621b7223);
db.assign(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____content_0179e54f2f4fd4e331ed);
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0179e54f2f4b5630399a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_0179e54f2f4d621b7223, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____file_0179e54f2f4e4037de0f, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _File_ff021000000000000030                        );
db.assign(_instance_of_Runnable_Output____content_0179e54f2f4fd4e331ed, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893b331432e499   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003);
db.assign(_instance_of_Documentation_017b35893f1407ccb273   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____file_0179e54f2f4e4037de0f);
db.assign(_instance_of_Documentation_017b3589426f62cfaf08   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____content_0179e54f2f4fd4e331ed);
db.assign(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_0179e54f2f4b5630399a);
db.assign(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_0179e54f2f4d621b7223);
db.assign(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____file_0179e54f2f4e4037de0f);
db.assign(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____content_0179e54f2f4fd4e331ed);
db.assign(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b331432e499   );
db.assign(_instance_of_Runnable_Input____file_0179e54f2f4e4037de0f, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f1407ccb273   );
db.assign(_instance_of_Runnable_Output____content_0179e54f2f4fd4e331ed, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589426f62cfaf08   );
db.assignOptional(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003, _Object_gooRel_ff022000000000000003, _File_0179b2692921b321f99d);
db.assignOptional(_instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003, _GOO_parentGooRel_ff02200000000000000u, _File_0179b2692921b321f99d);
db.assignOptional(_File_0179b2692921b321f99d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003);
db.assignOptional(_File_0179b2692921b321f99d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Get_File_Content_0179e54f2f4c25c47003);