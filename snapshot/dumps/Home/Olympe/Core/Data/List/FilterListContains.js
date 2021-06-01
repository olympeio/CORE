
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
let _instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81 = db.assignTag('01673ff7ce3169f42a81');
let _instance_of_Runnable_Input____01673ff7d854b3af3d4d = db.assignTag('01673ff7d854b3af3d4d'); // Property
let _instance_of_Runnable_Input____01673ff7d46d4b27e020 = db.assignTag('01673ff7d46d4b27e020'); // Object list
let _instance_of_Runnable_Input____01673ffe809d6815a00a = db.assignTag('01673ffe809d6815a00a'); // Substring
let _instance_of_Runnable_Output____01673ff7d669957a92c2 = db.assignTag('01673ff7d669957a92c2'); // Filtered list
let _instance_of_Documentation_Function_Metadata_d0c73ff7ce3169f42a81 = db.assignTag('d0c73ff7ce3169f42a81');

// :_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81
db.newModel(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81, 'Filter List Contains').extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Filter List Contains',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81);

// :_instance_of_Runnable_Input____01673ff7d854b3af3d4d - Property
db.newInstance(_instance_of_Runnable_Input____01673ff7d854b3af3d4d)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01673ff7d854b3af3d4d);
db.assign(_instance_of_Runnable_Input____01673ff7d854b3af3d4d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000005');
db.assign(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01673ff7d854b3af3d4d);

// :_instance_of_Runnable_Input____01673ff7d46d4b27e020 - Object list
db.newInstance(_instance_of_Runnable_Input____01673ff7d46d4b27e020)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Object list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01673ff7d46d4b27e020);
db.assign(_instance_of_Runnable_Input____01673ff7d46d4b27e020, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , '01631aacd8276ea98490');
db.assign(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01673ff7d46d4b27e020);

// :_instance_of_Runnable_Input____01673ffe809d6815a00a - Substring
db.newInstance(_instance_of_Runnable_Input____01673ffe809d6815a00a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Substring',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____01673ffe809d6815a00a);
db.assign(_instance_of_Runnable_Input____01673ffe809d6815a00a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011');
db.assign(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____01673ffe809d6815a00a);

// :_instance_of_Runnable_Output____01673ff7d669957a92c2 - Filtered list
db.newInstance(_instance_of_Runnable_Output____01673ff7d669957a92c2)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Filtered list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81, _Runnable_Definition_Outputs_01621fb84e320000f00b  , _instance_of_Runnable_Output____01673ff7d669957a92c2);
db.assign(_instance_of_Runnable_Output____01673ff7d669957a92c2, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , '01631aacd8276ea98490');
db.assign(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____01673ff7d669957a92c2);

// :_instance_of_Documentation_Function_Metadata_d0c73ff7ce3169f42a81
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c73ff7ce3169f42a81)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]: "",
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]: "## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| List | List | The list to filter. |\n| 01673ff7d854b3af3d4d-Property | Property | The property to test. |\n| 01673ffe809d6815a00a-Substring | String | The string to look for. |\n",
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]: "## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| List | List | The resulting list. |\n",
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]: "## Description\nThis function filters out a list to generate a list that will contain objects from the original only when their\nthe value of the specified string property contains the specified string.\n**Example:** All the customers who's first name contains 'John'.\n\n",
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]: "Filter on a specific string property containing a specific string.",
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c73ff7ce3169f42a81);
db.assign(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c73ff7ce3169f42a81);
db.assign(_instance_of_Documentation_Function_Metadata_d0c73ff7ce3169f42a81, _Object_gooRel_ff022000000000000003, _instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81);

// TODO: Assigning to a Folder. Check this!
let parentFolder = _List_0179b2685e214c57ba47; // Core/Data/List
db.assignOptional(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81, _Object_gooRel_ff022000000000000003, parentFolder);
db.assignOptional(parentFolder, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81);
db.assignOptional(_instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81, _GOO_parentGooRel_ff02200000000000000u, parentFolder);
db.assignOptional(parentFolder, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____FilterListContains_01673ff7ce3169f42a81);                
