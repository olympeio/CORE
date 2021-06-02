
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
let _instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab = db.assignTag('016324f41f20cc166cab');
let _instance_of_Runnable_Input____016324f4209c39571930 = db.assignTag('016324f4209c39571930'); // model
let _instance_of_Runnable_Output____016324f42192417f1643 = db.assignTag('016324f42192417f1643'); // object list
let _instance_of_Documentation_Function_Metadata_d0c324f41f20cc166cab = db.assignTag('d0c324f41f20cc166cab');

// :_instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab
db.newModel(_instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab, 'Get Object List').extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get Object List',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab);

// :_instance_of_Runnable_Input____016324f4209c39571930 - model
db.newInstance(_instance_of_Runnable_Input____016324f4209c39571930)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'model',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____016324f4209c39571930);
db.assign(_instance_of_Runnable_Input____016324f4209c39571930, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , '0162f672366be5ca7a86');
db.assign(_instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____016324f4209c39571930);

// :_instance_of_Runnable_Output____016324f42192417f1643 - object list
db.newInstance(_instance_of_Runnable_Output____016324f42192417f1643)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____016324f42192417f1643);
db.assign(_instance_of_Runnable_Output____016324f42192417f1643, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , '01631aacd8276ea98490');
db.assign(_instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____016324f42192417f1643);

// :_instance_of_Documentation_Function_Metadata_d0c324f41f20cc166cab
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c324f41f20cc166cab)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]: "",
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]: "## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| Model | Model | The model. |\n",
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]: "## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| List | List | The list of instances. |\n",
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]: "## Description\nGets a list of all the instances of a given model.\n",
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]: "Get instances of a model.",
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c324f41f20cc166cab);
db.assign(_instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c324f41f20cc166cab);
db.assign(_instance_of_Documentation_Function_Metadata_d0c324f41f20cc166cab, _Object_gooRel_ff022000000000000003, _instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab);

// TODO: Assigning to a Folder. Check this!
let parentFolder = _List_0179b2685e214c57ba47; // Core/Data/List
db.assignOptional(_instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab, _Object_gooRel_ff022000000000000003, parentFolder);
db.assignOptional(parentFolder, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab);
db.assignOptional(_instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab, _GOO_parentGooRel_ff02200000000000000u, parentFolder);
db.assignOptional(parentFolder, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____GetObjectList_016324f41f20cc166cab);                
