
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
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
const _instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82 = db.assignTag('017821d939590a41cc82');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017821d93959b0b7caa9 = db.assignTag('017821d93959b0b7caa9');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_017821d9395a4665b49d = db.assignTag('017821d9395a4665b49d');
const _instance_of_Runnable_Input____base64_content_017821d996a37e4b7ab0 = db.assignTag('017821d996a37e4b7ab0');
const _instance_of_Runnable_Input____file_name_017821d9c583bdc0e682 = db.assignTag('017821d9c583bdc0e682');
const _instance_of_Runnable_Input____mime_type_017821d9d4cecc99b339 = db.assignTag('017821d9d4cecc99b339');
const _instance_of_Runnable_Output____file_017821d9ed1bddef0d35 = db.assignTag('017821d9ed1bddef0d35');
const _instance_of_Runnable_Output____Error_Flow_017821da47ae4f09babd = db.assignTag('017821da47ae4f09babd');
const _instance_of_Documentation_017b35893b33d8586f9c = db.assignTag('017b35893b33d8586f9c');
const _instance_of_Documentation_017b35893f1255cc84dd = db.assignTag('017b35893f1255cc84dd');
const _instance_of_Documentation_017b35893f136ce009db = db.assignTag('017b35893f136ce009db');
const _instance_of_Documentation_017b35893f14caa095d0 = db.assignTag('017b35893f14caa095d0');
const _instance_of_Documentation_017b3589426e96558061 = db.assignTag('017b3589426e96558061');
const _instance_of_Documentation_017b35894403454f2667 = db.assignTag('017b35894403454f2667');
const _instance_of_Documentation_017b359ffd16a9b4a3e1 = db.assignTag('017b359ffd16a9b4a3e1');
const _instance_of_Documentation_017b359ffd3ce2b63882 = db.assignTag('017b359ffd3ce2b63882');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _File_0179b2692921b321f99d               = '0179b2692921b321f99d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82
db.newModel(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, 'Create File From Base64') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Create File From Base64',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82);
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017821d93959b0b7caa9
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017821d93959b0b7caa9)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_017821d9395a4665b49d
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_017821d9395a4665b49d)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____base64_content_017821d996a37e4b7ab0
db.newInstance(_instance_of_Runnable_Input____base64_content_017821d996a37e4b7ab0)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'base64 content',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____file_name_017821d9c583bdc0e682
db.newInstance(_instance_of_Runnable_Input____file_name_017821d9c583bdc0e682)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'file name',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____mime_type_017821d9d4cecc99b339
db.newInstance(_instance_of_Runnable_Input____mime_type_017821d9d4cecc99b339)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'mime type',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____file_017821d9ed1bddef0d35
db.newInstance(_instance_of_Runnable_Output____file_017821d9ed1bddef0d35)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'file',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_017821da47ae4f09babd
db.newInstance(_instance_of_Runnable_Output____Error_Flow_017821da47ae4f09babd)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b33d8586f9c
db.newInstance(_instance_of_Documentation_017b35893b33d8586f9c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'This is a shorthand function which is equivalent to (and more efficient than) plugging `Base64 Decoder` into `Create File`.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Creates a file based from a Base64 content.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f1255cc84dd
db.newInstance(_instance_of_Documentation_017b35893f1255cc84dd)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Content to put in the file, in Base64 format.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f136ce009db
db.newInstance(_instance_of_Documentation_017b35893f136ce009db)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The name for the created file.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f14caa095d0
db.newInstance(_instance_of_Documentation_017b35893f14caa095d0)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'MIME type of the file.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589426e96558061
db.newInstance(_instance_of_Documentation_017b3589426e96558061)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The created file.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35894403454f2667
db.newInstance(_instance_of_Documentation_017b35894403454f2667)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Triggered if an error occurs upon creating the file.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b359ffd16a9b4a3e1
db.newInstance(_instance_of_Documentation_017b359ffd16a9b4a3e1)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b359ffd3ce2b63882
db.newInstance(_instance_of_Documentation_017b359ffd3ce2b63882)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017821d93959b0b7caa9);
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____base64_content_017821d996a37e4b7ab0);
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____file_name_017821d9c583bdc0e682);
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____mime_type_017821d9d4cecc99b339);
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_017821d9395a4665b49d);
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____file_017821d9ed1bddef0d35);
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_017821da47ae4f09babd);
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017821d93959b0b7caa9, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_017821d9395a4665b49d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____base64_content_017821d996a37e4b7ab0, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____file_name_017821d9c583bdc0e682, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____mime_type_017821d9d4cecc99b339, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____file_017821d9ed1bddef0d35, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _File_ff021000000000000030                        );
db.assign(_instance_of_Runnable_Output____Error_Flow_017821da47ae4f09babd, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Documentation_017b35893b33d8586f9c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82);
db.assign(_instance_of_Documentation_017b35893f1255cc84dd   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____base64_content_017821d996a37e4b7ab0);
db.assign(_instance_of_Documentation_017b35893f136ce009db   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____file_name_017821d9c583bdc0e682);
db.assign(_instance_of_Documentation_017b35893f14caa095d0   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____mime_type_017821d9d4cecc99b339);
db.assign(_instance_of_Documentation_017b3589426e96558061   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____file_017821d9ed1bddef0d35);
db.assign(_instance_of_Documentation_017b35894403454f2667   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Error_Flow_017821da47ae4f09babd);
db.assign(_instance_of_Documentation_017b359ffd16a9b4a3e1   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017821d93959b0b7caa9);
db.assign(_instance_of_Documentation_017b359ffd3ce2b63882   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_output_Control_Flow____Control_Flow_017821d9395a4665b49d);
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017821d93959b0b7caa9);
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_017821d9395a4665b49d);
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____base64_content_017821d996a37e4b7ab0);
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____file_name_017821d9c583bdc0e682);
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____mime_type_017821d9d4cecc99b339);
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____file_017821d9ed1bddef0d35);
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_017821da47ae4f09babd);
db.assign(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b33d8586f9c   );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_017821d93959b0b7caa9, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b359ffd16a9b4a3e1   );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_017821d9395a4665b49d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b359ffd3ce2b63882   );
db.assign(_instance_of_Runnable_Input____base64_content_017821d996a37e4b7ab0, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f1255cc84dd   );
db.assign(_instance_of_Runnable_Input____file_name_017821d9c583bdc0e682, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f136ce009db   );
db.assign(_instance_of_Runnable_Input____mime_type_017821d9d4cecc99b339, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f14caa095d0   );
db.assign(_instance_of_Runnable_Output____file_017821d9ed1bddef0d35, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589426e96558061   );
db.assign(_instance_of_Runnable_Output____Error_Flow_017821da47ae4f09babd, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35894403454f2667   );
db.assignOptional(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _Object_gooRel_ff022000000000000003, _File_0179b2692921b321f99d);
db.assignOptional(_instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82, _GOO_parentGooRel_ff02200000000000000u, _File_0179b2692921b321f99d);
db.assignOptional(_File_0179b2692921b321f99d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82);
db.assignOptional(_File_0179b2692921b321f99d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Create_File_From_Base64_017821d939590a41cc82);
