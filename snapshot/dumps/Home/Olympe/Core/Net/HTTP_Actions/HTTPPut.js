
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Predefined_input_Control_Flow_of_Action_016ac63229782039429f = '016ac63229782039429f';
const _Predefined_output_Control_Flow_016ac6322acf67eebfe7 = '016ac6322acf67eebfe7';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


// Definition of tags of defined properties
const _Documentation_Function_Metadata_errors_0172c6ae82952a74193f = '0172c6ae82952a74193f';
const _Documentation_Function_Metadata_inputs_0172c6ae82952a74193d = '0172c6ae82952a74193d';
const _Documentation_Function_Metadata_outputs_0172c6ae82952a74193e = '0172c6ae82952a74193e';
const _Documentation_Metadata_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_Metadata_toolTip_01703376c4a81c0e9d91 = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances
const _instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c = db.assignTag('016856cc8830ae0edc2c');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016856cc8831ae0edc2c = db.assignTag('016856cc8831ae0edc2c');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_016856cc8832ae0edc2c = db.assignTag('016856cc8832ae0edc2c');
const _instance_of_Runnable_Input____url_016856cc913acf52c3ee = db.assignTag('016856cc913acf52c3ee');
const _instance_of_Runnable_Input____body_016856cc93aa0621175e = db.assignTag('016856cc93aa0621175e');
const _instance_of_Runnable_Output____status_code_016856cc958a9bb06356 = db.assignTag('016856cc958a9bb06356');
const _instance_of_Runnable_Input____headers_016ca930c5fbe7415d78 = db.assignTag('016ca930c5fbe7415d78');
const _instance_of_Runnable_Output____headers_016ca930c5fbe7415d7c = db.assignTag('016ca930c5fbe7415d7c');
const _instance_of_Runnable_Output____Error_Flow_0171c67db3474d75da6b = db.assignTag('0171c67db3474d75da6b');
const _instance_of_Documentation_Function_Metadata_d0c856cc8830ae0edc2c = db.assignTag('d0c856cc8830ae0edc2c');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _HTTP_Actions_0179b269940cee14a13d       = '0179b269940cee14a13d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c
db.newModel(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, 'HTTP Put') // tag and name of the model
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, {
    [db.DEFAULT+_Object_name_ff023000000000000011]:'HTTP Put',
    'v'                                     :2
});
db.setRootInstanceTag(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c);
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016856cc8831ae0edc2c
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016856cc8831ae0edc2c)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_016856cc8832ae0edc2c
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_016856cc8832ae0edc2c)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____url_016856cc913acf52c3ee
db.newInstance(_instance_of_Runnable_Input____url_016856cc913acf52c3ee)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'url',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____body_016856cc93aa0621175e
db.newInstance(_instance_of_Runnable_Input____body_016856cc93aa0621175e)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____status_code_016856cc958a9bb06356
db.newInstance(_instance_of_Runnable_Output____status_code_016856cc958a9bb06356)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'status code',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____headers_016ca930c5fbe7415d78
db.newInstance(_instance_of_Runnable_Input____headers_016ca930c5fbe7415d78)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____headers_016ca930c5fbe7415d7c
db.newInstance(_instance_of_Runnable_Output____headers_016ca930c5fbe7415d7c)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_0171c67db3474d75da6b
db.newInstance(_instance_of_Runnable_Output____Error_Flow_0171c67db3474d75da6b)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c856cc8830ae0edc2c
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c856cc8830ae0edc2c)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| URL | String | The URL to query. |\n| Headers | String | Optional HTTP headers in a JSON parsable string. |\n| Body | String | The body of the request. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| Response Status Code | Number | The response status code. |\n| Response Status Text | String | The response status text. |\n| Response Body | String | The body (i.e. the content) of the response. |\n| Response Headers | String | The response headers. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nSends an HTTP PUT request to the specified URL and provide the results.\n\nThe HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request body.\nThe difference between PUT and POST is that PUT is idempotent: calling it once or several times successively has the\nsame effect (that is no side effect), where successive identical POST may have additional effects, like passing an\norder several times.\n\nAdditional headers can be provided and returned in a string that has to be in JSON format.\n\n**Example:** \'{"Content-Type": "text/html; charset=UTF-8",  "Content-Length": 1024 }\'\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Perform an HTTP PUT request.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016856cc8831ae0edc2c);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____url_016856cc913acf52c3ee);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____body_016856cc93aa0621175e);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____headers_016ca930c5fbe7415d78);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_016856cc8832ae0edc2c);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____status_code_016856cc958a9bb06356);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____headers_016ca930c5fbe7415d7c);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_0171c67db3474d75da6b);
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016856cc8831ae0edc2c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_016856cc8832ae0edc2c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____url_016856cc913acf52c3ee, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____body_016856cc93aa0621175e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____status_code_016856cc958a9bb06356, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____headers_016ca930c5fbe7415d78, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____headers_016ca930c5fbe7415d7c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____Error_Flow_0171c67db3474d75da6b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c856cc8830ae0edc2c);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016856cc8831ae0edc2c);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_016856cc8832ae0edc2c);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____url_016856cc913acf52c3ee);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____body_016856cc93aa0621175e);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____status_code_016856cc958a9bb06356);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____headers_016ca930c5fbe7415d78);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____headers_016ca930c5fbe7415d7c);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_0171c67db3474d75da6b);
db.assign(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c856cc8830ae0edc2c);
db.assignOptional(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _Object_gooRel_ff022000000000000003, _HTTP_Actions_0179b269940cee14a13d);
db.assignOptional(_instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c, _GOO_parentGooRel_ff02200000000000000u, _HTTP_Actions_0179b269940cee14a13d);
db.assignOptional(_HTTP_Actions_0179b269940cee14a13d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c);
db.assignOptional(_HTTP_Actions_0179b269940cee14a13d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____HTTP_Put_016856cc8830ae0edc2c);