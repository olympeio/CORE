
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
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
const _instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1 = db.assignTag('0171839084d99a3f99e1');
const _instance_of_Runnable_Input____Object_list_017183909e9187282e3f = db.assignTag('017183909e9187282e3f');
const _instance_of_Runnable_Output____Filtered_list_01718390b34847cd00c8 = db.assignTag('01718390b34847cd00c8');
const _instance_of_Documentation_017b35893b62ffd51a6d = db.assignTag('017b35893b62ffd51a6d');
const _instance_of_Documentation_017b35893f5c432eecc1 = db.assignTag('017b35893f5c432eecc1');
const _instance_of_Documentation_017b358942760f83f402 = db.assignTag('017b358942760f83f402');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1
db.newModel(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1, 'Filter List Distinct') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Filter List Distinct',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1);
// :_instance_of_Runnable_Input____Object_list_017183909e9187282e3f
db.newInstance(_instance_of_Runnable_Input____Object_list_017183909e9187282e3f)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Object list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Filtered_list_01718390b34847cd00c8
db.newInstance(_instance_of_Runnable_Output____Filtered_list_01718390b34847cd00c8)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Filtered list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b62ffd51a6d
db.newInstance(_instance_of_Documentation_017b35893b62ffd51a6d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Filter out duplicate items from a list. The object tags are used to identify duplicates.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Filter out duplicate items from a list',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f5c432eecc1
db.newInstance(_instance_of_Documentation_017b35893f5c432eecc1)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'List with duplicate items to filter out.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942760f83f402
db.newInstance(_instance_of_Documentation_017b358942760f83f402)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The filtered list without duplicate items.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Object_list_017183909e9187282e3f);
db.assign(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Filtered_list_01718390b34847cd00c8);
db.assign(_instance_of_Runnable_Input____Object_list_017183909e9187282e3f, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Output____Filtered_list_01718390b34847cd00c8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Documentation_017b35893b62ffd51a6d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1);
db.assign(_instance_of_Documentation_017b35893f5c432eecc1   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Object_list_017183909e9187282e3f);
db.assign(_instance_of_Documentation_017b358942760f83f402   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Filtered_list_01718390b34847cd00c8);
db.assign(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Object_list_017183909e9187282e3f);
db.assign(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Filtered_list_01718390b34847cd00c8);
db.assign(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b62ffd51a6d   );
db.assign(_instance_of_Runnable_Input____Object_list_017183909e9187282e3f, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f5c432eecc1   );
db.assign(_instance_of_Runnable_Output____Filtered_list_01718390b34847cd00c8, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942760f83f402   );
db.assignOptional(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Filter_List_Distinct_0171839084d99a3f99e1);
