
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
const _Relation_ff021000000000000006           = 'ff021000000000000006';
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
const _instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6 = db.assignTag('017a37f44a27161712a6');
const _instance_of_Runnable_Input____list_017a37f4b9f261c8ca95 = db.assignTag('017a37f4b9f261c8ca95');
const _instance_of_Runnable_Input____relation_017a37f60e34d185f36d = db.assignTag('017a37f60e34d185f36d');
const _instance_of_Runnable_Input____to_origin_017a37f65b570179d52e = db.assignTag('017a37f65b570179d52e');
const _instance_of_Runnable_Input____include_self_017a37f675f02c1c6054 = db.assignTag('017a37f675f02c1c6054');
const _instance_of_Runnable_Output____list_017a37f69a3ddb2249e8 = db.assignTag('017a37f69a3ddb2249e8');
const _instance_of_Documentation_Function_Metadata_017a37f6b6e38d8b9004 = db.assignTag('017a37f6b6e38d8b9004');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6
db.newModel(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, 'List Follow Relation Recursively') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'List Follow Relation Recursively',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6);
// :_instance_of_Runnable_Input____list_017a37f4b9f261c8ca95
db.newInstance(_instance_of_Runnable_Input____list_017a37f4b9f261c8ca95)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____relation_017a37f60e34d185f36d
db.newInstance(_instance_of_Runnable_Input____relation_017a37f60e34d185f36d)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'relation',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____to_origin_017a37f65b570179d52e
db.newInstance(_instance_of_Runnable_Input____to_origin_017a37f65b570179d52e)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'to origin',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____include_self_017a37f675f02c1c6054
db.newInstance(_instance_of_Runnable_Input____include_self_017a37f675f02c1c6054)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'include self',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____list_017a37f69a3ddb2249e8
db.newInstance(_instance_of_Runnable_Output____list_017a37f69a3ddb2249e8)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_017a37f6b6e38d8b9004
db.newInstance(_instance_of_Documentation_Function_Metadata_017a37f6b6e38d8b9004)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 017a37f4b9f261c8ca95-list | List | The list of starting objects. |\n| 017a37f60e34d185f36d-relation | Relation | The relation to follow. |\n| 017a37f65b570179d52e-to origin | Boolean | If true, follow the relation to origin. Otherwise, follow the relation to destination. |\n| 017a37f675f02c1c6054-include self | Boolean | If true, also includes starting object as part of the result. Otherwise, follow the specified relation at least once. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 017a37f69a3ddb2249e8-list | List | The result list. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nThis is the list equivalent of Get Recursive Related. \nIf we have a list containing {a1,a2, a3}, and we have a1-r->b1-r->b5, a2-r->b2, a2-r->b3-r->b6, a3-r->b4, this function returns {b1, b2, b3, b4, b5, b6}. \nIn this example, it follows relations "r" recursively.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Returns the list of objects linked via the given relation recursively for all elements in the list.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____list_017a37f4b9f261c8ca95);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____relation_017a37f60e34d185f36d);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____to_origin_017a37f65b570179d52e);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____include_self_017a37f675f02c1c6054);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____list_017a37f69a3ddb2249e8);
db.assign(_instance_of_Runnable_Input____list_017a37f4b9f261c8ca95, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____relation_017a37f60e34d185f36d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Relation_ff021000000000000006                    );
db.assign(_instance_of_Runnable_Input____to_origin_017a37f65b570179d52e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Input____include_self_017a37f675f02c1c6054, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Output____list_017a37f69a3ddb2249e8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_017a37f6b6e38d8b9004);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____list_017a37f4b9f261c8ca95);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____relation_017a37f60e34d185f36d);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____to_origin_017a37f65b570179d52e);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____include_self_017a37f675f02c1c6054);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____list_017a37f69a3ddb2249e8);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_017a37f6b6e38d8b9004);
db.assignOptional(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____List_Follow_Relation_Recursively_017a37f44a27161712a6);
