
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
let _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
let _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
let _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
let _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
let _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
let _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
let _String_ff021000000000000011             = 'ff021000000000000011';


// Definition of tags of defined properties
let _Documentation_Function_Metadata_errors_0172c6ae82952a74193f = '0172c6ae82952a74193f';
let _Documentation_Function_Metadata_inputs_0172c6ae82952a74193d = '0172c6ae82952a74193d';
let _Documentation_Function_Metadata_outputs_0172c6ae82952a74193e = '0172c6ae82952a74193e';
let _Documentation_Metadata_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
let _Documentation_Metadata_toolTip_01703376c4a81c0e9d91 = '01703376c4a81c0e9d91';
let _Object_name_ff023000000000000011             = 'ff023000000000000011';
let _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
let _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
let _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
let _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
let _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
let _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
let _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
let _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
let _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
let _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';
let _Runnable_IO_Default_Value_01740c5d4ae4b520dd02 = '01740c5d4ae4b520dd02';

//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
let _Math_0178445f8bd56b19894f               = '0178445f8bd56b19894f';
let _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';
let _Logic_0178445f8bd56b198950              = '0178445f8bd56b198950';
let _Auth_0179b2673490430cc604               = '0179b2673490430cc604';
let _Net_0179b26969330c80c58b                = '0179b26969330c80c58b';
let _HttpFunctions_0179b2697a2590496bea      = '0179b2697a2590496bea';
let _HttpActions_0179b269940cee14a13d        = '0179b269940cee14a13d';
let _Data_0179b2681e7d4704e92a               = '0179b2681e7d4704e92a';
let _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';
let _Transaction_0179b26880c1af51a32b        = '0179b26880c1af51a32b';
let _Operation_0179b268740d49b2a89d          = '0179b268740d49b2a89d';
let _JSON_0179b2684a901d133726               = '0179b2684a901d133726';
let _DataBase_0179b26837d01a7c3cdc           = '0179b26837d01a7c3cdc';
let _System_0179b269b5c75228d70f             = '0179b269b5c75228d70f';
let _DateTime_0179b2690f49a1f52652           = '0179b2690f49a1f52652';
let _File_0179b2692921b321f99d               = '0179b2692921b321f99d';
let _UI_0179b269c9b393d21bab                 = '0179b269c9b393d21bab';
let _Navigation_0179b269f70efbab6b8d         = '0179b269f70efbab6b8d';
let _Event_0179b269e44e8b51bce0              = '0179b269e44e8b51bce0';
let _Util_0179b26a12e03686de9c               = '0179b26a12e03686de9c';


// Definition of tags used for newly created instances
let _instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04 = db.assignTag('016ca99aa59aa7df5e04');
let _instance_of_Runnable_Input____016ca99aa59aa7df5e06 = db.assignTag('016ca99aa59aa7df5e06'); // headers
let _instance_of_Runnable_Input____016ca99aa59aa7df5e07 = db.assignTag('016ca99aa59aa7df5e07'); // body
let _instance_of_Runnable_Input____016ca99aa59aa7df5e05 = db.assignTag('016ca99aa59aa7df5e05'); // url
let _instance_of_Runnable_Output____016ca99aa59aa7df5e09 = db.assignTag('016ca99aa59aa7df5e09'); // body
let _instance_of_Runnable_Output____016ca99aa59aa7df5e08 = db.assignTag('016ca99aa59aa7df5e08'); // status code
let _instance_of_Runnable_Output____016ca99aa59aa7df5e0a = db.assignTag('016ca99aa59aa7df5e0a'); // headers
let _instance_of_Documentation_Function_Metadata_d0cca99aa59aa7df5e04 = db.assignTag('d0cca99aa59aa7df5e04');

// :_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04
db.newModel(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, 'HTTP Delete').extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'HTTP Delete',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04);

