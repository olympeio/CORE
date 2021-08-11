
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


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
const _instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69 = db.assignTag('016ca923713b7e8ecb69');
const _instance_of_Runnable_Input____url_016ca923713b7e8ecb6a = db.assignTag('016ca923713b7e8ecb6a');
const _instance_of_Runnable_Input____headers_016ca923713b7e8ecb6b = db.assignTag('016ca923713b7e8ecb6b');
const _instance_of_Runnable_Input____body_016ca923713b7e8ecb6c = db.assignTag('016ca923713b7e8ecb6c');
const _instance_of_Runnable_Output____status_code_016ca923713b7e8ecb6d = db.assignTag('016ca923713b7e8ecb6d');
const _instance_of_Runnable_Output____headers_016ca923713b7e8ecb6f = db.assignTag('016ca923713b7e8ecb6f');
const _instance_of_Documentation_017b35893ba608c3bf2c = db.assignTag('017b35893ba608c3bf2c');
const _instance_of_Documentation_017b35893fb4efda7bbb = db.assignTag('017b35893fb4efda7bbb');
const _instance_of_Documentation_017b35893fbf7d7dcb6e = db.assignTag('017b35893fbf7d7dcb6e');
const _instance_of_Documentation_017b35893fbff4e128f0 = db.assignTag('017b35893fbff4e128f0');
const _instance_of_Documentation_017b35a5fbb159607238 = db.assignTag('017b35a5fbb159607238');
const _instance_of_Documentation_017b35a5fbbbaa4dbacd = db.assignTag('017b35a5fbbbaa4dbacd');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _HTTP_Functions_0179b2697a2590496bea     = '0179b2697a2590496bea';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69
db.newModel(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, 'HTTP Put') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'HTTP Put',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69);
// :_instance_of_Runnable_Input____url_016ca923713b7e8ecb6a
db.newInstance(_instance_of_Runnable_Input____url_016ca923713b7e8ecb6a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'url',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____headers_016ca923713b7e8ecb6b
db.newInstance(_instance_of_Runnable_Input____headers_016ca923713b7e8ecb6b)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:'{}',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____body_016ca923713b7e8ecb6c
db.newInstance(_instance_of_Runnable_Input____body_016ca923713b7e8ecb6c)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____status_code_016ca923713b7e8ecb6d
db.newInstance(_instance_of_Runnable_Output____status_code_016ca923713b7e8ecb6d)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'status code',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____headers_016ca923713b7e8ecb6f
db.newInstance(_instance_of_Runnable_Output____headers_016ca923713b7e8ecb6f)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ba608c3bf2c
db.newInstance(_instance_of_Documentation_017b35893ba608c3bf2c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Sends an HTTP PUT request to the specified URL and provide the results.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Perform an HTTP PUT request.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fb4efda7bbb
db.newInstance(_instance_of_Documentation_017b35893fb4efda7bbb)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The URL to query.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fbf7d7dcb6e
db.newInstance(_instance_of_Documentation_017b35893fbf7d7dcb6e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The body of the request.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fbff4e128f0
db.newInstance(_instance_of_Documentation_017b35893fbff4e128f0)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Optional HTTP headers in a JSON parsable string.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a5fbb159607238
db.newInstance(_instance_of_Documentation_017b35a5fbb159607238)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The response status code.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a5fbbbaa4dbacd
db.newInstance(_instance_of_Documentation_017b35a5fbbbaa4dbacd)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The response headers.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____url_016ca923713b7e8ecb6a);
db.assign(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____headers_016ca923713b7e8ecb6b);
db.assign(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____body_016ca923713b7e8ecb6c);
db.assign(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____status_code_016ca923713b7e8ecb6d);
db.assign(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____headers_016ca923713b7e8ecb6f);
db.assign(_instance_of_Runnable_Input____url_016ca923713b7e8ecb6a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____headers_016ca923713b7e8ecb6b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____body_016ca923713b7e8ecb6c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____status_code_016ca923713b7e8ecb6d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____headers_016ca923713b7e8ecb6f, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893ba608c3bf2c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69);
db.assign(_instance_of_Documentation_017b35893fb4efda7bbb   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____url_016ca923713b7e8ecb6a);
db.assign(_instance_of_Documentation_017b35893fbf7d7dcb6e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____body_016ca923713b7e8ecb6c);
db.assign(_instance_of_Documentation_017b35893fbff4e128f0   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____headers_016ca923713b7e8ecb6b);
db.assign(_instance_of_Documentation_017b35a5fbb159607238   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____status_code_016ca923713b7e8ecb6d);
db.assign(_instance_of_Documentation_017b35a5fbbbaa4dbacd   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____headers_016ca923713b7e8ecb6f);
db.assign(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____url_016ca923713b7e8ecb6a);
db.assign(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____headers_016ca923713b7e8ecb6b);
db.assign(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____body_016ca923713b7e8ecb6c);
db.assign(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____status_code_016ca923713b7e8ecb6d);
db.assign(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____headers_016ca923713b7e8ecb6f);
db.assign(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ba608c3bf2c   );
db.assign(_instance_of_Runnable_Input____url_016ca923713b7e8ecb6a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fb4efda7bbb   );
db.assign(_instance_of_Runnable_Input____headers_016ca923713b7e8ecb6b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fbff4e128f0   );
db.assign(_instance_of_Runnable_Input____body_016ca923713b7e8ecb6c, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fbf7d7dcb6e   );
db.assign(_instance_of_Runnable_Output____status_code_016ca923713b7e8ecb6d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a5fbb159607238   );
db.assign(_instance_of_Runnable_Output____headers_016ca923713b7e8ecb6f, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a5fbbbaa4dbacd   );
db.assignOptional(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, _Object_gooRel_ff022000000000000003, _HTTP_Functions_0179b2697a2590496bea);
db.assignOptional(_instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69, _GOO_parentGooRel_ff02200000000000000u, _HTTP_Functions_0179b2697a2590496bea);
db.assignOptional(_HTTP_Functions_0179b2697a2590496bea, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69);
db.assignOptional(_HTTP_Functions_0179b2697a2590496bea, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____HTTP_Put_016ca923713b7e8ecb69);
