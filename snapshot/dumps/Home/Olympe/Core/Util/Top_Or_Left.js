
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001 = '01621fb84e320000f001';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Top_Or_Left_016f8f7c09e96f326d3d = db.assignTag('016f8f7c09e96f326d3d');
const _instance_of_Runnable_Output____result_016f8f7c155f88fa65ea = db.assignTag('016f8f7c155f88fa65ea');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Util_0179b26a12e03686de9c               = '0179b26a12e03686de9c';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Top_Or_Left_016f8f7c09e96f326d3d
db.newModel(_instance_of_Coded_Function_model____Top_Or_Left_016f8f7c09e96f326d3d, 'Top Or Left') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Top_Or_Left_016f8f7c09e96f326d3d, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Top Or Left',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Top_Or_Left_016f8f7c09e96f326d3d);
// :_instance_of_Runnable_Output____result_016f8f7c155f88fa65ea
db.newInstance(_instance_of_Runnable_Output____result_016f8f7c155f88fa65ea)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Top_Or_Left_016f8f7c09e96f326d3d)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'result',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Top_Or_Left_016f8f7c09e96f326d3d, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____result_016f8f7c155f88fa65ea);
db.assign(_instance_of_Runnable_Output____result_016f8f7c155f88fa65ea, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Coded_Function_model____Top_Or_Left_016f8f7c09e96f326d3d, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____result_016f8f7c155f88fa65ea);
db.assignOptional(_instance_of_Coded_Function_model____Top_Or_Left_016f8f7c09e96f326d3d, _Object_gooRel_ff022000000000000003, _Util_0179b26a12e03686de9c);
db.assignOptional(_instance_of_Coded_Function_model____Top_Or_Left_016f8f7c09e96f326d3d, _GOO_parentGooRel_ff02200000000000000u, _Util_0179b26a12e03686de9c);
db.assignOptional(_Util_0179b26a12e03686de9c, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Top_Or_Left_016f8f7c09e96f326d3d);
db.assignOptional(_Util_0179b26a12e03686de9c, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Top_Or_Left_016f8f7c09e96f326d3d);
