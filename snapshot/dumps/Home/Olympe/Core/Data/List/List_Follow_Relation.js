
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Relation_ff021000000000000006           = 'ff021000000000000006';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94 = '01703376c4a81c0e9d94';
const _Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001 = '01621fb84e320000f001';
const _Documentation_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_summary_01703376c4a81c0e9d91   = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Documentation_documentation_01703376c4a81c0e9d93 = '01703376c4a81c0e9d93';
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
const _instance_of_Documentation_017b35893b5348842379 = db.assignTag('017b35893b5348842379');
const _instance_of_Documentation_017b35893f29532e82d6 = db.assignTag('017b35893f29532e82d6');
const _instance_of_Documentation_017b35893f29f6085b70 = db.assignTag('017b35893f29f6085b70');
const _instance_of_Documentation_017b35893f2b229abfc7 = db.assignTag('017b35893f2b229abfc7');
const _instance_of_Documentation_017b35894272ee9ba1a1 = db.assignTag('017b35894272ee9ba1a1');


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
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
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
// :_instance_of_Documentation_017b35893b5348842379
db.newInstance(_instance_of_Documentation_017b35893b5348842379)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'This is the list equivalent of Get Related Objects. If we have a list containing {a1,a2, a3}, and we have a1->b1, a2->b2, a2->b3, a3->b4, this function returns {b1, b2, b3, b4}.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Returns the list of objects linked via the given relation for all elements in the list.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f29532e82d6
db.newInstance(_instance_of_Documentation_017b35893f29532e82d6)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'List of origin objects from which to follow the relation.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f29f6085b70
db.newInstance(_instance_of_Documentation_017b35893f29f6085b70)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'If true, follow the relation to origin. Otherwise, follow the relation to destination.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f2b229abfc7
db.newInstance(_instance_of_Documentation_017b35893f2b229abfc7)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The relation to follow.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35894272ee9ba1a1
db.newInstance(_instance_of_Documentation_017b35894272ee9ba1a1)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'All the objects found.',
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
db.assign(_instance_of_Documentation_017b35893b5348842379   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3);
db.assign(_instance_of_Documentation_017b35893f29532e82d6   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____list_016b74daaf8417112c5e);
db.assign(_instance_of_Documentation_017b35893f29f6085b70   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____to_origin_016c43a05020a7b25349);
db.assign(_instance_of_Documentation_017b35893f2b229abfc7   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____relation_016b74dae3ec42526be7);
db.assign(_instance_of_Documentation_017b35894272ee9ba1a1   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____flattened_list_016b74db3b5076fa8238);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____list_016b74daaf8417112c5e);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____relation_016b74dae3ec42526be7);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____flattened_list_016b74db3b5076fa8238);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____to_origin_016c43a05020a7b25349);
db.assign(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b5348842379   );
db.assign(_instance_of_Runnable_Input____list_016b74daaf8417112c5e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f29532e82d6   );
db.assign(_instance_of_Runnable_Input____relation_016b74dae3ec42526be7, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f2b229abfc7   );
db.assign(_instance_of_Runnable_Output____flattened_list_016b74db3b5076fa8238, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35894272ee9ba1a1   );
db.assign(_instance_of_Runnable_Input____to_origin_016c43a05020a7b25349, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f29f6085b70   );
db.assignOptional(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____List_Follow_Relation_016b74da62846557a6f3);
