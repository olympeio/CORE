
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
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
const _instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b = db.assignTag('01717d5fbc55ea0d361b');
const _instance_of_Runnable_Input____First_list_01717d5fc85521040181 = db.assignTag('01717d5fc85521040181');
const _instance_of_Runnable_Input____Second_list_01717d5fd1dcb6f93311 = db.assignTag('01717d5fd1dcb6f93311');
const _instance_of_Runnable_Output____Concatenated_list_01717d5fdbab5585897f = db.assignTag('01717d5fdbab5585897f');
const _instance_of_Documentation_Function_Metadata_d0c17d5fbc55ea0d361b = db.assignTag('d0c17d5fbc55ea0d361b');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b
db.newModel(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b, 'Concat List') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        ['01621fb84e320000f001']:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Concat List',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b);
// :_instance_of_Runnable_Input____First_list_01717d5fc85521040181
db.newInstance(_instance_of_Runnable_Input____First_list_01717d5fc85521040181)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'First list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Second_list_01717d5fd1dcb6f93311
db.newInstance(_instance_of_Runnable_Input____Second_list_01717d5fd1dcb6f93311)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Second list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Concatenated_list_01717d5fdbab5585897f
db.newInstance(_instance_of_Runnable_Output____Concatenated_list_01717d5fdbab5585897f)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Concatenated list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c17d5fbc55ea0d361b
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c17d5fbc55ea0d361b)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01717d5fc85521040181-First list | List | First list. |\n| 01717d5fd1dcb6f93311-Second list | List | Second list. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| Concatenated list | List | The concatenation of First and Second list. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nMerge two lists.\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Create a new list that is the concatenation of two lists.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____First_list_01717d5fc85521040181);
db.assign(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Second_list_01717d5fd1dcb6f93311);
db.assign(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Concatenated_list_01717d5fdbab5585897f);
db.assign(_instance_of_Runnable_Input____First_list_01717d5fc85521040181, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____Second_list_01717d5fd1dcb6f93311, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Output____Concatenated_list_01717d5fdbab5585897f, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c17d5fbc55ea0d361b);
db.assign(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____First_list_01717d5fc85521040181);
db.assign(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Second_list_01717d5fd1dcb6f93311);
db.assign(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Concatenated_list_01717d5fdbab5585897f);
db.assign(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c17d5fbc55ea0d361b);
db.assignOptional(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Concat_List_01717d5fbc55ea0d361b);