// :_instance_of_Runnable_Input____016ca99aa59aa7df5e06 - headers
db.newInstance(_instance_of_Runnable_Input____016ca99aa59aa7df5e06)
    .setModelTag('0168a431d25001540001') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____016ca99aa59aa7df5e06);
db.assign(_instance_of_Runnable_Input____016ca99aa59aa7df5e06, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____016ca99aa59aa7df5e06);

// :_instance_of_Runnable_Input____016ca99aa59aa7df5e07 - body
db.newInstance(_instance_of_Runnable_Input____016ca99aa59aa7df5e07)
    .setModelTag('0168a431d25001540001') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____016ca99aa59aa7df5e07);
db.assign(_instance_of_Runnable_Input____016ca99aa59aa7df5e07, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____016ca99aa59aa7df5e07);

// :_instance_of_Runnable_Input____016ca99aa59aa7df5e05 - url
db.newInstance(_instance_of_Runnable_Input____016ca99aa59aa7df5e05)
    .setModelTag('0168a431d25001540001') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'url',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____016ca99aa59aa7df5e05);
db.assign(_instance_of_Runnable_Input____016ca99aa59aa7df5e05, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____016ca99aa59aa7df5e05);

// :_instance_of_Runnable_Output____016ca99aa59aa7df5e09 - body
db.newInstance(_instance_of_Runnable_Output____016ca99aa59aa7df5e09)
    .setModelTag('0168a431d25001540002') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____016ca99aa59aa7df5e09);
db.assign(_instance_of_Runnable_Output____016ca99aa59aa7df5e09, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____016ca99aa59aa7df5e09);

// :_instance_of_Runnable_Output____016ca99aa59aa7df5e08 - status code
db.newInstance(_instance_of_Runnable_Output____016ca99aa59aa7df5e08)
    .setModelTag('0168a431d25001540002') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'status code',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____016ca99aa59aa7df5e08);
db.assign(_instance_of_Runnable_Output____016ca99aa59aa7df5e08, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000013');
db.assign(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____016ca99aa59aa7df5e08);

// :_instance_of_Runnable_Output____016ca99aa59aa7df5e0a - headers
db.newInstance(_instance_of_Runnable_Output____016ca99aa59aa7df5e0a)
    .setModelTag('0168a431d25001540002') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____016ca99aa59aa7df5e0a);
db.assign(_instance_of_Runnable_Output____016ca99aa59aa7df5e0a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____016ca99aa59aa7df5e0a);

// :_instance_of_Documentation_Function_Metadata_d0cca99aa59aa7df5e04
db.newInstance(_instance_of_Documentation_Function_Metadata_d0cca99aa59aa7df5e04)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]: "",
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]: "## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| URL | String | The URL to query. |\n| Headers | String | Optional HTTP headers in a JSON parsable string. |\n",
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]: "## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| Response Status Code | Number | The response status code. |\n| Response Body | String | The body (i.e. the content) of the response. |\n| Response Headers | String | The response headers. |\n",
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]: "## Description\nSends an HTTP DELETE request to the specified URL and provide the results.\n\nAdditional headers can be provided and returned in a string that has to be in JSON format.\n\n**Example:** '{\"Content-Type\": \"text/html; charset=UTF-8\",  \"Content-Length\": 1024 }'\n\n",
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]: "Perform an HTTP DELETE request.",
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0cca99aa59aa7df5e04);
db.assign(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0cca99aa59aa7df5e04);
db.assign(_instance_of_Documentation_Function_Metadata_d0cca99aa59aa7df5e04, _Object_gooRel_ff022000000000000003, _instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04);

let parentFolder = '0179b2697a2590496bea'; // Core/Net/HTTP Functions
db.assignOptional(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _Object_gooRel_ff022000000000000003, parentFolder);
db.assignOptional(parentFolder, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04);
db.assignOptional(_instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04, _GOO_parentGooRel_ff02200000000000000u, parentFolder);
db.assignOptional(parentFolder, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____HTTPDelete_016ca99aa59aa7df5e04);                
