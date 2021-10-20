
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Iterator_017c9e01e03e32f25d10           = '017c9e01e03e32f25d10';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';


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
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74 = db.assignTag('017c9e0503c008f8ea74');
const _instance_of_Documentation_017c9e052156780cfb63 = db.assignTag('017c9e052156780cfb63');
const _instance_of_Runnable_Input____list_017c9e0526b0cfe1f12a = db.assignTag('017c9e0526b0cfe1f12a');
const _instance_of_Documentation_017c9e0526dbfceaca61 = db.assignTag('017c9e0526dbfceaca61');
const _instance_of_Runnable_Input____iterator_017c9e052726588db244 = db.assignTag('017c9e052726588db244');
const _instance_of_Documentation_017c9e0527832a749377 = db.assignTag('017c9e0527832a749377');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74
db.newModel(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74, 'For Each') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'For Each',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74);
// :_instance_of_Documentation_017c9e052156780cfb63
db.newInstance(_instance_of_Documentation_017c9e052156780cfb63)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Execute the specified function to each element of the list.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Execute a function for each element of a list.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____list_017c9e0526b0cfe1f12a
db.newInstance(_instance_of_Runnable_Input____list_017c9e0526b0cfe1f12a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017c9e0526dbfceaca61
db.newInstance(_instance_of_Documentation_017c9e0526dbfceaca61)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The list to process',
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____iterator_017c9e052726588db244
db.newInstance(_instance_of_Runnable_Input____iterator_017c9e052726588db244)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'iterator',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017c9e0527832a749377
db.newInstance(_instance_of_Documentation_017c9e0527832a749377)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The function to call for each element of the list',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____list_017c9e0526b0cfe1f12a);
db.assign(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____iterator_017c9e052726588db244);
db.assign(_instance_of_Runnable_Input____list_017c9e0526b0cfe1f12a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____iterator_017c9e052726588db244, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Iterator_017c9e01e03e32f25d10                    );
db.assign(_instance_of_Documentation_017c9e052156780cfb63   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74);
db.assign(_instance_of_Documentation_017c9e0526dbfceaca61   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____list_017c9e0526b0cfe1f12a);
db.assign(_instance_of_Documentation_017c9e0527832a749377   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____iterator_017c9e052726588db244);
db.assign(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017c9e052156780cfb63   );
db.assign(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____list_017c9e0526b0cfe1f12a);
db.assign(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____iterator_017c9e052726588db244);
db.assign(_instance_of_Runnable_Input____list_017c9e0526b0cfe1f12a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017c9e0526dbfceaca61   );
db.assign(_instance_of_Runnable_Input____iterator_017c9e052726588db244, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017c9e0527832a749377   );
db.assignOptional(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____For_Each_017c9e0503c008f8ea74);
