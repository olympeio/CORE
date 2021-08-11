
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Boolean_ff021000000000000012            = 'ff021000000000000012';
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Property_ff021000000000000005           = 'ff021000000000000005';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001 = '01621fb84e320000f001';
const _Documentation_description_01703376c4a81c0e9d92 = '01703376c4a81c0e9d92';
const _Documentation_summary_01703376c4a81c0e9d91   = '01703376c4a81c0e9d91';
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_Input_Default_Value_01740c5d4ae4b520dd02 = '01740c5d4ae4b520dd02';
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
const _instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb = db.assignTag('01674138206e8fde93fb');
const _instance_of_Runnable_Input____Object_list_0167413827e44cfc8c67 = db.assignTag('0167413827e44cfc8c67');
const _instance_of_Runnable_Input____Property_016741382b450057d5b8 = db.assignTag('016741382b450057d5b8');
const _instance_of_Runnable_Input____Filter_016741382d5e8a926075 = db.assignTag('016741382d5e8a926075');
const _instance_of_Runnable_Output____Filtered_list_016741382f05baf24b56 = db.assignTag('016741382f05baf24b56');
const _instance_of_Runnable_Input____Not_017a15000721099833b6 = db.assignTag('017a15000721099833b6');
const _instance_of_Documentation_017b35893b642859691d = db.assignTag('017b35893b642859691d');
const _instance_of_Documentation_017b35893f5eadc17e2e = db.assignTag('017b35893f5eadc17e2e');
const _instance_of_Documentation_017b35893f5f9ad3a192 = db.assignTag('017b35893f5f9ad3a192');
const _instance_of_Documentation_017b3590fcc489a63b1d = db.assignTag('017b3590fcc489a63b1d');
const _instance_of_Documentation_017b3590fcd6c44dd46e = db.assignTag('017b3590fcd6c44dd46e');
const _instance_of_Documentation_017b3590fcdfd304e222 = db.assignTag('017b3590fcdfd304e222');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb
db.newModel(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, 'Filter List Equals') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Filter List Equals',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb);
// :_instance_of_Runnable_Input____Object_list_0167413827e44cfc8c67
db.newInstance(_instance_of_Runnable_Input____Object_list_0167413827e44cfc8c67)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Object list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Property_016741382b450057d5b8
db.newInstance(_instance_of_Runnable_Input____Property_016741382b450057d5b8)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Filter_016741382d5e8a926075
db.newInstance(_instance_of_Runnable_Input____Filter_016741382d5e8a926075)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Filter',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Filtered_list_016741382f05baf24b56
db.newInstance(_instance_of_Runnable_Output____Filtered_list_016741382f05baf24b56)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Filtered list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Not_017a15000721099833b6
db.newInstance(_instance_of_Runnable_Input____Not_017a15000721099833b6)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Not',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:false,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b642859691d
db.newInstance(_instance_of_Documentation_017b35893b642859691d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'This function filters out a list by comparing a specific object\'s property to a given value. It generates a new list',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Filter on a specific property being equal to the specified value.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f5eadc17e2e
db.newInstance(_instance_of_Documentation_017b35893f5eadc17e2e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The property to test.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f5f9ad3a192
db.newInstance(_instance_of_Documentation_017b35893f5f9ad3a192)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The value to compare with.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3590fcc489a63b1d
db.newInstance(_instance_of_Documentation_017b3590fcc489a63b1d)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The list to filter.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3590fcd6c44dd46e
db.newInstance(_instance_of_Documentation_017b3590fcd6c44dd46e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'If true, inverse the filter predicate.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3590fcdfd304e222
db.newInstance(_instance_of_Documentation_017b3590fcdfd304e222)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The resulting filtered list.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Object_list_0167413827e44cfc8c67);
db.assign(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Property_016741382b450057d5b8);
db.assign(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Filter_016741382d5e8a926075);
db.assign(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Not_017a15000721099833b6);
db.assign(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Filtered_list_016741382f05baf24b56);
db.assign(_instance_of_Runnable_Input____Object_list_0167413827e44cfc8c67, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____Property_016741382b450057d5b8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Property_ff021000000000000005                    );
db.assign(_instance_of_Runnable_Input____Filter_016741382d5e8a926075, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Output____Filtered_list_016741382f05baf24b56, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____Not_017a15000721099833b6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Documentation_017b35893b642859691d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb);
db.assign(_instance_of_Documentation_017b35893f5eadc17e2e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Property_016741382b450057d5b8);
db.assign(_instance_of_Documentation_017b35893f5f9ad3a192   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Filter_016741382d5e8a926075);
db.assign(_instance_of_Documentation_017b3590fcc489a63b1d   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Object_list_0167413827e44cfc8c67);
db.assign(_instance_of_Documentation_017b3590fcd6c44dd46e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Not_017a15000721099833b6);
db.assign(_instance_of_Documentation_017b3590fcdfd304e222   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Filtered_list_016741382f05baf24b56);
db.assign(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Object_list_0167413827e44cfc8c67);
db.assign(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Property_016741382b450057d5b8);
db.assign(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Filter_016741382d5e8a926075);
db.assign(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Filtered_list_016741382f05baf24b56);
db.assign(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Not_017a15000721099833b6);
db.assign(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b642859691d   );
db.assign(_instance_of_Runnable_Input____Object_list_0167413827e44cfc8c67, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3590fcc489a63b1d   );
db.assign(_instance_of_Runnable_Input____Property_016741382b450057d5b8, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f5eadc17e2e   );
db.assign(_instance_of_Runnable_Input____Filter_016741382d5e8a926075, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f5f9ad3a192   );
db.assign(_instance_of_Runnable_Output____Filtered_list_016741382f05baf24b56, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3590fcdfd304e222   );
db.assign(_instance_of_Runnable_Input____Not_017a15000721099833b6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3590fcd6c44dd46e   );
db.assignOptional(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Filter_List_Equals_01674138206e8fde93fb);
