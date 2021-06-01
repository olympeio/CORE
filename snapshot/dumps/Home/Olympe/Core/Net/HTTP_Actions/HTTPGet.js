
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
let _instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6 = db.assignTag('0162e32e14d4a05194e6');
let _instance_of_Runnable_Input____0162e32e14d5a05194e6 = db.assignTag('0162e32e14d5a05194e6'); // Control Flow
let _instance_of_Runnable_Input____016ca90dbec748971536 = db.assignTag('016ca90dbec748971536'); // headers
let _instance_of_Runnable_Input____0162e32ebf6613c0a015 = db.assignTag('0162e32ebf6613c0a015'); // url
let _instance_of_Runnable_Output____016ca90dbec748971537 = db.assignTag('016ca90dbec748971537'); // status code
let _instance_of_Runnable_Output____0162e32e14d6a05194e6 = db.assignTag('0162e32e14d6a05194e6'); // Control Flow
let _instance_of_Runnable_Output____016ca90dbec748971539 = db.assignTag('016ca90dbec748971539'); // headers
let _instance_of_Runnable_Output____0171c67b7da90f49e205 = db.assignTag('0171c67b7da90f49e205'); // Error Flow
let _instance_of_Runnable_Output____0162e32ec3bef28cfcfa = db.assignTag('0162e32ec3bef28cfcfa'); // body
let _instance_of_Documentation_Function_Metadata_d0c2e32e14d4a05194e6 = db.assignTag('d0c2e32e14d4a05194e6');

// :_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6
db.newModel(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, 'HTTP Get').extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'HTTP Get',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6);

// :_instance_of_Runnable_Input____0162e32e14d5a05194e6 - Control Flow
db.newInstance(_instance_of_Runnable_Input____0162e32e14d5a05194e6)
    .setModelTag('016ac63229782039429f') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____0162e32e14d5a05194e6);
db.assign(_instance_of_Runnable_Input____0162e32e14d5a05194e6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , '01621fb84e320000cf00');
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____0162e32e14d5a05194e6);

// :_instance_of_Runnable_Input____016ca90dbec748971536 - headers
db.newInstance(_instance_of_Runnable_Input____016ca90dbec748971536)
    .setModelTag('0168a431d25001540001') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____016ca90dbec748971536);
db.assign(_instance_of_Runnable_Input____016ca90dbec748971536, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____016ca90dbec748971536);

// :_instance_of_Runnable_Input____0162e32ebf6613c0a015 - url
db.newInstance(_instance_of_Runnable_Input____0162e32ebf6613c0a015)
    .setModelTag('0168a431d25001540001') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'url',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____0162e32ebf6613c0a015);
db.assign(_instance_of_Runnable_Input____0162e32ebf6613c0a015, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____0162e32ebf6613c0a015);

// :_instance_of_Runnable_Output____016ca90dbec748971537 - status code
db.newInstance(_instance_of_Runnable_Output____016ca90dbec748971537)
    .setModelTag('0168a431d25001540002') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'status code',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____016ca90dbec748971537);
db.assign(_instance_of_Runnable_Output____016ca90dbec748971537, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000013');
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____016ca90dbec748971537);

// :_instance_of_Runnable_Output____0162e32e14d6a05194e6 - Control Flow
db.newInstance(_instance_of_Runnable_Output____0162e32e14d6a05194e6)
    .setModelTag('016ac6322acf67eebfe7') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____0162e32e14d6a05194e6);
db.assign(_instance_of_Runnable_Output____0162e32e14d6a05194e6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , '01621fb84e320000cf00');
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____0162e32e14d6a05194e6);

// :_instance_of_Runnable_Output____016ca90dbec748971539 - headers
db.newInstance(_instance_of_Runnable_Output____016ca90dbec748971539)
    .setModelTag('0168a431d25001540002') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'headers',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____016ca90dbec748971539);
db.assign(_instance_of_Runnable_Output____016ca90dbec748971539, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____016ca90dbec748971539);

// :_instance_of_Runnable_Output____0171c67b7da90f49e205 - Error Flow
db.newInstance(_instance_of_Runnable_Output____0171c67b7da90f49e205)
    .setModelTag('0168a431d25001540002') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____0171c67b7da90f49e205);
db.assign(_instance_of_Runnable_Output____0171c67b7da90f49e205, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , '016eeb5ede9f3094d8f0');
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____0171c67b7da90f49e205);

// :_instance_of_Runnable_Output____0162e32ec3bef28cfcfa - body
db.newInstance(_instance_of_Runnable_Output____0162e32ec3bef28cfcfa)
    .setModelTag('0168a431d25001540002') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'body',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:4,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____0162e32ec3bef28cfcfa);
db.assign(_instance_of_Runnable_Output____0162e32ec3bef28cfcfa, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____0162e32ec3bef28cfcfa);

// :_instance_of_Documentation_Function_Metadata_d0c2e32e14d4a05194e6
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c2e32e14d4a05194e6)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]: "",
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]: "## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| URL | String | The URL to query. |\n| Headers | String | Optional HTTP headers in a JSON parsable string. |\n",
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]: "## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| Response Status Code | Number | The response status code. |\n| Response Body | String | The body (i.e. the content) of the response. |\n| Response Headers | String | The response headers. |\n",
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]: "## Description\nSends an HTTP GET request to the specified URL and provide the results.\n\nThe HTTP GET method requests a representation of the specified resource. Requests using GET should only retrieve data.\n\nAdditional headers can be provided and returned in a string that has to be in JSON format.\n\n**Example:** '{\"Content-Type\": \"text/html; charset=UTF-8\",  \"Content-Length\": 1024 }'\n\n",
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]: "Perform an HTTP GET request.",
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c2e32e14d4a05194e6);
db.assign(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c2e32e14d4a05194e6);
db.assign(_instance_of_Documentation_Function_Metadata_d0c2e32e14d4a05194e6, _Object_gooRel_ff022000000000000003, _instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6);

// TODO: Assigning to a Folder. Check this!
let parentFolder = "0179b269940cee14a13d"; // Core/Net/HTTP Actions
db.assignOptional(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _Object_gooRel_ff022000000000000003, parentFolder);
db.assignOptional(parentFolder, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6);
db.assignOptional(_instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6, _GOO_parentGooRel_ff02200000000000000u, parentFolder);
db.assignOptional(parentFolder, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____HTTPGet_0162e32e14d4a05194e6);                
