
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
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
const _Runnable_Input_Default_Value_01740c5d4ae4b520dd02 = '01740c5d4ae4b520dd02';
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
const _instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5 = db.assignTag('016ca9938e98ca1760d5');
const _instance_of_Runnable_Input____url_016ca9938e98ca1760d6 = db.assignTag('016ca9938e98ca1760d6');
const _instance_of_Runnable_Input____headers_016ca9938e98ca1760d7 = db.assignTag('016ca9938e98ca1760d7');
const _instance_of_Runnable_Output____status_code_016ca9938e98ca1760d9 = db.assignTag('016ca9938e98ca1760d9');
const _instance_of_Runnable_Output____headers_016ca9938e98ca1760da = db.assignTag('016ca9938e98ca1760da');
const _instance_of_Documentation_Function_Metadata_d0cca9938e98ca1760d5 = db.assignTag('d0cca9938e98ca1760d5');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _HTTP_Functions_0179b2697a2590496bea     = '0179b2697a2590496bea';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5
db.newModel(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5, 'HTTP Head') // tag and name of the model
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5, {
    [db.DEFAULT+_Object_name_ff023000000000000011]:'HTTP Head',
    'v'                                     :2
});
db.setRootInstanceTag(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5);
// :_instance_of_Runnable_Input____url_016ca9938e98ca1760d6
db.newInstance(_instance_of_Runnable_Input____url_016ca9938e98ca1760d6)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'url',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____headers_016ca9938e98ca1760d7
db.newInstance(_instance_of_Runnable_Input____headers_016ca9938e98ca1760d7)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:'{}',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____status_code_016ca9938e98ca1760d9
db.newInstance(_instance_of_Runnable_Output____status_code_016ca9938e98ca1760d9)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'status code',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____headers_016ca9938e98ca1760da
db.newInstance(_instance_of_Runnable_Output____headers_016ca9938e98ca1760da)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0cca9938e98ca1760d5
db.newInstance(_instance_of_Documentation_Function_Metadata_d0cca9938e98ca1760d5)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| URL | String | The URL to query. |\n| Headers | String | Optional HTTP headers in a JSON parsable string. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| Response Status Code | Number | The response status code. |\n| Response Headers | String | The response headers. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nSends an HTTP HEAD request to the specified URL and provide the results.\n\nAdditional headers can be provided and returned in a string that has to be in JSON format.\n\n**Example:** \'{"Content-Type": "text/html; charset=UTF-8",  "Content-Length": 1024 }\'\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Perform an HTTP HEAD request.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____url_016ca9938e98ca1760d6);
db.assign(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____headers_016ca9938e98ca1760d7);
db.assign(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____status_code_016ca9938e98ca1760d9);
db.assign(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____headers_016ca9938e98ca1760da);
db.assign(_instance_of_Runnable_Input____url_016ca9938e98ca1760d6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____headers_016ca9938e98ca1760d7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____status_code_016ca9938e98ca1760d9, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____headers_016ca9938e98ca1760da, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0cca9938e98ca1760d5);
db.assign(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____url_016ca9938e98ca1760d6);
db.assign(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____headers_016ca9938e98ca1760d7);
db.assign(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____status_code_016ca9938e98ca1760d9);
db.assign(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____headers_016ca9938e98ca1760da);
db.assign(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0cca9938e98ca1760d5);
db.assignOptional(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5, _Object_gooRel_ff022000000000000003, _HTTP_Functions_0179b2697a2590496bea);
db.assignOptional(_instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5, _GOO_parentGooRel_ff02200000000000000u, _HTTP_Functions_0179b2697a2590496bea);
db.assignOptional(_HTTP_Functions_0179b2697a2590496bea, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5);
db.assignOptional(_HTTP_Functions_0179b2697a2590496bea, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____HTTP_Head_016ca9938e98ca1760d5);