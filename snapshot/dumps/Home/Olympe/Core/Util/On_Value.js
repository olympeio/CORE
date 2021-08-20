
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
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
const _instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363 = db.assignTag('016682d396a6b4c97363');
const _instance_of_Runnable_Input____Value_016682d39b0ca1d7b24e = db.assignTag('016682d39b0ca1d7b24e');
const _instance_of_Runnable_Output____Value_016682d39e5e6e49bddf = db.assignTag('016682d39e5e6e49bddf');
const _instance_of_Runnable_Output____Control_flow_016682d3c24de5d614e6 = db.assignTag('016682d3c24de5d614e6');
const _instance_of_Documentation_017b35893ba124cf483c = db.assignTag('017b35893ba124cf483c');
const _instance_of_Documentation_017b35893fb1406e52af = db.assignTag('017b35893fb1406e52af');
const _instance_of_Documentation_017b3589429b2ba5e5dd = db.assignTag('017b3589429b2ba5e5dd');
const _instance_of_Documentation_017b3589429bec791b19 = db.assignTag('017b3589429bec791b19');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Util_0179b26a12e03686de9c               = '0179b26a12e03686de9c';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363
db.newModel(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363, 'On Value') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'On Value',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363);
// :_instance_of_Runnable_Input____Value_016682d39b0ca1d7b24e
db.newInstance(_instance_of_Runnable_Input____Value_016682d39b0ca1d7b24e)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Value_016682d39e5e6e49bddf
db.newInstance(_instance_of_Runnable_Output____Value_016682d39e5e6e49bddf)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Control_flow_016682d3c24de5d614e6
db.newInstance(_instance_of_Runnable_Output____Control_flow_016682d3c24de5d614e6)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ba124cf483c
db.newInstance(_instance_of_Documentation_017b35893ba124cf483c)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'This functions triggers the output control-flow every time the value of the input data-flow changes.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Triggers a control-flow on value change.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893fb1406e52af
db.newInstance(_instance_of_Documentation_017b35893fb1406e52af)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The input data-flow.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589429b2ba5e5dd
db.newInstance(_instance_of_Documentation_017b3589429b2ba5e5dd)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'A replication of the input data-flow.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589429bec791b19
db.newInstance(_instance_of_Documentation_017b3589429bec791b19)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The output control flow.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Value_016682d39b0ca1d7b24e);
db.assign(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Value_016682d39e5e6e49bddf);
db.assign(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Control_flow_016682d3c24de5d614e6);
db.assign(_instance_of_Runnable_Input____Value_016682d39b0ca1d7b24e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Output____Value_016682d39e5e6e49bddf, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Output____Control_flow_016682d3c24de5d614e6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Documentation_017b35893ba124cf483c   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363);
db.assign(_instance_of_Documentation_017b35893fb1406e52af   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Value_016682d39b0ca1d7b24e);
db.assign(_instance_of_Documentation_017b3589429b2ba5e5dd   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Value_016682d39e5e6e49bddf);
db.assign(_instance_of_Documentation_017b3589429bec791b19   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Control_flow_016682d3c24de5d614e6);
db.assign(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Value_016682d39b0ca1d7b24e);
db.assign(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Value_016682d39e5e6e49bddf);
db.assign(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Control_flow_016682d3c24de5d614e6);
db.assign(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ba124cf483c   );
db.assign(_instance_of_Runnable_Input____Value_016682d39b0ca1d7b24e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893fb1406e52af   );
db.assign(_instance_of_Runnable_Output____Value_016682d39e5e6e49bddf, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589429b2ba5e5dd   );
db.assign(_instance_of_Runnable_Output____Control_flow_016682d3c24de5d614e6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589429bec791b19   );
db.assignOptional(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363, _Object_gooRel_ff022000000000000003, _Util_0179b26a12e03686de9c);
db.assignOptional(_instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363, _GOO_parentGooRel_ff02200000000000000u, _Util_0179b26a12e03686de9c);
db.assignOptional(_Util_0179b26a12e03686de9c, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363);
db.assignOptional(_Util_0179b26a12e03686de9c, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____On_Value_016682d396a6b4c97363);
