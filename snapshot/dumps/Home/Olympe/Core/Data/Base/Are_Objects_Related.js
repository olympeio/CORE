
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Relation_ff021000000000000006           = 'ff021000000000000006';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


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
const _instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71 = db.assignTag('0179ea6dd0a21b45bf71');
const _instance_of_Runnable_Input____origin_0179ea6e875c53829794 = db.assignTag('0179ea6e875c53829794');
const _instance_of_Runnable_Input____destination_0179ea6e985e3fd72b94 = db.assignTag('0179ea6e985e3fd72b94');
const _instance_of_Runnable_Input____relation_0179ea6f01b6bba758c6 = db.assignTag('0179ea6f01b6bba758c6');
const _instance_of_Runnable_Output____related_0179ea6fa14eb09d72cc = db.assignTag('0179ea6fa14eb09d72cc');
const _instance_of_Documentation_017b35893b4a49af3e97 = db.assignTag('017b35893b4a49af3e97');
const _instance_of_Documentation_017b35893f2120c85794 = db.assignTag('017b35893f2120c85794');
const _instance_of_Documentation_017b35893f219e8fb828 = db.assignTag('017b35893f219e8fb828');
const _instance_of_Documentation_017b35893f222a47b0cb = db.assignTag('017b35893f222a47b0cb');
const _instance_of_Documentation_017b358942719d1ab337 = db.assignTag('017b358942719d1ab337');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Base_0179b26837d01a7c3cdc               = '0179b26837d01a7c3cdc';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71
db.newModel(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71, 'Are Objects Related') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Are Objects Related',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71);
// :_instance_of_Runnable_Input____origin_0179ea6e875c53829794
db.newInstance(_instance_of_Runnable_Input____origin_0179ea6e875c53829794)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'origin',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____destination_0179ea6e985e3fd72b94
db.newInstance(_instance_of_Runnable_Input____destination_0179ea6e985e3fd72b94)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'destination',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____relation_0179ea6f01b6bba758c6
db.newInstance(_instance_of_Runnable_Input____relation_0179ea6f01b6bba758c6)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'relation',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____related_0179ea6fa14eb09d72cc
db.newInstance(_instance_of_Runnable_Output____related_0179ea6fa14eb09d72cc)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'related',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b4a49af3e97
db.newInstance(_instance_of_Documentation_017b35893b4a49af3e97)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Check whether two objects are related through a specific relation (relation direction matters)',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Check if objects are related through a relation',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f2120c85794
db.newInstance(_instance_of_Documentation_017b35893f2120c85794)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f219e8fb828
db.newInstance(_instance_of_Documentation_017b35893f219e8fb828)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f222a47b0cb
db.newInstance(_instance_of_Documentation_017b35893f222a47b0cb)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942719d1ab337
db.newInstance(_instance_of_Documentation_017b358942719d1ab337)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____origin_0179ea6e875c53829794);
db.assign(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____destination_0179ea6e985e3fd72b94);
db.assign(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____relation_0179ea6f01b6bba758c6);
db.assign(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____related_0179ea6fa14eb09d72cc);
db.assign(_instance_of_Runnable_Input____origin_0179ea6e875c53829794, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____destination_0179ea6e985e3fd72b94, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____relation_0179ea6f01b6bba758c6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Relation_ff021000000000000006                    );
db.assign(_instance_of_Runnable_Output____related_0179ea6fa14eb09d72cc, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Documentation_017b35893b4a49af3e97   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71);
db.assign(_instance_of_Documentation_017b35893f2120c85794   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____relation_0179ea6f01b6bba758c6);
db.assign(_instance_of_Documentation_017b35893f219e8fb828   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____destination_0179ea6e985e3fd72b94);
db.assign(_instance_of_Documentation_017b35893f222a47b0cb   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____origin_0179ea6e875c53829794);
db.assign(_instance_of_Documentation_017b358942719d1ab337   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____related_0179ea6fa14eb09d72cc);
db.assign(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____origin_0179ea6e875c53829794);
db.assign(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____destination_0179ea6e985e3fd72b94);
db.assign(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____relation_0179ea6f01b6bba758c6);
db.assign(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____related_0179ea6fa14eb09d72cc);
db.assign(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b4a49af3e97   );
db.assign(_instance_of_Runnable_Input____origin_0179ea6e875c53829794, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f222a47b0cb   );
db.assign(_instance_of_Runnable_Input____destination_0179ea6e985e3fd72b94, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f219e8fb828   );
db.assign(_instance_of_Runnable_Input____relation_0179ea6f01b6bba758c6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f2120c85794   );
db.assign(_instance_of_Runnable_Output____related_0179ea6fa14eb09d72cc, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942719d1ab337   );
db.assignOptional(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71, _Object_gooRel_ff022000000000000003, _Base_0179b26837d01a7c3cdc);
db.assignOptional(_instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71, _GOO_parentGooRel_ff02200000000000000u, _Base_0179b26837d01a7c3cdc);
db.assignOptional(_Base_0179b26837d01a7c3cdc, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71);
db.assignOptional(_Base_0179b26837d01a7c3cdc, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Are_Objects_Related_0179ea6dd0a21b45bf71);
