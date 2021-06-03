
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
let _instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff = db.assignTag('01717ca65ebd013b34ff');
let _instance_of_Runnable_Input____01717ca66035bc2388df = db.assignTag('01717ca66035bc2388df'); // s
let _instance_of_Runnable_Input____01717ca6619db4e387f7 = db.assignTag('01717ca6619db4e387f7'); // length
let _instance_of_Runnable_Input____01717ca6644567e8a7f8 = db.assignTag('01717ca6644567e8a7f8'); // pad string
let _instance_of_Runnable_Output____01717ca712d7407fd246 = db.assignTag('01717ca712d7407fd246'); // padded string
let _instance_of_Documentation_Function_Metadata_d0c17ca65ebd013b34ff = db.assignTag('d0c17ca65ebd013b34ff');

// :_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff
db.newModel(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff, 'Pad End of String').extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Pad End of String',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff);

// :_instance_of_Runnable_Input____01717ca66035bc2388df - s
db.newInstance(_instance_of_Runnable_Input____01717ca66035bc2388df)
    .setModelTag('0168a431d25001540001') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01717ca66035bc2388df);
db.assign(_instance_of_Runnable_Input____01717ca66035bc2388df, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01717ca66035bc2388df);

// :_instance_of_Runnable_Input____01717ca6619db4e387f7 - length
db.newInstance(_instance_of_Runnable_Input____01717ca6619db4e387f7)
    .setModelTag('0168a431d25001540001') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'length',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01717ca6619db4e387f7);
db.assign(_instance_of_Runnable_Input____01717ca6619db4e387f7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000013');
db.assign(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01717ca6619db4e387f7);

// :_instance_of_Runnable_Input____01717ca6644567e8a7f8 - pad string
db.newInstance(_instance_of_Runnable_Input____01717ca6644567e8a7f8)
    .setModelTag('0168a431d25001540001') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'pad string',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01717ca6644567e8a7f8);
db.assign(_instance_of_Runnable_Input____01717ca6644567e8a7f8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01717ca6644567e8a7f8);

// :_instance_of_Runnable_Output____01717ca712d7407fd246 - padded string
db.newInstance(_instance_of_Runnable_Output____01717ca712d7407fd246)
    .setModelTag('0168a431d25001540002') // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'padded string',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____01717ca712d7407fd246);
db.assign(_instance_of_Runnable_Output____01717ca712d7407fd246, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____01717ca712d7407fd246);

// :_instance_of_Documentation_Function_Metadata_d0c17ca65ebd013b34ff
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c17ca65ebd013b34ff)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]: "",
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]: "## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01717ca66035bc2388df-s | String | String to pad. |\n| 01717ca6619db4e387f7-length | Number | Output string length. |\n",
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]: "## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01717ca712d7407fd246-padded string | String | Padded string. |\n",
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]: "## Description\nMethod pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string.\nUse padEnd js function. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\n",
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]: "Pads the current string from the end with a given string and returns a new string of the provided length",
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c17ca65ebd013b34ff);
db.assign(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c17ca65ebd013b34ff);
db.assign(_instance_of_Documentation_Function_Metadata_d0c17ca65ebd013b34ff, _Object_gooRel_ff022000000000000003, _instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff);

// TODO: Assigning to a Folder. Check this!
let parentFolder = _Text_0178445ee2a56bf00fd6; // Core/Text
db.assignOptional(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff, _Object_gooRel_ff022000000000000003, parentFolder);
db.assignOptional(parentFolder, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff);
db.assignOptional(_instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff, _GOO_parentGooRel_ff02200000000000000u, parentFolder);
db.assignOptional(parentFolder, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____PadEndOfString_01717ca65ebd013b34ff);                
