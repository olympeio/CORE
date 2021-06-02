
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Number_ff021000000000000013             = 'ff021000000000000013';
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
const _instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43 = db.assignTag('01717d5f60be1607fb43');
const _instance_of_Runnable_Input____Object_list_01717d5f944ebf8d73aa = db.assignTag('01717d5f944ebf8d73aa');
const _instance_of_Runnable_Input____Start_01717d5f9bfe70ae5790 = db.assignTag('01717d5f9bfe70ae5790');
const _instance_of_Runnable_Input____End_01717d5fa634e9910dde = db.assignTag('01717d5fa634e9910dde');
const _instance_of_Runnable_Output____Sublist_01717d5fb0a46ea7d586 = db.assignTag('01717d5fb0a46ea7d586');
const _instance_of_Documentation_Function_Metadata_d0c17d5f60be1607fb43 = db.assignTag('d0c17d5f60be1607fb43');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43
db.newModel(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43, 'Filter List Range') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Filter List Range',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43);
// :_instance_of_Runnable_Input____Object_list_01717d5f944ebf8d73aa
db.newInstance(_instance_of_Runnable_Input____Object_list_01717d5f944ebf8d73aa)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Object list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Start_01717d5f9bfe70ae5790
db.newInstance(_instance_of_Runnable_Input____Start_01717d5f9bfe70ae5790)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Start',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____End_01717d5fa634e9910dde
db.newInstance(_instance_of_Runnable_Input____End_01717d5fa634e9910dde)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'End',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Sublist_01717d5fb0a46ea7d586
db.newInstance(_instance_of_Runnable_Output____Sublist_01717d5fb0a46ea7d586)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Sublist',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c17d5f60be1607fb43
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c17d5f60be1607fb43)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01717d5f944ebf8d73aa-Object list | List | The list from which to take objects. |\n| 01717d5f9bfe70ae5790-Start | Number | Lower range index. |\n| 01717d5fa634e9910dde-End | Number | Upper range index. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01717d5fb0a46ea7d586-Sublist | List | The sublist. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nGet objects from a list in a specific range. All items with a rank going from `Start` to `End` (limits included) are\nincluded in the output list.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Get a sub-list by rank',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Object_list_01717d5f944ebf8d73aa);
db.assign(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Start_01717d5f9bfe70ae5790);
db.assign(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____End_01717d5fa634e9910dde);
db.assign(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Sublist_01717d5fb0a46ea7d586);
db.assign(_instance_of_Runnable_Input____Object_list_01717d5f944ebf8d73aa, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____Start_01717d5f9bfe70ae5790, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____End_01717d5fa634e9910dde, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____Sublist_01717d5fb0a46ea7d586, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c17d5f60be1607fb43);
db.assign(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Object_list_01717d5f944ebf8d73aa);
db.assign(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Start_01717d5f9bfe70ae5790);
db.assign(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____End_01717d5fa634e9910dde);
db.assign(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Sublist_01717d5fb0a46ea7d586);
db.assign(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c17d5f60be1607fb43);
db.assignOptional(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Filter_List_Range_01717d5f60be1607fb43);
