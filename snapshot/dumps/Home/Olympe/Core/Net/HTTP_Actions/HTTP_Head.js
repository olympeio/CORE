
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
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
const _instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06 = db.assignTag('016ca991840e26d08a06');
const _instance_of_Runnable_Input____url_016ca991840e26d08a07 = db.assignTag('016ca991840e26d08a07');
const _instance_of_Runnable_Input____headers_016ca991840e26d08a08 = db.assignTag('016ca991840e26d08a08');
const _instance_of_Runnable_Output____status_code_016ca991840e26d08a0a = db.assignTag('016ca991840e26d08a0a');
const _instance_of_Runnable_Output____headers_016ca991840e26d08a0b = db.assignTag('016ca991840e26d08a0b');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca991840f26d08a06 = db.assignTag('016ca991840f26d08a06');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_016ca991841026d08a06 = db.assignTag('016ca991841026d08a06');
const _instance_of_Runnable_Output____Error_Flow_0171c67e6723351010a9 = db.assignTag('0171c67e6723351010a9');
const _instance_of_Documentation_017b35893babf0a647ca = db.assignTag('017b35893babf0a647ca');
const _instance_of_Documentation_017b35893fc4a0fc4615 = db.assignTag('017b35893fc4a0fc4615');
const _instance_of_Documentation_017b35893fc5183f58a4 = db.assignTag('017b35893fc5183f58a4');
const _instance_of_Documentation_017b35a7b3b9a28c4566 = db.assignTag('017b35a7b3b9a28c4566');
const _instance_of_Documentation_017b35a7b3cf0386bd23 = db.assignTag('017b35a7b3cf0386bd23');
const _instance_of_Documentation_017b35a7b3da83767f24 = db.assignTag('017b35a7b3da83767f24');
const _instance_of_Documentation_017b35a7b3e225cae0e1 = db.assignTag('017b35a7b3e225cae0e1');
const _instance_of_Documentation_017b35a7b3ebb10a465d = db.assignTag('017b35a7b3ebb10a465d');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _HTTP_Actions_0179b269940cee14a13d       = '0179b269940cee14a13d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06
db.newModel(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, 'HTTP Head') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'HTTP Head',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06);
// :_instance_of_Runnable_Input____url_016ca991840e26d08a07
db.newInstance(_instance_of_Runnable_Input____url_016ca991840e26d08a07)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'url',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____headers_016ca991840e26d08a08
db.newInstance(_instance_of_Runnable_Input____headers_016ca991840e26d08a08)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:'{}',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____status_code_016ca991840e26d08a0a
db.newInstance(_instance_of_Runnable_Output____status_code_016ca991840e26d08a0a)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'status code',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____headers_016ca991840e26d08a0b
db.newInstance(_instance_of_Runnable_Output____headers_016ca991840e26d08a0b)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca991840f26d08a06
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca991840f26d08a06)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_016ca991841026d08a06
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_016ca991841026d08a06)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_0171c67e6723351010a9
db.newInstance(_instance_of_Runnable_Output____Error_Flow_0171c67e6723351010a9)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893babf0a647ca
db.newInstance(_instance_of_Documentation_017b35893babf0a647ca)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Sends an HTTP HEAD request to the specified URL and provide the results.\n\nAdditional headers can be provided and returned in a string that has to be in JSON format.\n\n**Example:** \'{"Content-Type": "text/html; charset=UTF-8", "Content-Length": 1024 }\'\n',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Perform an HTTP HEAD request.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc4a0fc4615
db.newInstance(_instance_of_Documentation_017b35893fc4a0fc4615)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The URL to query.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc5183f58a4
db.newInstance(_instance_of_Documentation_017b35893fc5183f58a4)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Optional HTTP headers in a JSON parsable string.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a7b3b9a28c4566
db.newInstance(_instance_of_Documentation_017b35a7b3b9a28c4566)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a7b3cf0386bd23
db.newInstance(_instance_of_Documentation_017b35a7b3cf0386bd23)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a7b3da83767f24
db.newInstance(_instance_of_Documentation_017b35a7b3da83767f24)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Triggered if an error occurs.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a7b3e225cae0e1
db.newInstance(_instance_of_Documentation_017b35a7b3e225cae0e1)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The response status code.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a7b3ebb10a465d
db.newInstance(_instance_of_Documentation_017b35a7b3ebb10a465d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The response headers.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____url_016ca991840e26d08a07);
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____headers_016ca991840e26d08a08);
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca991840f26d08a06);
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____status_code_016ca991840e26d08a0a);
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____headers_016ca991840e26d08a0b);
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_016ca991841026d08a06);
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_0171c67e6723351010a9);
db.assign(_instance_of_Runnable_Input____url_016ca991840e26d08a07, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____headers_016ca991840e26d08a08, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____status_code_016ca991840e26d08a0a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____headers_016ca991840e26d08a0b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca991840f26d08a06, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_016ca991841026d08a06, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____Error_Flow_0171c67e6723351010a9, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Documentation_017b35893babf0a647ca   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06);
db.assign(_instance_of_Documentation_017b35893fc4a0fc4615   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____url_016ca991840e26d08a07);
db.assign(_instance_of_Documentation_017b35893fc5183f58a4   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____headers_016ca991840e26d08a08);
db.assign(_instance_of_Documentation_017b35a7b3b9a28c4566   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca991840f26d08a06);
db.assign(_instance_of_Documentation_017b35a7b3cf0386bd23   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_output_Control_Flow____Control_Flow_016ca991841026d08a06);
db.assign(_instance_of_Documentation_017b35a7b3da83767f24   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Error_Flow_0171c67e6723351010a9);
db.assign(_instance_of_Documentation_017b35a7b3e225cae0e1   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____status_code_016ca991840e26d08a0a);
db.assign(_instance_of_Documentation_017b35a7b3ebb10a465d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____headers_016ca991840e26d08a0b);
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____url_016ca991840e26d08a07);
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____headers_016ca991840e26d08a08);
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____status_code_016ca991840e26d08a0a);
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____headers_016ca991840e26d08a0b);
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca991840f26d08a06);
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_016ca991841026d08a06);
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_0171c67e6723351010a9);
db.assign(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893babf0a647ca   );
db.assign(_instance_of_Runnable_Input____url_016ca991840e26d08a07, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc4a0fc4615   );
db.assign(_instance_of_Runnable_Input____headers_016ca991840e26d08a08, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc5183f58a4   );
db.assign(_instance_of_Runnable_Output____status_code_016ca991840e26d08a0a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a7b3e225cae0e1   );
db.assign(_instance_of_Runnable_Output____headers_016ca991840e26d08a0b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a7b3ebb10a465d   );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca991840f26d08a06, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a7b3b9a28c4566   );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_016ca991841026d08a06, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a7b3cf0386bd23   );
db.assign(_instance_of_Runnable_Output____Error_Flow_0171c67e6723351010a9, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a7b3da83767f24   );
db.assignOptional(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _Object_gooRel_ff022000000000000003, _HTTP_Actions_0179b269940cee14a13d);
db.assignOptional(_instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06, _GOO_parentGooRel_ff02200000000000000u, _HTTP_Actions_0179b269940cee14a13d);
db.assignOptional(_HTTP_Actions_0179b269940cee14a13d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06);
db.assignOptional(_HTTP_Actions_0179b269940cee14a13d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____HTTP_Head_016ca991840e26d08a06);
