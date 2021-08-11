
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


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
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Runnable_Output____Value_0164136be50e6815d144 = db.assignTag('0164136be50e6815d144');
const _instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8 = db.assignTag('0164136be50e7c4cd5a8');
const _instance_of_Runnable_Input____Object_0164136be50e7fa4437d = db.assignTag('0164136be50e7fa4437d');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Base_0179b26837d01a7c3cdc               = '0179b26837d01a7c3cdc';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8
db.newModel(_instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8, 'Get Object Tag') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get Object Tag',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8);
// :_instance_of_Runnable_Output____Value_0164136be50e6815d144
db.newInstance(_instance_of_Runnable_Output____Value_0164136be50e6815d144)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Object_0164136be50e7fa4437d
db.newInstance(_instance_of_Runnable_Input____Object_0164136be50e7fa4437d)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Object_0164136be50e7fa4437d);
db.assign(_instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Value_0164136be50e6815d144);
db.assign(_instance_of_Runnable_Output____Value_0164136be50e6815d144, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____Object_0164136be50e7fa4437d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Value_0164136be50e6815d144);
db.assign(_instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Object_0164136be50e7fa4437d);
db.assignOptional(_instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8, _Object_gooRel_ff022000000000000003, _Base_0179b26837d01a7c3cdc);
db.assignOptional(_instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8, _GOO_parentGooRel_ff02200000000000000u, _Base_0179b26837d01a7c3cdc);
db.assignOptional(_Base_0179b26837d01a7c3cdc, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8);
db.assignOptional(_Base_0179b26837d01a7c3cdc, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Get_Object_Tag_0164136be50e7c4cd5a8);
