
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Control_Flow_016ac63229782039429f       = '016ac63229782039429f';
const _Control_Flow_016ac6322acf67eebfe7       = '016ac6322acf67eebfe7';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
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
const _instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6 = db.assignTag('0162e32e14d4a05194e6');
const _instance_of_Control_Flow____Control_Flow_0162e32e14d5a05194e6 = db.assignTag('0162e32e14d5a05194e6');
const _instance_of_Control_Flow____Control_Flow_0162e32e14d6a05194e6 = db.assignTag('0162e32e14d6a05194e6');
const _instance_of_Runnable_Input____url_0162e32ebf6613c0a015 = db.assignTag('0162e32ebf6613c0a015');
const _instance_of_Runnable_Output____body_0162e32ec3bef28cfcfa = db.assignTag('0162e32ec3bef28cfcfa');
const _instance_of_Runnable_Input____headers_016ca90dbec748971536 = db.assignTag('016ca90dbec748971536');
const _instance_of_Runnable_Output____status_code_016ca90dbec748971537 = db.assignTag('016ca90dbec748971537');
const _instance_of_Runnable_Output____headers_016ca90dbec748971539 = db.assignTag('016ca90dbec748971539');
const _instance_of_Runnable_Output____Error_Flow_0171c67b7da90f49e205 = db.assignTag('0171c67b7da90f49e205');
const _instance_of_Documentation_017b35893ba9229f6e95 = db.assignTag('017b35893ba9229f6e95');
const _instance_of_Documentation_017b35893fc26a8db923 = db.assignTag('017b35893fc26a8db923');
const _instance_of_Documentation_017b35893fc3b14f3365 = db.assignTag('017b35893fc3b14f3365');
const _instance_of_Documentation_017b35a71d9fd42e7d82 = db.assignTag('017b35a71d9fd42e7d82');
const _instance_of_Documentation_017b35a71db6b69f7648 = db.assignTag('017b35a71db6b69f7648');
const _instance_of_Documentation_017b35a71dbc7ed42d20 = db.assignTag('017b35a71dbc7ed42d20');
const _instance_of_Documentation_017b35a71dc25106faf3 = db.assignTag('017b35a71dc25106faf3');
const _instance_of_Documentation_017b35a71dcaeb2aa3c8 = db.assignTag('017b35a71dcaeb2aa3c8');
const _instance_of_Documentation_017b35a71dd1bdf4d799 = db.assignTag('017b35a71dd1bdf4d799');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _HTTP_Actions_0179b269940cee14a13d       = '0179b269940cee14a13d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6
db.newModel(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, 'HTTP Get') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'HTTP Get',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6);
// :_instance_of_Control_Flow____Control_Flow_0162e32e14d5a05194e6
db.newInstance(_instance_of_Control_Flow____Control_Flow_0162e32e14d5a05194e6)
    .setModelTag(_Control_Flow_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Control_Flow____Control_Flow_0162e32e14d6a05194e6
db.newInstance(_instance_of_Control_Flow____Control_Flow_0162e32e14d6a05194e6)
    .setModelTag(_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____url_0162e32ebf6613c0a015
db.newInstance(_instance_of_Runnable_Input____url_0162e32ebf6613c0a015)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'url',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____body_0162e32ec3bef28cfcfa
db.newInstance(_instance_of_Runnable_Output____body_0162e32ec3bef28cfcfa)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____headers_016ca90dbec748971536
db.newInstance(_instance_of_Runnable_Input____headers_016ca90dbec748971536)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:'{}',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____status_code_016ca90dbec748971537
db.newInstance(_instance_of_Runnable_Output____status_code_016ca90dbec748971537)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'status code',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____headers_016ca90dbec748971539
db.newInstance(_instance_of_Runnable_Output____headers_016ca90dbec748971539)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:4,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_0171c67b7da90f49e205
db.newInstance(_instance_of_Runnable_Output____Error_Flow_0171c67b7da90f49e205)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ba9229f6e95
db.newInstance(_instance_of_Documentation_017b35893ba9229f6e95)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Sends an HTTP GET request to the specified URL and provide the results.\n\nThe HTTP GET method requests a representation of the specified resource. Requests using GET should only retrieve data.\n\nAdditional headers can be provided and returned in a string that has to be in JSON format.\n\n**Example:** \'{"Content-Type": "text/html; charset=UTF-8", "Content-Length": 1024 }\'\n\nThe returned body is formatted depending on the mimeType received in the headers : as an UTF-8 string for common text content (text/html, application/json, ...), and as a base64 string for all other contents.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Perform an HTTP GET request.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc26a8db923
db.newInstance(_instance_of_Documentation_017b35893fc26a8db923)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The URL to query.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc3b14f3365
db.newInstance(_instance_of_Documentation_017b35893fc3b14f3365)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Optional HTTP headers in a JSON parsable string.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a71d9fd42e7d82
db.newInstance(_instance_of_Documentation_017b35a71d9fd42e7d82)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a71db6b69f7648
db.newInstance(_instance_of_Documentation_017b35a71db6b69f7648)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a71dbc7ed42d20
db.newInstance(_instance_of_Documentation_017b35a71dbc7ed42d20)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Triggered if an error occurs.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a71dc25106faf3
db.newInstance(_instance_of_Documentation_017b35a71dc25106faf3)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The response status code.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a71dcaeb2aa3c8
db.newInstance(_instance_of_Documentation_017b35a71dcaeb2aa3c8)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The body (i.e. the content) of the response.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a71dd1bdf4d799
db.newInstance(_instance_of_Documentation_017b35a71dd1bdf4d799)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The response headers.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Control_Flow____Control_Flow_0162e32e14d5a05194e6);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____url_0162e32ebf6613c0a015);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____headers_016ca90dbec748971536);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Control_Flow____Control_Flow_0162e32e14d6a05194e6);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____body_0162e32ec3bef28cfcfa);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____status_code_016ca90dbec748971537);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____headers_016ca90dbec748971539);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_0171c67b7da90f49e205);
db.assign(_instance_of_Control_Flow____Control_Flow_0162e32e14d5a05194e6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Control_Flow____Control_Flow_0162e32e14d6a05194e6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____url_0162e32ebf6613c0a015, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____body_0162e32ec3bef28cfcfa, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____headers_016ca90dbec748971536, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____status_code_016ca90dbec748971537, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____headers_016ca90dbec748971539, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____Error_Flow_0171c67b7da90f49e205, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Documentation_017b35893ba9229f6e95   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6);
db.assign(_instance_of_Documentation_017b35893fc26a8db923   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____url_0162e32ebf6613c0a015);
db.assign(_instance_of_Documentation_017b35893fc3b14f3365   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____headers_016ca90dbec748971536);
db.assign(_instance_of_Documentation_017b35a71d9fd42e7d82   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Control_Flow____Control_Flow_0162e32e14d5a05194e6);
db.assign(_instance_of_Documentation_017b35a71db6b69f7648   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Control_Flow____Control_Flow_0162e32e14d6a05194e6);
db.assign(_instance_of_Documentation_017b35a71dbc7ed42d20   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Error_Flow_0171c67b7da90f49e205);
db.assign(_instance_of_Documentation_017b35a71dc25106faf3   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____status_code_016ca90dbec748971537);
db.assign(_instance_of_Documentation_017b35a71dcaeb2aa3c8   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____body_0162e32ec3bef28cfcfa);
db.assign(_instance_of_Documentation_017b35a71dd1bdf4d799   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____headers_016ca90dbec748971539);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_0162e32e14d5a05194e6);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_0162e32e14d6a05194e6);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____url_0162e32ebf6613c0a015);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____body_0162e32ec3bef28cfcfa);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____headers_016ca90dbec748971536);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____status_code_016ca90dbec748971537);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____headers_016ca90dbec748971539);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_0171c67b7da90f49e205);
db.assign(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ba9229f6e95   );
db.assign(_instance_of_Control_Flow____Control_Flow_0162e32e14d5a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a71d9fd42e7d82   );
db.assign(_instance_of_Control_Flow____Control_Flow_0162e32e14d6a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a71db6b69f7648   );
db.assign(_instance_of_Runnable_Input____url_0162e32ebf6613c0a015, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc26a8db923   );
db.assign(_instance_of_Runnable_Output____body_0162e32ec3bef28cfcfa, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a71dcaeb2aa3c8   );
db.assign(_instance_of_Runnable_Input____headers_016ca90dbec748971536, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc3b14f3365   );
db.assign(_instance_of_Runnable_Output____status_code_016ca90dbec748971537, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a71dc25106faf3   );
db.assign(_instance_of_Runnable_Output____headers_016ca90dbec748971539, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a71dd1bdf4d799   );
db.assign(_instance_of_Runnable_Output____Error_Flow_0171c67b7da90f49e205, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a71dbc7ed42d20   );
db.assignOptional(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _Object_gooRel_ff022000000000000003, _HTTP_Actions_0179b269940cee14a13d);
db.assignOptional(_instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6, _GOO_parentGooRel_ff02200000000000000u, _HTTP_Actions_0179b269940cee14a13d);
db.assignOptional(_HTTP_Actions_0179b269940cee14a13d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6);
db.assignOptional(_HTTP_Actions_0179b269940cee14a13d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____HTTP_Get_0162e32e14d4a05194e6);
