
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Object_ff021000000000000001             = 'ff021000000000000001';
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
const _instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500 = db.assignTag('01718897a585de88f500');
const _instance_of_Runnable_Input____List_01718897a585de88f510 = db.assignTag('01718897a585de88f510');
const _instance_of_Runnable_Output____Entry_01718897a585de88f520 = db.assignTag('01718897a585de88f520');
const _instance_of_Documentation_Function_Metadata_d0c18897a585de88f500 = db.assignTag('d0c18897a585de88f500');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500
db.newModel(_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500, 'List For Each Entries') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'List For Each Entries',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500);
// :_instance_of_Runnable_Input____List_01718897a585de88f510
db.newInstance(_instance_of_Runnable_Input____List_01718897a585de88f510)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'List',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Entry_01718897a585de88f520
db.newInstance(_instance_of_Runnable_Output____Entry_01718897a585de88f520)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Entry',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_d0c18897a585de88f500
db.newInstance(_instance_of_Documentation_Function_Metadata_d0c18897a585de88f500)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01718897a585de88f510-List | List | The list from which to get entries. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01718897a585de88f520-Entry | Object | A single list entry. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nGet all entries of a list. First, get all entries existing before the execution of this function. Then, continuously\nget all new entries added to the watched list.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Get all existing entries of a list and watch for new entries.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____List_01718897a585de88f510);
db.assign(_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Entry_01718897a585de88f520);
db.assign(_instance_of_Runnable_Input____List_01718897a585de88f510, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Output____Entry_01718897a585de88f520, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_d0c18897a585de88f500);
db.assign(_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____List_01718897a585de88f510);
db.assign(_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Entry_01718897a585de88f520);
db.assign(_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_d0c18897a585de88f500);
db.assignOptional(_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____List_For_Each_Entries_01718897a585de88f500);
