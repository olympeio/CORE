
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
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
const _instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45 = db.assignTag('016ca9a73018c17e5b45');
const _instance_of_Runnable_Input____url_016ca9a73018c17e5b46 = db.assignTag('016ca9a73018c17e5b46');
const _instance_of_Runnable_Input____headers_016ca9a73018c17e5b47 = db.assignTag('016ca9a73018c17e5b47');
const _instance_of_Runnable_Input____body_016ca9a73018c17e5b48 = db.assignTag('016ca9a73018c17e5b48');
const _instance_of_Runnable_Output____status_code_016ca9a73018c17e5b49 = db.assignTag('016ca9a73018c17e5b49');
const _instance_of_Runnable_Output____body_016ca9a73018c17e5b4a = db.assignTag('016ca9a73018c17e5b4a');
const _instance_of_Runnable_Output____headers_016ca9a73018c17e5b4b = db.assignTag('016ca9a73018c17e5b4b');
const _instance_of_Documentation_017b35893ba4ef4df277 = db.assignTag('017b35893ba4ef4df277');
const _instance_of_Documentation_017b35893fb31ef77575 = db.assignTag('017b35893fb31ef77575');
const _instance_of_Documentation_017b35893fb31f59993e = db.assignTag('017b35893fb31f59993e');
const _instance_of_Documentation_017b35893fb3efa18bda = db.assignTag('017b35893fb3efa18bda');
const _instance_of_Documentation_017b35a4de9a6bf57732 = db.assignTag('017b35a4de9a6bf57732');
const _instance_of_Documentation_017b35a4dea1d06d0ff3 = db.assignTag('017b35a4dea1d06d0ff3');
const _instance_of_Documentation_017b35a4dea687652130 = db.assignTag('017b35a4dea687652130');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _HTTP_Functions_0179b2697a2590496bea     = '0179b2697a2590496bea';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45
db.newModel(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, 'HTTP Patch') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'HTTP Patch',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45);
// :_instance_of_Runnable_Input____url_016ca9a73018c17e5b46
db.newInstance(_instance_of_Runnable_Input____url_016ca9a73018c17e5b46)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'url',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____headers_016ca9a73018c17e5b47
db.newInstance(_instance_of_Runnable_Input____headers_016ca9a73018c17e5b47)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:'{}',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____body_016ca9a73018c17e5b48
db.newInstance(_instance_of_Runnable_Input____body_016ca9a73018c17e5b48)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____status_code_016ca9a73018c17e5b49
db.newInstance(_instance_of_Runnable_Output____status_code_016ca9a73018c17e5b49)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'status code',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____body_016ca9a73018c17e5b4a
db.newInstance(_instance_of_Runnable_Output____body_016ca9a73018c17e5b4a)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____headers_016ca9a73018c17e5b4b
db.newInstance(_instance_of_Runnable_Output____headers_016ca9a73018c17e5b4b)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ba4ef4df277
db.newInstance(_instance_of_Documentation_017b35893ba4ef4df277)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Sends an HTTP PATCH request to the specified URL and provide the results.\n\nThe HTTP PATCH request method applies partial modifications to a resource.\nThe HTTP PUT method only allows complete replacement of a document. Unlike PUT, PATCH is not idempotent, meaning\nsuccessive identical patch requests may have different effects. However, it is possible to issue PATCH requests in\nsuch a way as to be idempotent.\n\nAdditional headers can be provided and returned in a string that has to be in JSON format.\n\n**Example:** \'{"Content-Type": "text/html; charset=UTF-8", "Content-Length": 1024 }\'\n',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Perform an HTTP PATCH request.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fb31ef77575
db.newInstance(_instance_of_Documentation_017b35893fb31ef77575)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Optional HTTP headers in a JSON parsable string.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fb31f59993e
db.newInstance(_instance_of_Documentation_017b35893fb31f59993e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The body of the request.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fb3efa18bda
db.newInstance(_instance_of_Documentation_017b35893fb3efa18bda)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The URL to query.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a4de9a6bf57732
db.newInstance(_instance_of_Documentation_017b35a4de9a6bf57732)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The response status code.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a4dea1d06d0ff3
db.newInstance(_instance_of_Documentation_017b35a4dea1d06d0ff3)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The body (i.e. the content) of the response.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a4dea687652130
db.newInstance(_instance_of_Documentation_017b35a4dea687652130)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The response headers.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____url_016ca9a73018c17e5b46);
db.assign(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____headers_016ca9a73018c17e5b47);
db.assign(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____body_016ca9a73018c17e5b48);
db.assign(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____status_code_016ca9a73018c17e5b49);
db.assign(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____body_016ca9a73018c17e5b4a);
db.assign(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____headers_016ca9a73018c17e5b4b);
db.assign(_instance_of_Runnable_Input____url_016ca9a73018c17e5b46, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____headers_016ca9a73018c17e5b47, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____body_016ca9a73018c17e5b48, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____status_code_016ca9a73018c17e5b49, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____body_016ca9a73018c17e5b4a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____headers_016ca9a73018c17e5b4b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893ba4ef4df277   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45);
db.assign(_instance_of_Documentation_017b35893fb31ef77575   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____headers_016ca9a73018c17e5b47);
db.assign(_instance_of_Documentation_017b35893fb31f59993e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____body_016ca9a73018c17e5b48);
db.assign(_instance_of_Documentation_017b35893fb3efa18bda   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____url_016ca9a73018c17e5b46);
db.assign(_instance_of_Documentation_017b35a4de9a6bf57732   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____status_code_016ca9a73018c17e5b49);
db.assign(_instance_of_Documentation_017b35a4dea1d06d0ff3   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____body_016ca9a73018c17e5b4a);
db.assign(_instance_of_Documentation_017b35a4dea687652130   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____headers_016ca9a73018c17e5b4b);
db.assign(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____url_016ca9a73018c17e5b46);
db.assign(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____headers_016ca9a73018c17e5b47);
db.assign(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____body_016ca9a73018c17e5b48);
db.assign(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____status_code_016ca9a73018c17e5b49);
db.assign(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____body_016ca9a73018c17e5b4a);
db.assign(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____headers_016ca9a73018c17e5b4b);
db.assign(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ba4ef4df277   );
db.assign(_instance_of_Runnable_Input____url_016ca9a73018c17e5b46, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fb3efa18bda   );
db.assign(_instance_of_Runnable_Input____headers_016ca9a73018c17e5b47, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fb31ef77575   );
db.assign(_instance_of_Runnable_Input____body_016ca9a73018c17e5b48, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fb31f59993e   );
db.assign(_instance_of_Runnable_Output____status_code_016ca9a73018c17e5b49, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a4de9a6bf57732   );
db.assign(_instance_of_Runnable_Output____body_016ca9a73018c17e5b4a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a4dea1d06d0ff3   );
db.assign(_instance_of_Runnable_Output____headers_016ca9a73018c17e5b4b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a4dea687652130   );
db.assignOptional(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _Object_gooRel_ff022000000000000003, _HTTP_Functions_0179b2697a2590496bea);
db.assignOptional(_instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45, _GOO_parentGooRel_ff02200000000000000u, _HTTP_Functions_0179b2697a2590496bea);
db.assignOptional(_HTTP_Functions_0179b2697a2590496bea, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45);
db.assignOptional(_HTTP_Functions_0179b2697a2590496bea, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____HTTP_Patch_016ca9a73018c17e5b45);
