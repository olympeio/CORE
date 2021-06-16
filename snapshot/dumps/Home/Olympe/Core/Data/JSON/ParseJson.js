
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
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
const _Runnable_IO_Default_Value_01740c5d4ae4b520dd02 = '01740c5d4ae4b520dd02';

//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Math_0178445f8bd56b19894f               = '0178445f8bd56b19894f';
const _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';
const _Logic_0178445f8bd56b198950              = '0178445f8bd56b198950';
const _Auth_0179b2673490430cc604               = '0179b2673490430cc604';
const _Net_0179b26969330c80c58b                = '0179b26969330c80c58b';
const _HttpFunctions_0179b2697a2590496bea      = '0179b2697a2590496bea';
const _HttpActions_0179b269940cee14a13d        = '0179b269940cee14a13d';
const _Data_0179b2681e7d4704e92a               = '0179b2681e7d4704e92a';
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';
const _Transaction_0179b26880c1af51a32b        = '0179b26880c1af51a32b';
const _Operation_0179b268740d49b2a89d          = '0179b268740d49b2a89d';
const _JSON_0179b2684a901d133726               = '0179b2684a901d133726';
const _DataBase_0179b26837d01a7c3cdc           = '0179b26837d01a7c3cdc';
const _System_0179b269b5c75228d70f             = '0179b269b5c75228d70f';
const _DateTime_0179b2690f49a1f52652           = '0179b2690f49a1f52652';
const _File_0179b2692921b321f99d               = '0179b2692921b321f99d';
const _UI_0179b269c9b393d21bab                 = '0179b269c9b393d21bab';
const _Navigation_0179b269f70efbab6b8d         = '0179b269f70efbab6b8d';
const _Event_0179b269e44e8b51bce0              = '0179b269e44e8b51bce0';
const _Util_0179b26a12e03686de9c               = '0179b26a12e03686de9c';


// Definition of tags used for newly created instances
let _instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7 = db.assignTag('0162e331fae562c33ef7');
let _instance_of_Runnable_Input____0162e33251904fd5ad37 = db.assignTag('0162e33251904fd5ad37'); // path
let _instance_of_Runnable_Input____0162e331fc8fe5716519 = db.assignTag('0162e331fc8fe5716519'); // source
let _instance_of_Runnable_Output____0162e3322c583d0cbd93 = db.assignTag('0162e3322c583d0cbd93'); // result
let _instance_of_Documentation_Function_Metadata_d0c2e331fae562c33ef7 = db.assignTag('d0c2e331fae562c33ef7');

// :_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7
db.newModel(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7, 'Parse Json').extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Parse Json',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7);

// :_instance_of_Runnable_Input____0162e33251904fd5ad37 - path
db.newInstance(_instance_of_Runnable_Input____0162e33251904fd5ad37)
    .setModelTag('0168a431d25001540001') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'path',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____0162e33251904fd5ad37);
db.assign(_instance_of_Runnable_Input____0162e33251904fd5ad37, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____0162e33251904fd5ad37);

// :_instance_of_Runnable_Input____0162e331fc8fe5716519 - source
db.newInstance(_instance_of_Runnable_Input____0162e331fc8fe5716519)
    .setModelTag('0168a431d25001540001') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'source',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____0162e331fc8fe5716519);
db.assign(_instance_of_Runnable_Input____0162e331fc8fe5716519, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____0162e331fc8fe5716519);

// :_instance_of_Runnable_Output____0162e3322c583d0cbd93 - result
db.newInstance(_instance_of_Runnable_Output____0162e3322c583d0cbd93)
    .setModelTag('0168a431d25001540002') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'result',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____0162e3322c583d0cbd93);
db.assign(_instance_of_Runnable_Output____0162e3322c583d0cbd93, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000001');
db.assign(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____0162e3322c583d0cbd93);

// :_instance_of_Documentation_Function_Metadata_d0c2e331fae562c33ef7
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c2e331fae562c33ef7)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]: "",
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]: "## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 0162e331fc8fe5716519-source | String | The JSON string. |\n| 0162e33251904fd5ad37-path | String | The path |\n",
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]: "## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 0162e3322c583d0cbd93-result | Object |  |\n",
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]: "## Description\nParses a JSON string and extract the object specified by the path.\nThe path is specified in dotted form.\n**Example**:\n```\nParseJson('{ \"a\": { \"b\": \"hello\"}}, 'a.b') -> \"hello\"\n```\n",
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]: "Parse a JSON string.",
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c2e331fae562c33ef7);
db.assign(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c2e331fae562c33ef7);
db.assign(_instance_of_Documentation_Function_Metadata_d0c2e331fae562c33ef7, _Object_gooRel_ff022000000000000003, _instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7);

// TODO: Assigning to a Folder. Check this!
let parentFolder = _JSON_0179b2684a901d133726; // Core/Data/JSON
db.assignOptional(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7, _Object_gooRel_ff022000000000000003, parentFolder);
db.assignOptional(parentFolder, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7);
db.assignOptional(_instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7, _GOO_parentGooRel_ff02200000000000000u, parentFolder);
db.assignOptional(parentFolder, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____ParseJson_0162e331fae562c33ef7);                
