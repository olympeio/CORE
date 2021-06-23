
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
const _instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3 = db.assignTag('016b74da62846557a6f3');
const _instance_of_Runnable_Input____list_016b74daaf8417112c5e = db.assignTag('016b74daaf8417112c5e');
const _instance_of_Runnable_Input____relation_016b74dae3ec42526be7 = db.assignTag('016b74dae3ec42526be7');
const _instance_of_Runnable_Output____flattened_list_016b74db3b5076fa8238 = db.assignTag('016b74db3b5076fa8238');
const _instance_of_Runnable_Input____to_origin_016c43a05020a7b25349 = db.assignTag('016c43a05020a7b25349');
const _instance_of_Documentation_Function_Metadata_017a37f6dbd07c3d2246 = db.assignTag('017a37f6dbd07c3d2246');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3
db.newModel(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, 'List Follow Relation') // tag and name of the model
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, {
    [db.DEFAULT+_Object_name_ff023000000000000011]:'List Follow Relation',
    'v'                                     :2
});
db.setRootInstanceTag(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3);
// :_instance_of_Runnable_Input____list_016b74daaf8417112c5e
db.newInstance(_instance_of_Runnable_Input____list_016b74daaf8417112c5e)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____relation_016b74dae3ec42526be7
db.newInstance(_instance_of_Runnable_Input____relation_016b74dae3ec42526be7)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'relation',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____flattened_list_016b74db3b5076fa8238
db.newInstance(_instance_of_Runnable_Output____flattened_list_016b74db3b5076fa8238)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'flattened list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____to_origin_016c43a05020a7b25349
db.newInstance(_instance_of_Runnable_Input____to_origin_016c43a05020a7b25349)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'to origin',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_Function_Metadata_017a37f6dbd07c3d2246
db.newInstance(_instance_of_Documentation_Function_Metadata_017a37f6dbd07c3d2246)
    .setModelTag(_Documentation_Function_Metadata_0172c6ae82952a74193c) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3)
    .setNameOrProperties({
        [_Documentation_Function_Metadata_errors_0172c6ae82952a74193f]:'',
        [_Documentation_Function_Metadata_inputs_0172c6ae82952a74193d]:'## Inputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 016c43a05020a7b25349-to origin | Boolean | If true, follow the relation to origin. Otherwise, follow the relation to destination. |\n| 016b74daaf8417112c5e-list | List | List of origin objects from which to follow the relation. |\n| 016b74dae3ec42526be7-relation | Relation | The relation to follow. |\n',
        [_Documentation_Function_Metadata_outputs_0172c6ae82952a74193e]:'## Outputs\n| Name | Type | Description |\n| --- | :---: | --- |\n| 016b74db3b5076fa8238-flattened list | List | All the objects found. |\n',
        [_Documentation_Metadata_description_01703376c4a81c0e9d92]:'## Description\nThis is the list equivalent of Get Related Objects. If we have a list containing {a1,a2, a3}, and we have a1->b1, a2->b2, a2->b3, a3->b4, this function returns {b1, b2, b3, b4}.\n',
        [_Documentation_Metadata_toolTip_01703376c4a81c0e9d91]:'Returns the list of objects linked via the given relation for all elements in the list.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____list_016b74daaf8417112c5e);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____relation_016b74dae3ec42526be7);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____to_origin_016c43a05020a7b25349);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____flattened_list_016b74db3b5076fa8238);
db.assign(_instance_of_Runnable_Input____list_016b74daaf8417112c5e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____relation_016b74dae3ec42526be7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Relation_ff021000000000000006                    );
db.assign(_instance_of_Runnable_Output____flattened_list_016b74db3b5076fa8238, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____to_origin_016c43a05020a7b25349, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Display_Metadata_$_40_$Runtime$_41_$_documentation_01703376c4a81c0e9d93, _instance_of_Documentation_Function_Metadata_017a37f6dbd07c3d2246);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____list_016b74daaf8417112c5e);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____relation_016b74dae3ec42526be7);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____flattened_list_016b74db3b5076fa8238);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____to_origin_016c43a05020a7b25349);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_Function_Metadata_017a37f6dbd07c3d2246);
db.assignOptional(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3);