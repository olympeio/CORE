
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _UI_Property_0162d3ede786c89fb31b        = '0162d3ede786c89fb31b';


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
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403 = db.assignTag('0179f157cb4687706403');
const _instance_of_Runnable_Input____UI_Property_0179f15976d145ff3123 = db.assignTag('0179f15976d145ff3123');
const _instance_of_Runnable_Input____Value_0179f159bdacf96316c8 = db.assignTag('0179f159bdacf96316c8');
const _instance_of_Documentation_017b35893b328fced844 = db.assignTag('017b35893b328fced844');
const _instance_of_Documentation_017b35893f11611ab12d = db.assignTag('017b35893f11611ab12d');
const _instance_of_Documentation_017b35893f11da276b7e = db.assignTag('017b35893f11da276b7e');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _UI_0179b269c9b393d21bab                 = '0179b269c9b393d21bab';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403
db.newModel(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403, 'Feed UI Property') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Feed UI Property',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403);
// :_instance_of_Runnable_Input____UI_Property_0179f15976d145ff3123
db.newInstance(_instance_of_Runnable_Input____UI_Property_0179f15976d145ff3123)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'UI Property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Value_0179f159bdacf96316c8
db.newInstance(_instance_of_Runnable_Input____Value_0179f159bdacf96316c8)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b328fced844
db.newInstance(_instance_of_Documentation_017b35893b328fced844)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Continuously feeds the value of a UI property with a data flows.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Feeds a UI property with a data flow.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f11611ab12d
db.newInstance(_instance_of_Documentation_017b35893f11611ab12d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The UI property to be updated.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f11da276b7e
db.newInstance(_instance_of_Documentation_017b35893f11da276b7e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The value that the property should take.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____UI_Property_0179f15976d145ff3123);
db.assign(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Value_0179f159bdacf96316c8);
db.assign(_instance_of_Runnable_Input____UI_Property_0179f15976d145ff3123, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _UI_Property_0162d3ede786c89fb31b                 );
db.assign(_instance_of_Runnable_Input____Value_0179f159bdacf96316c8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Documentation_017b35893b328fced844   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403);
db.assign(_instance_of_Documentation_017b35893f11611ab12d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____UI_Property_0179f15976d145ff3123);
db.assign(_instance_of_Documentation_017b35893f11da276b7e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Value_0179f159bdacf96316c8);
db.assign(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____UI_Property_0179f15976d145ff3123);
db.assign(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Value_0179f159bdacf96316c8);
db.assign(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b328fced844   );
db.assign(_instance_of_Runnable_Input____UI_Property_0179f15976d145ff3123, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f11611ab12d   );
db.assign(_instance_of_Runnable_Input____Value_0179f159bdacf96316c8, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f11da276b7e   );
db.assignOptional(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403, _Object_gooRel_ff022000000000000003, _UI_0179b269c9b393d21bab);
db.assignOptional(_instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403, _GOO_parentGooRel_ff02200000000000000u, _UI_0179b269c9b393d21bab);
db.assignOptional(_UI_0179b269c9b393d21bab, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403);
db.assignOptional(_UI_0179b269c9b393d21bab, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Feed_UI_Property_0179f157cb4687706403);