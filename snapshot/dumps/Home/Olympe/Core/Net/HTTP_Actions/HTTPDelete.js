
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
const _instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21 = db.assignTag('016ca99aa88a43410c21');
const _instance_of_Runnable_Input____url_016ca99aa88a43410c22 = db.assignTag('016ca99aa88a43410c22');
const _instance_of_Runnable_Input____headers_016ca99aa88a43410c23 = db.assignTag('016ca99aa88a43410c23');
const _instance_of_Runnable_Input____body_016ca99aa88a43410c24 = db.assignTag('016ca99aa88a43410c24');
const _instance_of_Runnable_Output____status_code_016ca99aa88a43410c25 = db.assignTag('016ca99aa88a43410c25');
const _instance_of_Runnable_Output____body_016ca99aa88a43410c26 = db.assignTag('016ca99aa88a43410c26');
const _instance_of_Runnable_Output____headers_016ca99aa88a43410c27 = db.assignTag('016ca99aa88a43410c27');
const _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca99aa88b43410c21 = db.assignTag('016ca99aa88b43410c21');
const _instance_of_Predefined_output_Control_Flow____Control_Flow_016ca99aa88c43410c21 = db.assignTag('016ca99aa88c43410c21');
const _instance_of_Runnable_Output____Error_Flow_0171c67e76b1da350a25 = db.assignTag('0171c67e76b1da350a25');
const _instance_of_Documentation_Function_Metadata_d0cca99aa88a43410c21 = db.assignTag('d0cca99aa88a43410c21');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _HTTP_Actions_0179b269940cee14a13d       = '0179b269940cee14a13d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21
db.newModel(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, 'HTTP Delete') // tag and name of the model
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, {
    [db.DEFAULT+_Object_name_ff023000000000000011]:'HTTP Delete',
    'v'                                     :2
});
db.setRootInstanceTag(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21);
// :_instance_of_Runnable_Input____url_016ca99aa88a43410c22
db.newInstance(_instance_of_Runnable_Input____url_016ca99aa88a43410c22)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'url',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____headers_016ca99aa88a43410c23
db.newInstance(_instance_of_Runnable_Input____headers_016ca99aa88a43410c23)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____body_016ca99aa88a43410c24
db.newInstance(_instance_of_Runnable_Input____body_016ca99aa88a43410c24)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____status_code_016ca99aa88a43410c25
db.newInstance(_instance_of_Runnable_Output____status_code_016ca99aa88a43410c25)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'status code',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____body_016ca99aa88a43410c26
db.newInstance(_instance_of_Runnable_Output____body_016ca99aa88a43410c26)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____headers_016ca99aa88a43410c27
db.newInstance(_instance_of_Runnable_Output____headers_016ca99aa88a43410c27)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:4,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca99aa88b43410c21
db.newInstance(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca99aa88b43410c21)
    .setModelTag(_Predefined_input_Control_Flow_of_Action_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Predefined_output_Control_Flow____Control_Flow_016ca99aa88c43410c21
db.newInstance(_instance_of_Predefined_output_Control_Flow____Control_Flow_016ca99aa88c43410c21)
    .setModelTag(_Predefined_output_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_0171c67e76b1da350a25
db.newInstance(_instance_of_Runnable_Output____Error_Flow_0171c67e76b1da350a25)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0cca99aa88a43410c21
db.newInstance(_instance_of_Documentation_Function_Metadata_d0cca99aa88a43410c21)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| URL | String | The URL to query. |\n| Headers | String | Optional HTTP headers in a JSON parsable string. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| Response Status Code | Number | The response status code. |\n| Response Status Text | String | The response status text. |\n| Response Body | String | The body (i.e. the content) of the response. |\n| Response Headers | String | The response headers. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nSends an HTTP DELETE request to the specified URL and provide the results.\n\nAdditional headers can be provided and returned in a string that has to be in JSON format.\n\n**Example:** \'{"Content-Type": "text/html; charset=UTF-8",  "Content-Length": 1024 }\'\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Perform an HTTP DELETE request.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____url_016ca99aa88a43410c22);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____headers_016ca99aa88a43410c23);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____body_016ca99aa88a43410c24);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca99aa88b43410c21);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____status_code_016ca99aa88a43410c25);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____body_016ca99aa88a43410c26);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____headers_016ca99aa88a43410c27);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Predefined_output_Control_Flow____Control_Flow_016ca99aa88c43410c21);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_0171c67e76b1da350a25);
db.assign(_instance_of_Runnable_Input____url_016ca99aa88a43410c22, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____headers_016ca99aa88a43410c23, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____body_016ca99aa88a43410c24, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____status_code_016ca99aa88a43410c25, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____body_016ca99aa88a43410c26, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____headers_016ca99aa88a43410c27, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca99aa88b43410c21, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Predefined_output_Control_Flow____Control_Flow_016ca99aa88c43410c21, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____Error_Flow_0171c67e76b1da350a25, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0cca99aa88a43410c21);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____url_016ca99aa88a43410c22);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____headers_016ca99aa88a43410c23);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____body_016ca99aa88a43410c24);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____status_code_016ca99aa88a43410c25);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____body_016ca99aa88a43410c26);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____headers_016ca99aa88a43410c27);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_input_Control_Flow_of_Action____Control_Flow_016ca99aa88b43410c21);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Object_containsRel_ff02200000000000000f          , _instance_of_Predefined_output_Control_Flow____Control_Flow_016ca99aa88c43410c21);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_0171c67e76b1da350a25);
db.assign(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0cca99aa88a43410c21);
db.assignOptional(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _Object_gooRel_ff022000000000000003, _HTTP_Actions_0179b269940cee14a13d);
db.assignOptional(_instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21, _GOO_parentGooRel_ff02200000000000000u, _HTTP_Actions_0179b269940cee14a13d);
db.assignOptional(_HTTP_Actions_0179b269940cee14a13d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21);
db.assignOptional(_HTTP_Actions_0179b269940cee14a13d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____HTTP_Delete_016ca99aa88a43410c21);