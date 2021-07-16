
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Object_ff021000000000000001             = 'ff021000000000000001';
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
const _instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159 = db.assignTag('016c703cb5ba00f37159');
const _instance_of_Runnable_Input____List_016c703f123abb8565f8 = db.assignTag('016c703f123abb8565f8');
const _instance_of_Runnable_Input____Related_Object_016c703f175aeade384a = db.assignTag('016c703f175aeade384a');
const _instance_of_Runnable_Input____Relation_016c703f1c34815d41c6 = db.assignTag('016c703f1c34815d41c6');
const _instance_of_Runnable_Output____FilteredList_016c703f20dc9942e475 = db.assignTag('016c703f20dc9942e475');
const _instance_of_Runnable_Input____Inverse_Filter_016c9497066358190057 = db.assignTag('016c9497066358190057');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159
db.newModel(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159, 'Filter List Has Related') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        ['01621fb84e320000f001']:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Filter List Has Related',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159);
// :_instance_of_Runnable_Input____List_016c703f123abb8565f8
db.newInstance(_instance_of_Runnable_Input____List_016c703f123abb8565f8)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'List',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Related_Object_016c703f175aeade384a
db.newInstance(_instance_of_Runnable_Input____Related_Object_016c703f175aeade384a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Related Object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Relation_016c703f1c34815d41c6
db.newInstance(_instance_of_Runnable_Input____Relation_016c703f1c34815d41c6)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Relation',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____FilteredList_016c703f20dc9942e475
db.newInstance(_instance_of_Runnable_Output____FilteredList_016c703f20dc9942e475)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'FilteredList',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Inverse_Filter_016c9497066358190057
db.newInstance(_instance_of_Runnable_Input____Inverse_Filter_016c9497066358190057)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Inverse Filter',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____List_016c703f123abb8565f8);
db.assign(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Related_Object_016c703f175aeade384a);
db.assign(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Relation_016c703f1c34815d41c6);
db.assign(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Inverse_Filter_016c9497066358190057);
db.assign(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____FilteredList_016c703f20dc9942e475);
db.assign(_instance_of_Runnable_Input____List_016c703f123abb8565f8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____Related_Object_016c703f175aeade384a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____Relation_016c703f1c34815d41c6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Relation_ff021000000000000006                    );
db.assign(_instance_of_Runnable_Output____FilteredList_016c703f20dc9942e475, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____Inverse_Filter_016c9497066358190057, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____List_016c703f123abb8565f8);
db.assign(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Related_Object_016c703f175aeade384a);
db.assign(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Relation_016c703f1c34815d41c6);
db.assign(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____FilteredList_016c703f20dc9942e475);
db.assign(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Inverse_Filter_016c9497066358190057);
db.assignOptional(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Filter_List_Has_Related_016c703cb5ba00f37159);
