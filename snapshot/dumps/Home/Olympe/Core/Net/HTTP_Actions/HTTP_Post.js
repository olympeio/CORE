
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
const _instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663 = db.assignTag('0163d09d43e8431f9663');
const _instance_of_Control_Flow____Control_Flow_0163d09d43e9431f9663 = db.assignTag('0163d09d43e9431f9663');
const _instance_of_Control_Flow____Control_Flow_0163d09d43ea431f9663 = db.assignTag('0163d09d43ea431f9663');
const _instance_of_Runnable_Input____url_0163d09d462614b06a4e = db.assignTag('0163d09d462614b06a4e');
const _instance_of_Runnable_Input____body_0163d09d4755ed76bbbb = db.assignTag('0163d09d4755ed76bbbb');
const _instance_of_Runnable_Output____body_0163d09d482d7eb9092a = db.assignTag('0163d09d482d7eb9092a');
const _instance_of_Runnable_Input____headers_016ca94825dad76e2214 = db.assignTag('016ca94825dad76e2214');
const _instance_of_Runnable_Output____status_code_016ca94825dad76e2216 = db.assignTag('016ca94825dad76e2216');
const _instance_of_Runnable_Output____headers_016ca94825dad76e2218 = db.assignTag('016ca94825dad76e2218');
const _instance_of_Runnable_Output____Error_Flow_0171c67dca22865c11d5 = db.assignTag('0171c67dca22865c11d5');
const _instance_of_Documentation_017b35893bab46e5baf2 = db.assignTag('017b35893bab46e5baf2');
const _instance_of_Documentation_017b35893fc4125c86ea = db.assignTag('017b35893fc4125c86ea');
const _instance_of_Documentation_017b35893fc461ccdc9d = db.assignTag('017b35893fc461ccdc9d');
const _instance_of_Documentation_017b35893fc4b2aed683 = db.assignTag('017b35893fc4b2aed683');
const _instance_of_Documentation_017b35a771f7dcc58e05 = db.assignTag('017b35a771f7dcc58e05');
const _instance_of_Documentation_017b35a772126876f800 = db.assignTag('017b35a772126876f800');
const _instance_of_Documentation_017b35a772182b0fa938 = db.assignTag('017b35a772182b0fa938');
const _instance_of_Documentation_017b35a7721f93e989dc = db.assignTag('017b35a7721f93e989dc');
const _instance_of_Documentation_017b35a77226dabd1959 = db.assignTag('017b35a77226dabd1959');
const _instance_of_Documentation_017b35a7722fcbe5d080 = db.assignTag('017b35a7722fcbe5d080');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _HTTP_Actions_0179b269940cee14a13d       = '0179b269940cee14a13d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663
db.newModel(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, 'HTTP Post') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'HTTP Post',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663);
// :_instance_of_Control_Flow____Control_Flow_0163d09d43e9431f9663
db.newInstance(_instance_of_Control_Flow____Control_Flow_0163d09d43e9431f9663)
    .setModelTag(_Control_Flow_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Control_Flow____Control_Flow_0163d09d43ea431f9663
db.newInstance(_instance_of_Control_Flow____Control_Flow_0163d09d43ea431f9663)
    .setModelTag(_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____url_0163d09d462614b06a4e
db.newInstance(_instance_of_Runnable_Input____url_0163d09d462614b06a4e)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'url',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____body_0163d09d4755ed76bbbb
db.newInstance(_instance_of_Runnable_Input____body_0163d09d4755ed76bbbb)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____body_0163d09d482d7eb9092a
db.newInstance(_instance_of_Runnable_Output____body_0163d09d482d7eb9092a)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____headers_016ca94825dad76e2214
db.newInstance(_instance_of_Runnable_Input____headers_016ca94825dad76e2214)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:'{}',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____status_code_016ca94825dad76e2216
db.newInstance(_instance_of_Runnable_Output____status_code_016ca94825dad76e2216)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'status code',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____headers_016ca94825dad76e2218
db.newInstance(_instance_of_Runnable_Output____headers_016ca94825dad76e2218)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:4,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_0171c67dca22865c11d5
db.newInstance(_instance_of_Runnable_Output____Error_Flow_0171c67dca22865c11d5)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893bab46e5baf2
db.newInstance(_instance_of_Documentation_017b35893bab46e5baf2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Sends an HTTP POST request to the specified URL and provide the results.\n\nThe HTTP POST method sends data to the server. The type of the body of the request is indicated by the `Content-Type` header.\nThe difference between PUT and POST is that PUT is idempotent: calling it once or several times successively has the\nsame effect (that is no side effect), where successive identical POST may have additional effects, like passing an\norder several times.\n\nAdditional headers can be provided and returned in a string that has to be in JSON format.\n\n**Example:** \'{"Content-Type": "text/html; charset=UTF-8", "Content-Length": 1024 }\'\n\nThe returned body is formatted depending on the mimeType received in the headers : as an UTF-8 string for common text content (text/html, application/json, ...), and as a base64 string for all other contents.\n',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Perform an HTTP POST request.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc4125c86ea
db.newInstance(_instance_of_Documentation_017b35893fc4125c86ea)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The body of the request.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc461ccdc9d
db.newInstance(_instance_of_Documentation_017b35893fc461ccdc9d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Optional HTTP headers in a JSON parsable string.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fc4b2aed683
db.newInstance(_instance_of_Documentation_017b35893fc4b2aed683)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The URL to query.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a771f7dcc58e05
db.newInstance(_instance_of_Documentation_017b35a771f7dcc58e05)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a772126876f800
db.newInstance(_instance_of_Documentation_017b35a772126876f800)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a772182b0fa938
db.newInstance(_instance_of_Documentation_017b35a772182b0fa938)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Triggered if an error occurs.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a7721f93e989dc
db.newInstance(_instance_of_Documentation_017b35a7721f93e989dc)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The response status code.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a77226dabd1959
db.newInstance(_instance_of_Documentation_017b35a77226dabd1959)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The body (i.e. the content) of the response.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a7722fcbe5d080
db.newInstance(_instance_of_Documentation_017b35a7722fcbe5d080)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The response headers.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Control_Flow____Control_Flow_0163d09d43e9431f9663);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____url_0163d09d462614b06a4e);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____body_0163d09d4755ed76bbbb);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____headers_016ca94825dad76e2214);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Control_Flow____Control_Flow_0163d09d43ea431f9663);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____body_0163d09d482d7eb9092a);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____status_code_016ca94825dad76e2216);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____headers_016ca94825dad76e2218);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_0171c67dca22865c11d5);
db.assign(_instance_of_Control_Flow____Control_Flow_0163d09d43e9431f9663, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Control_Flow____Control_Flow_0163d09d43ea431f9663, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____url_0163d09d462614b06a4e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____body_0163d09d4755ed76bbbb, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____body_0163d09d482d7eb9092a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____headers_016ca94825dad76e2214, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____status_code_016ca94825dad76e2216, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____headers_016ca94825dad76e2218, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____Error_Flow_0171c67dca22865c11d5, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Documentation_017b35893bab46e5baf2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663);
db.assign(_instance_of_Documentation_017b35893fc4125c86ea   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____body_0163d09d4755ed76bbbb);
db.assign(_instance_of_Documentation_017b35893fc461ccdc9d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____headers_016ca94825dad76e2214);
db.assign(_instance_of_Documentation_017b35893fc4b2aed683   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____url_0163d09d462614b06a4e);
db.assign(_instance_of_Documentation_017b35a771f7dcc58e05   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Control_Flow____Control_Flow_0163d09d43e9431f9663);
db.assign(_instance_of_Documentation_017b35a772126876f800   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Control_Flow____Control_Flow_0163d09d43ea431f9663);
db.assign(_instance_of_Documentation_017b35a772182b0fa938   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Error_Flow_0171c67dca22865c11d5);
db.assign(_instance_of_Documentation_017b35a7721f93e989dc   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____status_code_016ca94825dad76e2216);
db.assign(_instance_of_Documentation_017b35a77226dabd1959   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____body_0163d09d482d7eb9092a);
db.assign(_instance_of_Documentation_017b35a7722fcbe5d080   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____headers_016ca94825dad76e2218);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_0163d09d43e9431f9663);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_0163d09d43ea431f9663);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____url_0163d09d462614b06a4e);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____body_0163d09d4755ed76bbbb);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____body_0163d09d482d7eb9092a);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____headers_016ca94825dad76e2214);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____status_code_016ca94825dad76e2216);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____headers_016ca94825dad76e2218);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_0171c67dca22865c11d5);
db.assign(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893bab46e5baf2   );
db.assign(_instance_of_Control_Flow____Control_Flow_0163d09d43e9431f9663, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a771f7dcc58e05   );
db.assign(_instance_of_Control_Flow____Control_Flow_0163d09d43ea431f9663, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a772126876f800   );
db.assign(_instance_of_Runnable_Input____url_0163d09d462614b06a4e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc4b2aed683   );
db.assign(_instance_of_Runnable_Input____body_0163d09d4755ed76bbbb, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc4125c86ea   );
db.assign(_instance_of_Runnable_Output____body_0163d09d482d7eb9092a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a77226dabd1959   );
db.assign(_instance_of_Runnable_Input____headers_016ca94825dad76e2214, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fc461ccdc9d   );
db.assign(_instance_of_Runnable_Output____status_code_016ca94825dad76e2216, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a7721f93e989dc   );
db.assign(_instance_of_Runnable_Output____headers_016ca94825dad76e2218, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a7722fcbe5d080   );
db.assign(_instance_of_Runnable_Output____Error_Flow_0171c67dca22865c11d5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a772182b0fa938   );
db.assignOptional(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _Object_gooRel_ff022000000000000003, _HTTP_Actions_0179b269940cee14a13d);
db.assignOptional(_instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663, _GOO_parentGooRel_ff02200000000000000u, _HTTP_Actions_0179b269940cee14a13d);
db.assignOptional(_HTTP_Actions_0179b269940cee14a13d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663);
db.assignOptional(_HTTP_Actions_0179b269940cee14a13d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____HTTP_Post_0163d09d43e8431f9663);
