
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Number_ff021000000000000013             = 'ff021000000000000013';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


// Definition of tags of defined properties
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
const _instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c = db.assignTag('01626bffe70e5120c69c');
const _instance_of_Runnable_Input____s1_01626c0147e6fbba2cb8 = db.assignTag('01626c0147e6fbba2cb8');
const _instance_of_Runnable_Input____s2_01626c02364ed0bc99b4 = db.assignTag('01626c02364ed0bc99b4');
const _instance_of_Runnable_Output____s1_indexOf$_40_$s2$_41_$_01626c02b5e42f5083b8 = db.assignTag('01626c02b5e42f5083b8');
const _instance_of_Documentation_017b35893b99e306b098 = db.assignTag('017b35893b99e306b098');
const _instance_of_Documentation_017b35893f9d3ff7ab6f = db.assignTag('017b35893f9d3ff7ab6f');
const _instance_of_Documentation_017b35893f9d77462011 = db.assignTag('017b35893f9d77462011');
const _instance_of_Documentation_017b35894294973aff6f = db.assignTag('017b35894294973aff6f');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Text_0178445ee2a56bf00fd6               = '0178445ee2a56bf00fd6';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c
db.newModel(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c, 'Index Of') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Index Of',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c);
// :_instance_of_Runnable_Input____s1_01626c0147e6fbba2cb8
db.newInstance(_instance_of_Runnable_Input____s1_01626c0147e6fbba2cb8)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s1',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____s2_01626c02364ed0bc99b4
db.newInstance(_instance_of_Runnable_Input____s2_01626c02364ed0bc99b4)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s2',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____s1_indexOf$_40_$s2$_41_$_01626c02b5e42f5083b8
db.newInstance(_instance_of_Runnable_Output____s1_indexOf$_40_$s2$_41_$_01626c02b5e42f5083b8)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'s1.indexOf(s2)',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b99e306b098
db.newInstance(_instance_of_Documentation_017b35893b99e306b098)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Gets the position of string s2 in string s1. The index starts at zero, and is set to -1 if the substring is not present.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Gets the position of a string inside another one.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f9d3ff7ab6f
db.newInstance(_instance_of_Documentation_017b35893f9d3ff7ab6f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The substring to search for.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f9d77462011
db.newInstance(_instance_of_Documentation_017b35893f9d77462011)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The string to search in.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35894294973aff6f
db.newInstance(_instance_of_Documentation_017b35894294973aff6f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The index.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s1_01626c0147e6fbba2cb8);
db.assign(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____s2_01626c02364ed0bc99b4);
db.assign(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____s1_indexOf$_40_$s2$_41_$_01626c02b5e42f5083b8);
db.assign(_instance_of_Runnable_Input____s1_01626c0147e6fbba2cb8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____s2_01626c02364ed0bc99b4, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____s1_indexOf$_40_$s2$_41_$_01626c02b5e42f5083b8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Documentation_017b35893b99e306b098   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c);
db.assign(_instance_of_Documentation_017b35893f9d3ff7ab6f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____s2_01626c02364ed0bc99b4);
db.assign(_instance_of_Documentation_017b35893f9d77462011   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____s1_01626c0147e6fbba2cb8);
db.assign(_instance_of_Documentation_017b35894294973aff6f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____s1_indexOf$_40_$s2$_41_$_01626c02b5e42f5083b8);
db.assign(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s1_01626c0147e6fbba2cb8);
db.assign(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____s2_01626c02364ed0bc99b4);
db.assign(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____s1_indexOf$_40_$s2$_41_$_01626c02b5e42f5083b8);
db.assign(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b99e306b098   );
db.assign(_instance_of_Runnable_Input____s1_01626c0147e6fbba2cb8, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f9d77462011   );
db.assign(_instance_of_Runnable_Input____s2_01626c02364ed0bc99b4, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f9d3ff7ab6f   );
db.assign(_instance_of_Runnable_Output____s1_indexOf$_40_$s2$_41_$_01626c02b5e42f5083b8, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35894294973aff6f   );
db.assignOptional(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c, _Object_gooRel_ff022000000000000003, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c, _GOO_parentGooRel_ff02200000000000000u, _Text_0178445ee2a56bf00fd6);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c);
db.assignOptional(_Text_0178445ee2a56bf00fd6, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Index_Of_01626bffe70e5120c69c);
