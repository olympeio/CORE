
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Control_Flow_016ac63229782039429f       = '016ac63229782039429f';
const _Control_Flow_016ac6322acf67eebfe7       = '016ac6322acf67eebfe7';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
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
const _instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f = db.assignTag('01681979b58936d73d5f');
const _instance_of_Control_Flow____Control_Flow_01681979b58a36d73d5f = db.assignTag('01681979b58a36d73d5f');
const _instance_of_Control_Flow____Control_Flow_01681979b58b36d73d5f = db.assignTag('01681979b58b36d73d5f');
const _instance_of_Runnable_Input____origin_01681979b8886c1cf3e4 = db.assignTag('01681979b8886c1cf3e4');
const _instance_of_Runnable_Input____relation_01681979ba31e6b4dba8 = db.assignTag('01681979ba31e6b4dba8');
const _instance_of_Runnable_Output____origin_01681979bbb96bbd25ee = db.assignTag('01681979bbb96bbd25ee');
const _instance_of_Documentation_017b35893b6c85c7ff84 = db.assignTag('017b35893b6c85c7ff84');
const _instance_of_Documentation_017b35893f6a3ca08146 = db.assignTag('017b35893f6a3ca08146');
const _instance_of_Documentation_017b35893f6a739da936 = db.assignTag('017b35893f6a739da936');
const _instance_of_Documentation_017b3589427973215f60 = db.assignTag('017b3589427973215f60');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Transaction_0179b26880c1af51a32b        = '0179b26880c1af51a32b';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f
db.newModel(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, 'Delete All Relations') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Delete All Relations',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f);
// :_instance_of_Control_Flow____Control_Flow_01681979b58a36d73d5f
db.newInstance(_instance_of_Control_Flow____Control_Flow_01681979b58a36d73d5f)
    .setModelTag(_Control_Flow_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Control_Flow____Control_Flow_01681979b58b36d73d5f
db.newInstance(_instance_of_Control_Flow____Control_Flow_01681979b58b36d73d5f)
    .setModelTag(_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____origin_01681979b8886c1cf3e4
db.newInstance(_instance_of_Runnable_Input____origin_01681979b8886c1cf3e4)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'origin',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____relation_01681979ba31e6b4dba8
db.newInstance(_instance_of_Runnable_Input____relation_01681979ba31e6b4dba8)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'relation',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____origin_01681979bbb96bbd25ee
db.newInstance(_instance_of_Runnable_Output____origin_01681979bbb96bbd25ee)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'origin',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b6c85c7ff84
db.newInstance(_instance_of_Documentation_017b35893b6c85c7ff84)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Deletes all the relations of the specified type originating from an object.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Deletes all relations from an object.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f6a3ca08146
db.newInstance(_instance_of_Documentation_017b35893f6a3ca08146)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The origin object.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f6a739da936
db.newInstance(_instance_of_Documentation_017b35893f6a739da936)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The relation type.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427973215f60
db.newInstance(_instance_of_Documentation_017b3589427973215f60)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The origin Object.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Control_Flow____Control_Flow_01681979b58a36d73d5f);
db.assign(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____origin_01681979b8886c1cf3e4);
db.assign(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____relation_01681979ba31e6b4dba8);
db.assign(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Control_Flow____Control_Flow_01681979b58b36d73d5f);
db.assign(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____origin_01681979bbb96bbd25ee);
db.assign(_instance_of_Control_Flow____Control_Flow_01681979b58a36d73d5f, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Control_Flow____Control_Flow_01681979b58b36d73d5f, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____origin_01681979b8886c1cf3e4, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____relation_01681979ba31e6b4dba8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Relation_ff021000000000000006                    );
db.assign(_instance_of_Runnable_Output____origin_01681979bbb96bbd25ee, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Documentation_017b35893b6c85c7ff84   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f);
db.assign(_instance_of_Documentation_017b35893f6a3ca08146   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____origin_01681979b8886c1cf3e4);
db.assign(_instance_of_Documentation_017b35893f6a739da936   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____relation_01681979ba31e6b4dba8);
db.assign(_instance_of_Documentation_017b3589427973215f60   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____origin_01681979bbb96bbd25ee);
db.assign(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_01681979b58a36d73d5f);
db.assign(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_01681979b58b36d73d5f);
db.assign(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____origin_01681979b8886c1cf3e4);
db.assign(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____relation_01681979ba31e6b4dba8);
db.assign(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____origin_01681979bbb96bbd25ee);
db.assign(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b6c85c7ff84   );
db.assign(_instance_of_Runnable_Input____origin_01681979b8886c1cf3e4, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f6a3ca08146   );
db.assign(_instance_of_Runnable_Input____relation_01681979ba31e6b4dba8, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f6a739da936   );
db.assign(_instance_of_Runnable_Output____origin_01681979bbb96bbd25ee, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427973215f60   );
db.assignOptional(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, _Object_gooRel_ff022000000000000003, _Transaction_0179b26880c1af51a32b);
db.assignOptional(_instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f, _GOO_parentGooRel_ff02200000000000000u, _Transaction_0179b26880c1af51a32b);
db.assignOptional(_Transaction_0179b26880c1af51a32b, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f);
db.assignOptional(_Transaction_0179b26880c1af51a32b, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Delete_All_Relations_01681979b58936d73d5f);
