
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
let _Data_0179b2681e7d4704e92a               = '0179b2681e7d4704e92a';
let _System_0179b269b5c75228d70f             = '0179b269b5c75228d70f';
let _DateTime_0179b2690f49a1f52652           = '0179b2690f49a1f52652';
let _File_0179b2692921b321f99d               = '0179b2692921b321f99d';
let _UI_0179b269c9b393d21bab                 = '0179b269c9b393d21bab';
let _Util_0179b26a12e03686de9c               = '0179b26a12e03686de9c';


// Definition of tags used for newly created instances
let _instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1 = db.assignTag('01633eb5bdb4e94f82d1');
let _instance_of_Runnable_Input____01633eb5cd14554598b8 = db.assignTag('01633eb5cd14554598b8'); // green
let _instance_of_Runnable_Input____01633eb5cb3bd31e8bcb = db.assignTag('01633eb5cb3bd31e8bcb'); // blue
let _instance_of_Runnable_Input____01633eb5c81dd71a9847 = db.assignTag('01633eb5c81dd71a9847'); // red
let _instance_of_Runnable_Output____01633eb5da2cfac26ee7 = db.assignTag('01633eb5da2cfac26ee7'); // color
let _instance_of_Documentation_Function_Metadata_d0c33eb5bdb4e94f82d1 = db.assignTag('d0c33eb5bdb4e94f82d1');

// :_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1
db.newModel(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1, 'Create Color').extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Create Color',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1);

// :_instance_of_Runnable_Input____01633eb5cd14554598b8 - green
db.newInstance(_instance_of_Runnable_Input____01633eb5cd14554598b8)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'green',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01633eb5cd14554598b8);
db.assign(_instance_of_Runnable_Input____01633eb5cd14554598b8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000013');
db.assign(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01633eb5cd14554598b8);

// :_instance_of_Runnable_Input____01633eb5cb3bd31e8bcb - blue
db.newInstance(_instance_of_Runnable_Input____01633eb5cb3bd31e8bcb)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'blue',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01633eb5cb3bd31e8bcb);
db.assign(_instance_of_Runnable_Input____01633eb5cb3bd31e8bcb, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000013');
db.assign(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01633eb5cb3bd31e8bcb);

// :_instance_of_Runnable_Input____01633eb5c81dd71a9847 - red
db.newInstance(_instance_of_Runnable_Input____01633eb5c81dd71a9847)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'red',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01633eb5c81dd71a9847);
db.assign(_instance_of_Runnable_Input____01633eb5c81dd71a9847, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000013');
db.assign(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01633eb5c81dd71a9847);

// :_instance_of_Runnable_Output____01633eb5da2cfac26ee7 - color
db.newInstance(_instance_of_Runnable_Output____01633eb5da2cfac26ee7)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'color',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____01633eb5da2cfac26ee7);
db.assign(_instance_of_Runnable_Output____01633eb5da2cfac26ee7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000017');
db.assign(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____01633eb5da2cfac26ee7);

// :_instance_of_Documentation_Function_Metadata_d0c33eb5bdb4e94f82d1
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c33eb5bdb4e94f82d1)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]: "",
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]: "## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01633eb5c81dd71a9847-red | Number | Value for the red channel. |\n| 01633eb5cd14554598b8-green | Number | Value for the green channel. |\n| 01633eb5cb3bd31e8bcb-blue | Number | Value for the blue channel. |\n",
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]: "## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01633eb5da2cfac26ee7-color | Color | The created color. |\n",
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]: "## Description\nCreates a color based on the 3 RGB values provided.\nEach value has to be in the 0 - 255 range.\n\n",
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]: "Create a color.",
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c33eb5bdb4e94f82d1);
db.assign(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c33eb5bdb4e94f82d1);
db.assign(_instance_of_Documentation_Function_Metadata_d0c33eb5bdb4e94f82d1, _Object_gooRel_ff022000000000000003, _instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1);

// TODO: Assigning to a Folder. Check this!
let parentFolder = "0179b26837d01a7c3cdc"; // Core/Data/Base
db.assignOptional(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1, _Object_gooRel_ff022000000000000003, parentFolder);
db.assignOptional(parentFolder, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1);
db.assignOptional(_instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1, _GOO_parentGooRel_ff02200000000000000u, parentFolder);
db.assignOptional(parentFolder, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____CreateColor_01633eb5bdb4e94f82d1);
