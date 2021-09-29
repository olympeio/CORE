
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Action_Call_0168c6f020f2a96a0000        = '0168c6f020f2a96a0000';
const _Ascender_01621fb84e32000000a0           = '01621fb84e32000000a0';
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Control_Flow_016ac63229782039429f       = '016ac63229782039429f';
const _Control_Flow_016ac6322acf67eebfe7       = '016ac6322acf67eebfe7';
const _Descender_01621fb84e32000000d0          = '01621fb84e32000000d0';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _File_ff021000000000000030               = 'ff021000000000000030';
const _Object_ff021000000000000001             = 'ff021000000000000001';
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
const _Ascender_Input_01621fb84e32000000a1          = '01621fb84e32000000a1';
const _Ascender_Upward_01621fb84e32000000a2         = '01621fb84e32000000a2';
const _Descender_Downward_01621fb84e32000000d1      = '01621fb84e32000000d1';
const _Descender_Output_01621fb84e32000000d2        = '01621fb84e32000000d2';
const _Documentation_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c = '01692a4af82e8984742c';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Control_Flow____Control_Flow_017bc1f1e7a4164ddeb8 = db.assignTag('017bc1f1e7a4164ddeb8');
const _instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d = db.assignTag('017bc1f1e7a4ea79e31d');
const _instance_of_Descender_017bc1f1e7a50392e7ff   = db.assignTag('017bc1f1e7a50392e7ff');
const _instance_of_Ascender_017bc1f1e7a539f25999    = db.assignTag('017bc1f1e7a539f25999');
const _instance_of_Runnable_Input____New_input_017bc1f1e7a56819625e = db.assignTag('017bc1f1e7a56819625e');
const _instance_of_Control_Flow____Control_Flow_017bc1f1e7a57e84e3ed = db.assignTag('017bc1f1e7a57e84e3ed');
const _instance_of_Runnable_Output____New_output_017bc1f1e7a58bd9373c = db.assignTag('017bc1f1e7a58bd9373c');
const _instance_of_Documentation_017bc1f28581e20a5185 = db.assignTag('017bc1f28581e20a5185');
const _instance_of_Runnable_Input____file_017bc1f3acbacbd9a95a = db.assignTag('017bc1f3acbacbd9a95a');
const _instance_of_Documentation_017bc1f3ace645f2bc77 = db.assignTag('017bc1f3ace645f2bc77');
const _instance_of_Runnable_Output____content_017bc1f3efd966bd175a = db.assignTag('017bc1f3efd966bd175a');
const _instance_of_Documentation_017bc1f3eff8fec8fcca = db.assignTag('017bc1f3eff8fec8fcca');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _File_0179b2692921b321f99d               = '0179b2692921b321f99d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d
db.newModel(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, 'Get Binary File Content') // tag and name of the model 
    .extends(_Action_Call_0168c6f020f2a96a0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get Binary File Content',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d);
// :_instance_of_Control_Flow____Control_Flow_017bc1f1e7a4164ddeb8
db.newInstance(_instance_of_Control_Flow____Control_Flow_017bc1f1e7a4164ddeb8)
    .setModelTag(_Control_Flow_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Descender_017bc1f1e7a50392e7ff
db.newInstance(_instance_of_Descender_017bc1f1e7a50392e7ff)
    .setModelTag(_Descender_01621fb84e32000000d0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Ascender_017bc1f1e7a539f25999
db.newInstance(_instance_of_Ascender_017bc1f1e7a539f25999)
    .setModelTag(_Ascender_01621fb84e32000000a0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____New_input_017bc1f1e7a56819625e
db.newInstance(_instance_of_Runnable_Input____New_input_017bc1f1e7a56819625e)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New input',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Control_Flow____Control_Flow_017bc1f1e7a57e84e3ed
db.newInstance(_instance_of_Control_Flow____Control_Flow_017bc1f1e7a57e84e3ed)
    .setModelTag(_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____New_output_017bc1f1e7a58bd9373c
db.newInstance(_instance_of_Runnable_Output____New_output_017bc1f1e7a58bd9373c)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New output',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017bc1f28581e20a5185
db.newInstance(_instance_of_Documentation_017bc1f28581e20a5185)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Return the binary content of the specified file as a plain JavaScript ArrayBuffer.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Get the content of a file as binary object.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____file_017bc1f3acbacbd9a95a
db.newInstance(_instance_of_Runnable_Input____file_017bc1f3acbacbd9a95a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'file',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017bc1f3ace645f2bc77
db.newInstance(_instance_of_Documentation_017bc1f3ace645f2bc77)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Input____file_017bc1f3acbacbd9a95a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The file to be read.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____content_017bc1f3efd966bd175a
db.newInstance(_instance_of_Runnable_Output____content_017bc1f3efd966bd175a)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'content',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017bc1f3eff8fec8fcca
db.newInstance(_instance_of_Documentation_017bc1f3eff8fec8fcca)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Output____content_017bc1f3efd966bd175a)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The file content as ArrayBuffer',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Ascender_017bc1f1e7a539f25999        , _Ascender_Input_01621fb84e32000000a1              , _instance_of_Runnable_Input____New_input_017bc1f1e7a56819625e);
db.assign(_instance_of_Ascender_017bc1f1e7a539f25999        , _Ascender_Upward_01621fb84e32000000a2             , _instance_of_Control_Flow____Control_Flow_017bc1f1e7a57e84e3ed);
db.assign(_instance_of_Descender_017bc1f1e7a50392e7ff       , _Descender_Downward_01621fb84e32000000d1          , _instance_of_Control_Flow____Control_Flow_017bc1f1e7a4164ddeb8);
db.assign(_instance_of_Descender_017bc1f1e7a50392e7ff       , _Descender_Output_01621fb84e32000000d2            , _instance_of_Runnable_Output____New_output_017bc1f1e7a58bd9373c);
db.assign(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Control_Flow____Control_Flow_017bc1f1e7a4164ddeb8);
db.assign(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____file_017bc1f3acbacbd9a95a);
db.assign(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Control_Flow____Control_Flow_017bc1f1e7a57e84e3ed);
db.assign(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____content_017bc1f3efd966bd175a);
db.assign(_instance_of_Control_Flow____Control_Flow_017bc1f1e7a4164ddeb8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____New_input_017bc1f1e7a56819625e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Control_Flow____Control_Flow_017bc1f1e7a57e84e3ed, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____New_output_017bc1f1e7a58bd9373c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____file_017bc1f3acbacbd9a95a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _File_ff021000000000000030                        );
db.assign(_instance_of_Runnable_Output____content_017bc1f3efd966bd175a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Descender_017bc1f1e7a50392e7ff       );
db.assign(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Ascender_017bc1f1e7a539f25999        );
db.assign(_instance_of_Documentation_017bc1f28581e20a5185   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d);
db.assign(_instance_of_Documentation_017bc1f3ace645f2bc77   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____file_017bc1f3acbacbd9a95a);
db.assign(_instance_of_Documentation_017bc1f3eff8fec8fcca   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____content_017bc1f3efd966bd175a);
db.assign(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017bc1f1e7a4164ddeb8);
db.assign(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017bc1f1e7a57e84e3ed);
db.assign(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017bc1f28581e20a5185   );
db.assign(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____file_017bc1f3acbacbd9a95a);
db.assign(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____content_017bc1f3efd966bd175a);
db.assign(_instance_of_Descender_017bc1f1e7a50392e7ff       , _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017bc1f1e7a4164ddeb8);
db.assign(_instance_of_Descender_017bc1f1e7a50392e7ff       , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____New_output_017bc1f1e7a58bd9373c);
db.assign(_instance_of_Ascender_017bc1f1e7a539f25999        , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____New_input_017bc1f1e7a56819625e);
db.assign(_instance_of_Ascender_017bc1f1e7a539f25999        , _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017bc1f1e7a57e84e3ed);
db.assign(_instance_of_Runnable_Input____file_017bc1f3acbacbd9a95a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017bc1f3ace645f2bc77   );
db.assign(_instance_of_Runnable_Output____content_017bc1f3efd966bd175a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017bc1f3eff8fec8fcca   );
db.assignOptional(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, _Object_gooRel_ff022000000000000003, _File_0179b2692921b321f99d);
db.assignOptional(_instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d, _GOO_parentGooRel_ff02200000000000000u, _File_0179b2692921b321f99d);
db.assignOptional(_File_0179b2692921b321f99d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d);
db.assignOptional(_File_0179b2692921b321f99d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Get_Binary_File_Content_017bc1f1e7a4ea79e31d);
