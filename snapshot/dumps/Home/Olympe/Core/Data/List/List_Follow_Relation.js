
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Relation_ff021000000000000006           = 'ff021000000000000006';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
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
const _instance_of_Runnable_Input____is_origin_017a3440130f883e4687 = db.assignTag('016c43a05020a7b25349');


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
// :_instance_of_Runnable_Input____is_origin_017a3440130f883e4687
db.newInstance(_instance_of_Runnable_Input____is_origin_017a3440130f883e4687)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'is origin',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____list_016b74daaf8417112c5e);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____relation_016b74dae3ec42526be7);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____is_origin_017a3440130f883e4687);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____flattened_list_016b74db3b5076fa8238);
db.assign(_instance_of_Runnable_Input____list_016b74daaf8417112c5e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____relation_016b74dae3ec42526be7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Relation_ff021000000000000006                    );
db.assign(_instance_of_Runnable_Output____flattened_list_016b74db3b5076fa8238, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____is_origin_017a3440130f883e4687, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____list_016b74daaf8417112c5e);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____relation_016b74dae3ec42526be7);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____flattened_list_016b74db3b5076fa8238);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____is_origin_017a3440130f883e4687);
db.assignOptional(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3);