
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
const _instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e = db.assignTag('016ca8c47eac1f7f797e');
const _instance_of_Runnable_Input____url_016ca8c47eac1f7f797f = db.assignTag('016ca8c47eac1f7f797f');
const _instance_of_Runnable_Input____headers_016ca8c47eac1f7f7980 = db.assignTag('016ca8c47eac1f7f7980');
const _instance_of_Runnable_Output____status_code_016ca8c47eac1f7f7981 = db.assignTag('016ca8c47eac1f7f7981');
const _instance_of_Runnable_Output____body_016ca8c47eac1f7f7982 = db.assignTag('016ca8c47eac1f7f7982');
const _instance_of_Runnable_Output____headers_016ca8c47eac1f7f7983 = db.assignTag('016ca8c47eac1f7f7983');
const _instance_of_Documentation_017b35893ba5237a91fc = db.assignTag('017b35893ba5237a91fc');
const _instance_of_Documentation_017b35893fb4b1666699 = db.assignTag('017b35893fb4b1666699');
const _instance_of_Documentation_017b35893fb4f4732362 = db.assignTag('017b35893fb4f4732362');
const _instance_of_Documentation_017b35a5da0ba878cafa = db.assignTag('017b35a5da0ba878cafa');
const _instance_of_Documentation_017b35a5da1478927355 = db.assignTag('017b35a5da1478927355');
const _instance_of_Documentation_017b35a5da1b582d1cab = db.assignTag('017b35a5da1b582d1cab');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _HTTP_Functions_0179b2697a2590496bea     = '0179b2697a2590496bea';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e
db.newModel(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, 'HTTP Get') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'HTTP Get',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e);
// :_instance_of_Runnable_Input____url_016ca8c47eac1f7f797f
db.newInstance(_instance_of_Runnable_Input____url_016ca8c47eac1f7f797f)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'url',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____headers_016ca8c47eac1f7f7980
db.newInstance(_instance_of_Runnable_Input____headers_016ca8c47eac1f7f7980)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:'{}',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____status_code_016ca8c47eac1f7f7981
db.newInstance(_instance_of_Runnable_Output____status_code_016ca8c47eac1f7f7981)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'status code',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____body_016ca8c47eac1f7f7982
db.newInstance(_instance_of_Runnable_Output____body_016ca8c47eac1f7f7982)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____headers_016ca8c47eac1f7f7983
db.newInstance(_instance_of_Runnable_Output____headers_016ca8c47eac1f7f7983)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ba5237a91fc
db.newInstance(_instance_of_Documentation_017b35893ba5237a91fc)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Sends an HTTP GET request to the specified URL and provide the results.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Perform an HTTP GET request.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fb4b1666699
db.newInstance(_instance_of_Documentation_017b35893fb4b1666699)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Optional HTTP headers in a JSON parsable string.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fb4f4732362
db.newInstance(_instance_of_Documentation_017b35893fb4f4732362)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The URL to query.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a5da0ba878cafa
db.newInstance(_instance_of_Documentation_017b35a5da0ba878cafa)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The response status code.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a5da1478927355
db.newInstance(_instance_of_Documentation_017b35a5da1478927355)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The body (i.e. the content) of the response.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35a5da1b582d1cab
db.newInstance(_instance_of_Documentation_017b35a5da1b582d1cab)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The response headers.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____url_016ca8c47eac1f7f797f);
db.assign(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____headers_016ca8c47eac1f7f7980);
db.assign(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____status_code_016ca8c47eac1f7f7981);
db.assign(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____body_016ca8c47eac1f7f7982);
db.assign(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____headers_016ca8c47eac1f7f7983);
db.assign(_instance_of_Runnable_Input____url_016ca8c47eac1f7f797f, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____headers_016ca8c47eac1f7f7980, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____status_code_016ca8c47eac1f7f7981, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____body_016ca8c47eac1f7f7982, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____headers_016ca8c47eac1f7f7983, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893ba5237a91fc   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e);
db.assign(_instance_of_Documentation_017b35893fb4b1666699   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____headers_016ca8c47eac1f7f7980);
db.assign(_instance_of_Documentation_017b35893fb4f4732362   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____url_016ca8c47eac1f7f797f);
db.assign(_instance_of_Documentation_017b35a5da0ba878cafa   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____status_code_016ca8c47eac1f7f7981);
db.assign(_instance_of_Documentation_017b35a5da1478927355   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____body_016ca8c47eac1f7f7982);
db.assign(_instance_of_Documentation_017b35a5da1b582d1cab   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____headers_016ca8c47eac1f7f7983);
db.assign(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____url_016ca8c47eac1f7f797f);
db.assign(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____headers_016ca8c47eac1f7f7980);
db.assign(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____status_code_016ca8c47eac1f7f7981);
db.assign(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____body_016ca8c47eac1f7f7982);
db.assign(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____headers_016ca8c47eac1f7f7983);
db.assign(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ba5237a91fc   );
db.assign(_instance_of_Runnable_Input____url_016ca8c47eac1f7f797f, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fb4f4732362   );
db.assign(_instance_of_Runnable_Input____headers_016ca8c47eac1f7f7980, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fb4b1666699   );
db.assign(_instance_of_Runnable_Output____status_code_016ca8c47eac1f7f7981, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a5da0ba878cafa   );
db.assign(_instance_of_Runnable_Output____body_016ca8c47eac1f7f7982, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a5da1478927355   );
db.assign(_instance_of_Runnable_Output____headers_016ca8c47eac1f7f7983, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35a5da1b582d1cab   );
db.assignOptional(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, _Object_gooRel_ff022000000000000003, _HTTP_Functions_0179b2697a2590496bea);
db.assignOptional(_instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e, _GOO_parentGooRel_ff02200000000000000u, _HTTP_Functions_0179b2697a2590496bea);
db.assignOptional(_HTTP_Functions_0179b2697a2590496bea, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e);
db.assignOptional(_HTTP_Functions_0179b2697a2590496bea, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____HTTP_Get_016ca8c47eac1f7f797e);
