
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Number_ff021000000000000013             = 'ff021000000000000013';
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
const _instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3 = db.assignTag('016372362aac07c772f3');
const _instance_of_Runnable_Input____List_016372362d0280ad8b80 = db.assignTag('016372362d0280ad8b80');
const _instance_of_Runnable_Output____Size_016372362df8c2b75160 = db.assignTag('016372362df8c2b75160');
const _instance_of_Documentation_017b35893b56917c3a7d = db.assignTag('017b35893b56917c3a7d');
const _instance_of_Documentation_017b35893f2b94f4aa8a = db.assignTag('017b35893f2b94f4aa8a');
const _instance_of_Documentation_017b3589427385bc838f = db.assignTag('017b3589427385bc838f');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3
db.newModel(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3, 'Get Size Of List') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get Size Of List',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3);
// :_instance_of_Runnable_Input____List_016372362d0280ad8b80
db.newInstance(_instance_of_Runnable_Input____List_016372362d0280ad8b80)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'List',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Size_016372362df8c2b75160
db.newInstance(_instance_of_Runnable_Output____Size_016372362df8c2b75160)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Size',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b56917c3a7d
db.newInstance(_instance_of_Documentation_017b35893b56917c3a7d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Returns the size of the provided list. That is the number of elements in that list.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Gets the number of elements in a list.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f2b94f4aa8a
db.newInstance(_instance_of_Documentation_017b35893f2b94f4aa8a)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The list.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427385bc838f
db.newInstance(_instance_of_Documentation_017b3589427385bc838f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The size of the list.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____List_016372362d0280ad8b80);
db.assign(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Size_016372362df8c2b75160);
db.assign(_instance_of_Runnable_Input____List_016372362d0280ad8b80, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Output____Size_016372362df8c2b75160, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Documentation_017b35893b56917c3a7d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3);
db.assign(_instance_of_Documentation_017b35893f2b94f4aa8a   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____List_016372362d0280ad8b80);
db.assign(_instance_of_Documentation_017b3589427385bc838f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Size_016372362df8c2b75160);
db.assign(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____List_016372362d0280ad8b80);
db.assign(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Size_016372362df8c2b75160);
db.assign(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b56917c3a7d   );
db.assign(_instance_of_Runnable_Input____List_016372362d0280ad8b80, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f2b94f4aa8a   );
db.assign(_instance_of_Runnable_Output____Size_016372362df8c2b75160, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427385bc838f   );
db.assignOptional(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Get_Size_Of_List_016372362aac07c772f3);
