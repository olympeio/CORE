
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Property_ff021000000000000005           = 'ff021000000000000005';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


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
const _instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2 = db.assignTag('01673ff7da4292e70fc2');
const _instance_of_Runnable_Input____Object_list_01673ff7dc5b1708770a = db.assignTag('01673ff7dc5b1708770a');
const _instance_of_Runnable_Input____Property_01673ffc1d79db0f3fba = db.assignTag('01673ffc1d79db0f3fba');
const _instance_of_Runnable_Output____Sorted_list_01673ffc1f8945219762 = db.assignTag('01673ffc1f8945219762');
const _instance_of_Runnable_Input____ASC_01673ffc52d8471e5d32 = db.assignTag('01673ffc52d8471e5d32');
const _instance_of_Documentation_Function_Metadata_d0c73ff7da4292e70fc2 = db.assignTag('d0c73ff7da4292e70fc2');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2
db.newModel(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2, 'Sort List') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Sort List',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2);
// :_instance_of_Runnable_Input____Object_list_01673ff7dc5b1708770a
db.newInstance(_instance_of_Runnable_Input____Object_list_01673ff7dc5b1708770a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Object list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Property_01673ffc1d79db0f3fba
db.newInstance(_instance_of_Runnable_Input____Property_01673ffc1d79db0f3fba)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Sorted_list_01673ffc1f8945219762
db.newInstance(_instance_of_Runnable_Output____Sorted_list_01673ffc1f8945219762)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Sorted list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____ASC_01673ffc52d8471e5d32
db.newInstance(_instance_of_Runnable_Input____ASC_01673ffc52d8471e5d32)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'ASC',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c73ff7da4292e70fc2
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c73ff7da4292e70fc2)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01673ff7dc5b1708770a-Object list | List | The list to sort. |\n| 01673ffc1d79db0f3fba-Property | Property | The property of the elements to base the sort on. |\n| 01673ffc52d8471e5d32-ASC | Boolean | `true` to sort in ascending order, `false` for descending. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01673ffc1f8945219762-Sorted list | List | The resulting list. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nGenerate a new list containing the elements of the provided list sorted in ascending or descending order\ndepending on the `asc` parameter.\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Sorts a list.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Object_list_01673ff7dc5b1708770a);
db.assign(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Property_01673ffc1d79db0f3fba);
db.assign(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____ASC_01673ffc52d8471e5d32);
db.assign(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Sorted_list_01673ffc1f8945219762);
db.assign(_instance_of_Runnable_Input____Object_list_01673ff7dc5b1708770a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____Property_01673ffc1d79db0f3fba, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Property_ff021000000000000005                    );
db.assign(_instance_of_Runnable_Output____Sorted_list_01673ffc1f8945219762, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____ASC_01673ffc52d8471e5d32, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c73ff7da4292e70fc2);
db.assign(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Object_list_01673ff7dc5b1708770a);
db.assign(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Property_01673ffc1d79db0f3fba);
db.assign(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Sorted_list_01673ffc1f8945219762);
db.assign(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____ASC_01673ffc52d8471e5d32);
db.assign(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c73ff7da4292e70fc2);
db.assignOptional(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Sort_List_01673ff7da4292e70fc2);
