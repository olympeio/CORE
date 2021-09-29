
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';
const _String_ff021000000000000011             = 'ff021000000000000011';


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
const _instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200 = db.assignTag('017188985cc5ec13b200');
const _instance_of_Runnable_Input____List_017188985cc5ec13b210 = db.assignTag('017188985cc5ec13b210');
const _instance_of_Runnable_Output____Tag_017188985cc5ec13b220 = db.assignTag('017188985cc5ec13b220');
const _instance_of_Documentation_017b35893b5213ec3e29 = db.assignTag('017b35893b5213ec3e29');
const _instance_of_Documentation_017b35893f2864eea372 = db.assignTag('017b35893f2864eea372');
const _instance_of_Documentation_017b358942724a556567 = db.assignTag('017b358942724a556567');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200
db.newModel(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200, 'List For Each Removed Entries') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'List For Each Removed Entries',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200);
// :_instance_of_Runnable_Input____List_017188985cc5ec13b210
db.newInstance(_instance_of_Runnable_Input____List_017188985cc5ec13b210)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'List',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Tag_017188985cc5ec13b220
db.newInstance(_instance_of_Runnable_Output____Tag_017188985cc5ec13b220)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Tag',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b5213ec3e29
db.newInstance(_instance_of_Documentation_017b35893b5213ec3e29)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Watch a list for entries deletion, outputting the tag of each entry that has been removed from the list.\n\nContinuously get the tags of entries that get deleted. Tags of entries removed before the first execution of the function will not be returned.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Watch a list and continuously return the tags of entries that get deleted.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f2864eea372
db.newInstance(_instance_of_Documentation_017b35893f2864eea372)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The list to watch for entries deletion.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942724a556567
db.newInstance(_instance_of_Documentation_017b358942724a556567)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Tag of the last entry removed (if any was removed after the brick has started executing).',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____List_017188985cc5ec13b210);
db.assign(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Tag_017188985cc5ec13b220);
db.assign(_instance_of_Runnable_Input____List_017188985cc5ec13b210, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Output____Tag_017188985cc5ec13b220, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893b5213ec3e29   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200);
db.assign(_instance_of_Documentation_017b35893f2864eea372   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____List_017188985cc5ec13b210);
db.assign(_instance_of_Documentation_017b358942724a556567   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Tag_017188985cc5ec13b220);
db.assign(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____List_017188985cc5ec13b210);
db.assign(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Tag_017188985cc5ec13b220);
db.assign(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b5213ec3e29   );
db.assign(_instance_of_Runnable_Input____List_017188985cc5ec13b210, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f2864eea372   );
db.assign(_instance_of_Runnable_Output____Tag_017188985cc5ec13b220, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942724a556567   );
db.assignOptional(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____List_For_Each_Removed_Entries_017188985cc5ec13b200);
