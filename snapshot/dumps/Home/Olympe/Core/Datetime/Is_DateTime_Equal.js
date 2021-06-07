
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Date$_47_$Time_ff021000000000000014     = 'ff021000000000000014';
const _Documentation_Function_Metadata_0172c6ae82952a74193c = '0172c6ae82952a74193c';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
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
const _instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9 = db.assignTag('01783b83d0a24b160fa9');
const _instance_of_Runnable_Input____date_to_compare_01783b93b58136f3ea29 = db.assignTag('01783b93b58136f3ea29');
const _instance_of_Runnable_Input____comparison_date_01783b93c9716edff2ed = db.assignTag('01783b93c9716edff2ed');
const _instance_of_Runnable_Output____is_equal_01783b93e537a19a318d = db.assignTag('01783b93e537a19a318d');
const _instance_of_Documentation_Function_Metadata_01783b93fb596e8c1f7f = db.assignTag('01783b93fb596e8c1f7f');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _DateTime_0179b2690f49a1f52652           = '0179b2690f49a1f52652';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9
db.newModel(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, 'Is DateTime Equal') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Is DateTime Equal',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9);
// :_instance_of_Runnable_Input____date_to_compare_01783b93b58136f3ea29
db.newInstance(_instance_of_Runnable_Input____date_to_compare_01783b93b58136f3ea29)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'date to compare',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____comparison_date_01783b93c9716edff2ed
db.newInstance(_instance_of_Runnable_Input____comparison_date_01783b93c9716edff2ed)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'comparison date',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____is_equal_01783b93e537a19a318d
db.newInstance(_instance_of_Runnable_Output____is_equal_01783b93e537a19a318d)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'is equal',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_01783b93fb596e8c1f7f
db.newInstance(_instance_of_Documentation_Function_Metadata_01783b93fb596e8c1f7f)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01783b93b58136f3ea29-date to compare | Date Time |  |\n| 01783b93c9716edff2ed-comparison date | Date Time |  |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 01783b93e537a19a318d-is equal | Boolean |  |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\n\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Returns true if "date to compare" is chronologically equal to the "comparison date"',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____date_to_compare_01783b93b58136f3ea29);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____comparison_date_01783b93c9716edff2ed);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____is_equal_01783b93e537a19a318d);
db.assign(_instance_of_Runnable_Input____date_to_compare_01783b93b58136f3ea29, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Input____comparison_date_01783b93c9716edff2ed, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Output____is_equal_01783b93e537a19a318d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_01783b93fb596e8c1f7f);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____date_to_compare_01783b93b58136f3ea29);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____comparison_date_01783b93c9716edff2ed);
db.assign(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____is_equal_01783b93e537a19a318d);

// TODO: Assigning to a Folder. Check this!
let parentFolder = _DateTime_0179b2690f49a1f52652; // Core/DateTime
db.assignOptional(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _Object_gooRel_ff022000000000000003, parentFolder);
db.assignOptional(_instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9, _GOO_parentGooRel_ff02200000000000000u, parentFolder);
db.assignOptional(parentFolder, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9);
db.assignOptional(parentFolder, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Is_DateTime_Equal_01783b83d0a24b160fa9);
