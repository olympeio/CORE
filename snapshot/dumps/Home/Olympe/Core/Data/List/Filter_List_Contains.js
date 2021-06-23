
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Property_ff021000000000000005           = 'ff021000000000000005';
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
const _instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81 = db.assignTag('01673ff7ce3169f42a81');
const _instance_of_Runnable_Input____Object_list_01673ff7d46d4b27e020 = db.assignTag('01673ff7d46d4b27e020');
const _instance_of_Runnable_Output____Filtered_list_01673ff7d669957a92c2 = db.assignTag('01673ff7d669957a92c2');
const _instance_of_Runnable_Input____Property_01673ff7d854b3af3d4d = db.assignTag('01673ff7d854b3af3d4d');
const _instance_of_Runnable_Input____Substring_01673ffe809d6815a00a = db.assignTag('01673ffe809d6815a00a');
const _instance_of_Documentation_Function_Metadata_d0c73ff7ce3169f42a81 = db.assignTag('d0c73ff7ce3169f42a81');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81
db.newModel(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81, 'Filter List Contains') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Filter List Contains',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81);
// :_instance_of_Runnable_Input____Object_list_01673ff7d46d4b27e020
db.newInstance(_instance_of_Runnable_Input____Object_list_01673ff7d46d4b27e020)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Object list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Filtered_list_01673ff7d669957a92c2
db.newInstance(_instance_of_Runnable_Output____Filtered_list_01673ff7d669957a92c2)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Filtered list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Property_01673ff7d854b3af3d4d
db.newInstance(_instance_of_Runnable_Input____Property_01673ff7d854b3af3d4d)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Substring_01673ffe809d6815a00a
db.newInstance(_instance_of_Runnable_Input____Substring_01673ffe809d6815a00a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Substring',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c73ff7ce3169f42a81
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c73ff7ce3169f42a81)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| List | List | The list to filter. |\n| 01673ff7d854b3af3d4d-Property | Property | The property to test. |\n| 01673ffe809d6815a00a-Substring | String | The string to look for. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| List | List | The resulting list. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nThis function filters out a list to generate a list that will contain objects from the original only when their\nthe value of the specified string property contains the specified string.\n**Example:** All the customers who\'s first name contains \'John\'.\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Filter on a specific string property containing a specific string.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Object_list_01673ff7d46d4b27e020);
db.assign(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Property_01673ff7d854b3af3d4d);
db.assign(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Substring_01673ffe809d6815a00a);
db.assign(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Filtered_list_01673ff7d669957a92c2);
db.assign(_instance_of_Runnable_Input____Object_list_01673ff7d46d4b27e020, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Output____Filtered_list_01673ff7d669957a92c2, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____Property_01673ff7d854b3af3d4d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Property_ff021000000000000005                    );
db.assign(_instance_of_Runnable_Input____Substring_01673ffe809d6815a00a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c73ff7ce3169f42a81);
db.assign(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Object_list_01673ff7d46d4b27e020);
db.assign(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Filtered_list_01673ff7d669957a92c2);
db.assign(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Property_01673ff7d854b3af3d4d);
db.assign(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Substring_01673ffe809d6815a00a);
db.assign(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c73ff7ce3169f42a81);
db.assignOptional(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Filter_List_Contains_01673ff7ce3169f42a81);
