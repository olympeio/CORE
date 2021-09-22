
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


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
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
const _File_ff021000000000000030               = 'ff021000000000000030';
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
const _instance_of_Control_Flow____Control_Flow_017bc1ea3fad1a963bb1 = db.assignTag('017bc1ea3fad1a963bb1');
const _instance_of_Descender_017bc1ea3fad64b271f1   = db.assignTag('017bc1ea3fad64b271f1');
const _instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc = db.assignTag('017bc1ea3fad868319fc');
const _instance_of_Runnable_Output____New_output_017bc1ea3fada5a11bb7 = db.assignTag('017bc1ea3fada5a11bb7');
const _instance_of_Runnable_Input____New_input_017bc1ea3fae77f4293a = db.assignTag('017bc1ea3fae77f4293a');
const _instance_of_Control_Flow____Control_Flow_017bc1ea3fae7a2aa376 = db.assignTag('017bc1ea3fae7a2aa376');
const _instance_of_Ascender_017bc1ea3fae90fd429e    = db.assignTag('017bc1ea3fae90fd429e');
const _instance_of_Documentation_017bc1ea636f43f03d98 = db.assignTag('017bc1ea636f43f03d98');
const _instance_of_Runnable_Input____file_name_017bc1ec149076f34b00 = db.assignTag('017bc1ec149076f34b00');
const _instance_of_Documentation_017bc1ec14c405788b82 = db.assignTag('017bc1ec14c405788b82');
const _instance_of_Runnable_Input____mime_type_017bc1ec6516981ee454 = db.assignTag('017bc1ec6516981ee454');
const _instance_of_Documentation_017bc1ec6540e87ec3cf = db.assignTag('017bc1ec6540e87ec3cf');
const _instance_of_Runnable_Input____url_017bc1eca9f22374bf45 = db.assignTag('017bc1eca9f22374bf45');
const _instance_of_Documentation_017bc1ecaa1c19e50f13 = db.assignTag('017bc1ecaa1c19e50f13');
const _instance_of_Runnable_Output____file_017bc1eda4a83c69668b = db.assignTag('017bc1eda4a83c69668b');
const _instance_of_Documentation_017bc1eda4cc8f871f50 = db.assignTag('017bc1eda4cc8f871f50');
const _instance_of_Runnable_Output____error_flow_017bc1eec62a3cd0002e = db.assignTag('017bc1eec62a3cd0002e');
const _instance_of_Documentation_017bc1eec64dc728c79b = db.assignTag('017bc1eec64dc728c79b');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _File_0179b2692921b321f99d               = '0179b2692921b321f99d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc
db.newModel(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, 'Create File From URL') // tag and name of the model
    .extends(_Action_Call_0168c6f020f2a96a0000).setModelTag(_Coded_Action_01621fb84e320000f012)
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Create File From URL',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc);
// :_instance_of_Control_Flow____Control_Flow_017bc1ea3fad1a963bb1
db.newInstance(_instance_of_Control_Flow____Control_Flow_017bc1ea3fad1a963bb1)
    .setModelTag(_Control_Flow_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Descender_017bc1ea3fad64b271f1
db.newInstance(_instance_of_Descender_017bc1ea3fad64b271f1)
    .setModelTag(_Descender_01621fb84e32000000d0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____New_output_017bc1ea3fada5a11bb7
db.newInstance(_instance_of_Runnable_Output____New_output_017bc1ea3fada5a11bb7)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New output',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____New_input_017bc1ea3fae77f4293a
db.newInstance(_instance_of_Runnable_Input____New_input_017bc1ea3fae77f4293a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'New input',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Control_Flow____Control_Flow_017bc1ea3fae7a2aa376
db.newInstance(_instance_of_Control_Flow____Control_Flow_017bc1ea3fae7a2aa376)
    .setModelTag(_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Ascender_017bc1ea3fae90fd429e
db.newInstance(_instance_of_Ascender_017bc1ea3fae90fd429e)
    .setModelTag(_Ascender_01621fb84e32000000a0) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017bc1ea636f43f03d98
db.newInstance(_instance_of_Documentation_017bc1ea636f43f03d98)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Create a new file instance in the local database which references a remote file. The file content is therefore not stored locally, but it is remotely available through the specified external URL.\n\nThe newly created file is not persisted. Use the brick `Persist Object` to do so.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Create a file object with a distant content based on a URL.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____file_name_017bc1ec149076f34b00
db.newInstance(_instance_of_Runnable_Input____file_name_017bc1ec149076f34b00)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'file name',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017bc1ec14c405788b82
db.newInstance(_instance_of_Documentation_017bc1ec14c405788b82)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Input____file_name_017bc1ec149076f34b00)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The name for the created file.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____mime_type_017bc1ec6516981ee454
db.newInstance(_instance_of_Runnable_Input____mime_type_017bc1ec6516981ee454)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'mime type',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017bc1ec6540e87ec3cf
db.newInstance(_instance_of_Documentation_017bc1ec6540e87ec3cf)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Input____mime_type_017bc1ec6516981ee454)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The MIME type of the file.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____url_017bc1eca9f22374bf45
db.newInstance(_instance_of_Runnable_Input____url_017bc1eca9f22374bf45)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'url',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017bc1ecaa1c19e50f13
db.newInstance(_instance_of_Documentation_017bc1ecaa1c19e50f13)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Input____url_017bc1eca9f22374bf45)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The URL where the file is located (max 2058 characters).',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____file_017bc1eda4a83c69668b
db.newInstance(_instance_of_Runnable_Output____file_017bc1eda4a83c69668b)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'file',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017bc1eda4cc8f871f50
db.newInstance(_instance_of_Documentation_017bc1eda4cc8f871f50)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Output____file_017bc1eda4a83c69668b)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The newly created file',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____error_flow_017bc1eec62a3cd0002e
db.newInstance(_instance_of_Runnable_Output____error_flow_017bc1eec62a3cd0002e)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'error flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017bc1eec64dc728c79b
db.newInstance(_instance_of_Documentation_017bc1eec64dc728c79b)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Runnable_Output____error_flow_017bc1eec62a3cd0002e)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Triggered if an error occurs upon creating the file.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Ascender_017bc1ea3fae90fd429e        , _Ascender_Input_01621fb84e32000000a1              , _instance_of_Runnable_Input____New_input_017bc1ea3fae77f4293a);
db.assign(_instance_of_Ascender_017bc1ea3fae90fd429e        , _Ascender_Upward_01621fb84e32000000a2             , _instance_of_Control_Flow____Control_Flow_017bc1ea3fae7a2aa376);
db.assign(_instance_of_Descender_017bc1ea3fad64b271f1       , _Descender_Downward_01621fb84e32000000d1          , _instance_of_Control_Flow____Control_Flow_017bc1ea3fad1a963bb1);
db.assign(_instance_of_Descender_017bc1ea3fad64b271f1       , _Descender_Output_01621fb84e32000000d2            , _instance_of_Runnable_Output____New_output_017bc1ea3fada5a11bb7);
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Control_Flow____Control_Flow_017bc1ea3fad1a963bb1);
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____file_name_017bc1ec149076f34b00);
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____mime_type_017bc1ec6516981ee454);
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____url_017bc1eca9f22374bf45);
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Control_Flow____Control_Flow_017bc1ea3fae7a2aa376);
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____file_017bc1eda4a83c69668b);
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____error_flow_017bc1eec62a3cd0002e);
db.assign(_instance_of_Control_Flow____Control_Flow_017bc1ea3fad1a963bb1, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____New_output_017bc1ea3fada5a11bb7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____New_input_017bc1ea3fae77f4293a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Control_Flow____Control_Flow_017bc1ea3fae7a2aa376, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____file_name_017bc1ec149076f34b00, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____mime_type_017bc1ec6516981ee454, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____url_017bc1eca9f22374bf45, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____file_017bc1eda4a83c69668b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _File_ff021000000000000030                      );
db.assign(_instance_of_Runnable_Output____error_flow_017bc1eec62a3cd0002e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Descender_017bc1ea3fad64b271f1       );
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Runnable_Definition_Calls_Runnable_01692a4af82e8984742c, _instance_of_Ascender_017bc1ea3fae90fd429e        );
db.assign(_instance_of_Documentation_017bc1ea636f43f03d98   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc);
db.assign(_instance_of_Documentation_017bc1ec14c405788b82   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____file_name_017bc1ec149076f34b00);
db.assign(_instance_of_Documentation_017bc1ec6540e87ec3cf   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____mime_type_017bc1ec6516981ee454);
db.assign(_instance_of_Documentation_017bc1ecaa1c19e50f13   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____url_017bc1eca9f22374bf45);
db.assign(_instance_of_Documentation_017bc1eda4cc8f871f50   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____file_017bc1eda4a83c69668b);
db.assign(_instance_of_Documentation_017bc1eec64dc728c79b   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____error_flow_017bc1eec62a3cd0002e);
db.assign(_instance_of_Descender_017bc1ea3fad64b271f1       , _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017bc1ea3fad1a963bb1);
db.assign(_instance_of_Descender_017bc1ea3fad64b271f1       , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____New_output_017bc1ea3fada5a11bb7);
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017bc1ea3fad1a963bb1);
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017bc1ea3fae7a2aa376);
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017bc1ea636f43f03d98   );
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____file_name_017bc1ec149076f34b00);
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____mime_type_017bc1ec6516981ee454);
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____url_017bc1eca9f22374bf45);
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____file_017bc1eda4a83c69668b);
db.assign(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____error_flow_017bc1eec62a3cd0002e);
db.assign(_instance_of_Ascender_017bc1ea3fae90fd429e        , _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____New_input_017bc1ea3fae77f4293a);
db.assign(_instance_of_Ascender_017bc1ea3fae90fd429e        , _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_017bc1ea3fae7a2aa376);
db.assign(_instance_of_Runnable_Input____file_name_017bc1ec149076f34b00, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017bc1ec14c405788b82   );
db.assign(_instance_of_Runnable_Input____mime_type_017bc1ec6516981ee454, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017bc1ec6540e87ec3cf   );
db.assign(_instance_of_Runnable_Input____url_017bc1eca9f22374bf45, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017bc1ecaa1c19e50f13   );
db.assign(_instance_of_Runnable_Output____file_017bc1eda4a83c69668b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017bc1eda4cc8f871f50   );
db.assign(_instance_of_Runnable_Output____error_flow_017bc1eec62a3cd0002e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017bc1eec64dc728c79b   );
db.assignOptional(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _Object_gooRel_ff022000000000000003, _File_0179b2692921b321f99d);
db.assignOptional(_instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc, _GOO_parentGooRel_ff02200000000000000u, _File_0179b2692921b321f99d);
db.assignOptional(_File_0179b2692921b321f99d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc);
db.assignOptional(_File_0179b2692921b321f99d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Create_File_From_URL_017bc1ea3fad868319fc);
