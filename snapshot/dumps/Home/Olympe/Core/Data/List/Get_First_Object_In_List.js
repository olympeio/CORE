
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
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
const _instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b = db.assignTag('016324f5c97a5bb2892b');
const _instance_of_Runnable_Input____Object_list_016324f5ca52a188f8ed = db.assignTag('016324f5ca52a188f8ed');
const _instance_of_Runnable_Output____Object_016324f5cb3263fa9242 = db.assignTag('016324f5cb3263fa9242');
const _instance_of_Documentation_017b35893b653d980a41 = db.assignTag('017b35893b653d980a41');
const _instance_of_Documentation_017b3589402138895d1e = db.assignTag('017b3589402138895d1e');
const _instance_of_Documentation_017b3591ac93627157e7 = db.assignTag('017b3591ac93627157e7');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b
db.newModel(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b, 'Get First Object In List') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get First Object In List',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b);
// :_instance_of_Runnable_Input____Object_list_016324f5ca52a188f8ed
db.newInstance(_instance_of_Runnable_Input____Object_list_016324f5ca52a188f8ed)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Object list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Object_016324f5cb3263fa9242
db.newInstance(_instance_of_Runnable_Output____Object_016324f5cb3263fa9242)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b653d980a41
db.newInstance(_instance_of_Documentation_017b35893b653d980a41)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Get the first entry from the provided list.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Get the first entry in a list.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589402138895d1e
db.newInstance(_instance_of_Documentation_017b3589402138895d1e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The first object.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3591ac93627157e7
db.newInstance(_instance_of_Documentation_017b3591ac93627157e7)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The list.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Object_list_016324f5ca52a188f8ed);
db.assign(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Object_016324f5cb3263fa9242);
db.assign(_instance_of_Runnable_Input____Object_list_016324f5ca52a188f8ed, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Output____Object_016324f5cb3263fa9242, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Documentation_017b35893b653d980a41   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b);
db.assign(_instance_of_Documentation_017b3589402138895d1e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Object_016324f5cb3263fa9242);
db.assign(_instance_of_Documentation_017b3591ac93627157e7   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Object_list_016324f5ca52a188f8ed);
db.assign(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Object_list_016324f5ca52a188f8ed);
db.assign(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Object_016324f5cb3263fa9242);
db.assign(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b653d980a41   );
db.assign(_instance_of_Runnable_Input____Object_list_016324f5ca52a188f8ed, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3591ac93627157e7   );
db.assign(_instance_of_Runnable_Output____Object_016324f5cb3263fa9242, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589402138895d1e   );
db.assignOptional(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Get_First_Object_In_List_016324f5c97a5bb2892b);
