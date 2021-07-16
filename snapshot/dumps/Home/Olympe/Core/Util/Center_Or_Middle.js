
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
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
const _instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2 = db.assignTag('016f8a9d9ea15c1f31c2');
const _instance_of_Runnable_Output____result_016f8aa140e84a037378 = db.assignTag('016f8aa140e84a037378');
const _instance_of_Runnable_Input____containerLength_016f8ab7aa1eec9b9f0a = db.assignTag('016f8ab7aa1eec9b9f0a');
const _instance_of_Runnable_Input____elementLength_016f8af383a2db284c53 = db.assignTag('016f8af383a2db284c53');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Util_0179b26a12e03686de9c               = '0179b26a12e03686de9c';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2
db.newModel(_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2, 'Center Or Middle') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        ['01621fb84e320000f001']:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'CenterOrMiddle',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2);
// :_instance_of_Runnable_Output____result_016f8aa140e84a037378
db.newInstance(_instance_of_Runnable_Output____result_016f8aa140e84a037378)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'result',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____containerLength_016f8ab7aa1eec9b9f0a
db.newInstance(_instance_of_Runnable_Input____containerLength_016f8ab7aa1eec9b9f0a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'containerLength',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____elementLength_016f8af383a2db284c53
db.newInstance(_instance_of_Runnable_Input____elementLength_016f8af383a2db284c53)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'elementLength',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____containerLength_016f8ab7aa1eec9b9f0a);
db.assign(_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____elementLength_016f8af383a2db284c53);
db.assign(_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____result_016f8aa140e84a037378);
db.assign(_instance_of_Runnable_Output____result_016f8aa140e84a037378, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____containerLength_016f8ab7aa1eec9b9f0a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____elementLength_016f8af383a2db284c53, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____result_016f8aa140e84a037378);
db.assign(_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____containerLength_016f8ab7aa1eec9b9f0a);
db.assign(_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____elementLength_016f8af383a2db284c53);
db.assignOptional(_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2, _Object_gooRel_ff022000000000000003, _Util_0179b26a12e03686de9c);
db.assignOptional(_instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2, _GOO_parentGooRel_ff02200000000000000u, _Util_0179b26a12e03686de9c);
db.assignOptional(_Util_0179b26a12e03686de9c, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2);
db.assignOptional(_Util_0179b26a12e03686de9c, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Center_Or_Middle_016f8a9d9ea15c1f31c2);
