
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
const _instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004 = db.assignTag('016ca9ad1ca77d079004');
const _instance_of_Runnable_Input____url_016ca9ad1ca77d079005 = db.assignTag('016ca9ad1ca77d079005');
const _instance_of_Runnable_Input____headers_016ca9ad1ca77d079006 = db.assignTag('016ca9ad1ca77d079006');
const _instance_of_Runnable_Input____body_016ca9ad1ca77d079007 = db.assignTag('016ca9ad1ca77d079007');
const _instance_of_Runnable_Output____status_code_016ca9ad1ca77d079008 = db.assignTag('016ca9ad1ca77d079008');
const _instance_of_Runnable_Output____body_016ca9ad1ca77d079009 = db.assignTag('016ca9ad1ca77d079009');
const _instance_of_Runnable_Output____headers_016ca9ad1ca77d07900a = db.assignTag('016ca9ad1ca77d07900a');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca9ad1ca87d079004 = db.assignTag('016ca9ad1ca87d079004');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_016ca9ad1ca97d079004 = db.assignTag('016ca9ad1ca97d079004');
const _instance_of_Runnable_Output____Error_Flow_0171c67ff93f828e6215 = db.assignTag('0171c67ff93f828e6215');
const _instance_of_Documentation_017b35893ba9872efd68 = db.assignTag('017b35893ba9872efd68');
const _instance_of_Documentation_017b35893fc1e53ac14a = db.assignTag('017b35893fc1e53ac14a');
const _instance_of_Documentation_017b35893fc25cca5e36 = db.assignTag('017b35893fc25cca5e36');
const _instance_of_Documentation_017b35893fc2642d5b7b = db.assignTag('017b35893fc2642d5b7b');
const _instance_of_Documentation_017b35a693c329142d37 = db.assignTag('017b35a693c329142d37');
const _instance_of_Documentation_017b35a693da002c4d30 = db.assignTag('017b35a693da002c4d30');
const _instance_of_Documentation_017b35a693df3595a3dc = db.assignTag('017b35a693df3595a3dc');
const _instance_of_Documentation_017b35a693e56613b357 = db.assignTag('017b35a693e56613b357');
const _instance_of_Documentation_017b35a693ecf7d8bd0f = db.assignTag('017b35a693ecf7d8bd0f');
const _instance_of_Documentation_017b35a693f2c8fbd76a = db.assignTag('017b35a693f2c8fbd76a');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _HTTP_Actions_0179b269940cee14a13d       = '0179b269940cee14a13d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004
db.newModel(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, 'HTTP Patch') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'HTTP Patch',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004);
// :_instance_of_Runnable_Input____url_016ca9ad1ca77d079005
db.newInstance(_instance_of_Runnable_Input____url_016ca9ad1ca77d079005)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'url',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____headers_016ca9ad1ca77d079006
db.newInstance(_instance_of_Runnable_Input____headers_016ca9ad1ca77d079006)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:'{}',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____body_016ca9ad1ca77d079007
db.newInstance(_instance_of_Runnable_Input____body_016ca9ad1ca77d079007)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____status_code_016ca9ad1ca77d079008
db.newInstance(_instance_of_Runnable_Output____status_code_016ca9ad1ca77d079008)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'status code',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____body_016ca9ad1ca77d079009
db.newInstance(_instance_of_Runnable_Output____body_016ca9ad1ca77d079009)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____headers_016ca9ad1ca77d07900a
db.newInstance(_instance_of_Runnable_Output____headers_016ca9ad1ca77d07900a)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:4,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca9ad1ca87d079004
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca9ad1ca87d079004)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_016ca9ad1ca97d079004
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_016ca9ad1ca97d079004)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_0171c67ff93f828e6215
db.newInstance(_instance_of_Runnable_Output____Error_Flow_0171c67ff93f828e6215)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ba9872efd68
db.newInstance(_instance_of_Documentation_017b35893ba9872efd68)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Sends an HTTP PATCH request to the specified URL and provide the results.\n\nThe HTTP PATCH request method applies partial modifications to a resource.\nThe HTTP PUT method only allows complete replacement of a document. Unlike PUT, PATCH is not idempotent, meaning\nsuccessive identical patch requests may have different effects. However, it is possible to issue PATCH requests in\nsuch a way as to be idempotent.\n\nAdditional headers can be provided and returned in a string that has to be in JSON format.\n\n**Example:** \'{"Content-Type": "text/html; charset=UTF-8", "Content-Length": 1024 }\'\n\nThe returned body is formatted depending on the mimeType received in the headers : as an UTF-8 string for common text content (text/html, application/json, ...), and as a base64 string for all other contents.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Perform an HTTP PATCH request.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc1e53ac14a
db.newInstance(_instance_of_Documentation_017b35893fc1e53ac14a)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The URL to query.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc25cca5e36
db.newInstance(_instance_of_Documentation_017b35893fc25cca5e36)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The body of the request.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc2642d5b7b
db.newInstance(_instance_of_Documentation_017b35893fc2642d5b7b)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Optional HTTP headers in a JSON parsable string.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a693c329142d37
db.newInstance(_instance_of_Documentation_017b35a693c329142d37)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a693da002c4d30
db.newInstance(_instance_of_Documentation_017b35a693da002c4d30)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a693df3595a3dc
db.newInstance(_instance_of_Documentation_017b35a693df3595a3dc)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Triggered if an error occurs.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a693e56613b357
db.newInstance(_instance_of_Documentation_017b35a693e56613b357)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The response status code.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a693ecf7d8bd0f
db.newInstance(_instance_of_Documentation_017b35a693ecf7d8bd0f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The body (i.e. the content) of the response.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a693f2c8fbd76a
db.newInstance(_instance_of_Documentation_017b35a693f2c8fbd76a)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The response headers.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____url_016ca9ad1ca77d079005);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____headers_016ca9ad1ca77d079006);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____body_016ca9ad1ca77d079007);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca9ad1ca87d079004);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____status_code_016ca9ad1ca77d079008);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____body_016ca9ad1ca77d079009);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____headers_016ca9ad1ca77d07900a);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_016ca9ad1ca97d079004);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_0171c67ff93f828e6215);
db.assign(_instance_of_Runnable_Input____url_016ca9ad1ca77d079005, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____headers_016ca9ad1ca77d079006, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____body_016ca9ad1ca77d079007, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____status_code_016ca9ad1ca77d079008, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____body_016ca9ad1ca77d079009, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____headers_016ca9ad1ca77d07900a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca9ad1ca87d079004, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_016ca9ad1ca97d079004, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____Error_Flow_0171c67ff93f828e6215, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Documentation_017b35893ba9872efd68   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004);
db.assign(_instance_of_Documentation_017b35893fc1e53ac14a   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____url_016ca9ad1ca77d079005);
db.assign(_instance_of_Documentation_017b35893fc25cca5e36   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____body_016ca9ad1ca77d079007);
db.assign(_instance_of_Documentation_017b35893fc2642d5b7b   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____headers_016ca9ad1ca77d079006);
db.assign(_instance_of_Documentation_017b35a693c329142d37   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca9ad1ca87d079004);
db.assign(_instance_of_Documentation_017b35a693da002c4d30   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Predefined_output_Control_Flow____Control_Flow_016ca9ad1ca97d079004);
db.assign(_instance_of_Documentation_017b35a693df3595a3dc   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Error_Flow_0171c67ff93f828e6215);
db.assign(_instance_of_Documentation_017b35a693e56613b357   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____status_code_016ca9ad1ca77d079008);
db.assign(_instance_of_Documentation_017b35a693ecf7d8bd0f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____body_016ca9ad1ca77d079009);
db.assign(_instance_of_Documentation_017b35a693f2c8fbd76a   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____headers_016ca9ad1ca77d07900a);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____url_016ca9ad1ca77d079005);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____headers_016ca9ad1ca77d079006);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____body_016ca9ad1ca77d079007);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____status_code_016ca9ad1ca77d079008);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____body_016ca9ad1ca77d079009);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____headers_016ca9ad1ca77d07900a);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca9ad1ca87d079004);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_016ca9ad1ca97d079004);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_0171c67ff93f828e6215);
db.assign(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ba9872efd68   );
db.assign(_instance_of_Runnable_Input____url_016ca9ad1ca77d079005, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc1e53ac14a   );
db.assign(_instance_of_Runnable_Input____headers_016ca9ad1ca77d079006, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc2642d5b7b   );
db.assign(_instance_of_Runnable_Input____body_016ca9ad1ca77d079007, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc25cca5e36   );
db.assign(_instance_of_Runnable_Output____status_code_016ca9ad1ca77d079008, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a693e56613b357   );
db.assign(_instance_of_Runnable_Output____body_016ca9ad1ca77d079009, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a693ecf7d8bd0f   );
db.assign(_instance_of_Runnable_Output____headers_016ca9ad1ca77d07900a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a693f2c8fbd76a   );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca9ad1ca87d079004, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a693c329142d37   );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_016ca9ad1ca97d079004, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a693da002c4d30   );
db.assign(_instance_of_Runnable_Output____Error_Flow_0171c67ff93f828e6215, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a693df3595a3dc   );
db.assignOptional(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _Object_gooRel_ff022000000000000003, _HTTP_Actions_0179b269940cee14a13d);
db.assignOptional(_instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004, _GOO_parentGooRel_ff02200000000000000u, _HTTP_Actions_0179b269940cee14a13d);
db.assignOptional(_HTTP_Actions_0179b269940cee14a13d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004);
db.assignOptional(_HTTP_Actions_0179b269940cee14a13d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____HTTP_Patch_016ca9ad1ca77d079004);
