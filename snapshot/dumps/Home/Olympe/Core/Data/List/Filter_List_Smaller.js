
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
const _Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94 = '01703376c4a81c0e9d94';
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
const _instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392 = db.assignTag('01717d5ebd43cb94b392');
const _instance_of_Runnable_Input____Object_list_01717d5ed126dacd2e7a = db.assignTag('01717d5ed126dacd2e7a');
const _instance_of_Runnable_Input____Property_01717d5edb326d365225 = db.assignTag('01717d5edb326d365225');
const _instance_of_Runnable_Input____Value_01717d5ee7e0d5aa6990 = db.assignTag('01717d5ee7e0d5aa6990');
const _instance_of_Runnable_Input____Strict_01717d5ef225972bc053 = db.assignTag('01717d5ef225972bc053');
const _instance_of_Runnable_Output____Filtered_list_01717d5efbeef88300a6 = db.assignTag('01717d5efbeef88300a6');
const _instance_of_Documentation_017b35893b517a471acd = db.assignTag('017b35893b517a471acd');
const _instance_of_Documentation_017b35893f2645b63899 = db.assignTag('017b35893f2645b63899');
const _instance_of_Documentation_017b35893f265fbb547e = db.assignTag('017b35893f265fbb547e');
const _instance_of_Documentation_017b35893f2775f012ea = db.assignTag('017b35893f2775f012ea');
const _instance_of_Documentation_017b35893f28047ecd89 = db.assignTag('017b35893f28047ecd89');
const _instance_of_Documentation_017b3589427235c4a8a4 = db.assignTag('017b3589427235c4a8a4');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392
db.newModel(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, 'Filter List Smaller') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Filter List Smaller',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392);
// :_instance_of_Runnable_Input____Object_list_01717d5ed126dacd2e7a
db.newInstance(_instance_of_Runnable_Input____Object_list_01717d5ed126dacd2e7a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Object list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Property_01717d5edb326d365225
db.newInstance(_instance_of_Runnable_Input____Property_01717d5edb326d365225)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Property',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Value_01717d5ee7e0d5aa6990
db.newInstance(_instance_of_Runnable_Input____Value_01717d5ee7e0d5aa6990)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Value',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Strict_01717d5ef225972bc053
db.newInstance(_instance_of_Runnable_Input____Strict_01717d5ef225972bc053)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Strict',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:true,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Filtered_list_01717d5efbeef88300a6
db.newInstance(_instance_of_Runnable_Output____Filtered_list_01717d5efbeef88300a6)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Filtered list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b517a471acd
db.newInstance(_instance_of_Documentation_017b35893b517a471acd)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'This function filters out a list by comparing a specific object\'s property to a given threshold value. It generates a new list that contains only the objects whose property is smaller (or equal) to the threshold value.\n\nThe following property types are supported: `string`, `number`, and `datetime`.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Return an object list whose specified property value is smaller than the provided value.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f2645b63899
db.newInstance(_instance_of_Documentation_017b35893f2645b63899)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The property to filter on.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f265fbb547e
db.newInstance(_instance_of_Documentation_017b35893f265fbb547e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The list to filter.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f2775f012ea
db.newInstance(_instance_of_Documentation_017b35893f2775f012ea)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The threshold value to compare to.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f28047ecd89
db.newInstance(_instance_of_Documentation_017b35893f28047ecd89)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Whether the inequality must be strict or not.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589427235c4a8a4
db.newInstance(_instance_of_Documentation_017b3589427235c4a8a4)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The resulting list.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Object_list_01717d5ed126dacd2e7a);
db.assign(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Property_01717d5edb326d365225);
db.assign(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Value_01717d5ee7e0d5aa6990);
db.assign(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Strict_01717d5ef225972bc053);
db.assign(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Filtered_list_01717d5efbeef88300a6);
db.assign(_instance_of_Runnable_Input____Object_list_01717d5ed126dacd2e7a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____Property_01717d5edb326d365225, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Property_ff021000000000000005                    );
db.assign(_instance_of_Runnable_Input____Value_01717d5ee7e0d5aa6990, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Input____Strict_01717d5ef225972bc053, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Boolean_ff021000000000000012                     );
db.assign(_instance_of_Runnable_Output____Filtered_list_01717d5efbeef88300a6, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Documentation_017b35893b517a471acd   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392);
db.assign(_instance_of_Documentation_017b35893f2645b63899   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Property_01717d5edb326d365225);
db.assign(_instance_of_Documentation_017b35893f265fbb547e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Object_list_01717d5ed126dacd2e7a);
db.assign(_instance_of_Documentation_017b35893f2775f012ea   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Value_01717d5ee7e0d5aa6990);
db.assign(_instance_of_Documentation_017b35893f28047ecd89   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____Strict_01717d5ef225972bc053);
db.assign(_instance_of_Documentation_017b3589427235c4a8a4   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Filtered_list_01717d5efbeef88300a6);
db.assign(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Object_list_01717d5ed126dacd2e7a);
db.assign(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Property_01717d5edb326d365225);
db.assign(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Value_01717d5ee7e0d5aa6990);
db.assign(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Strict_01717d5ef225972bc053);
db.assign(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Filtered_list_01717d5efbeef88300a6);
db.assign(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b517a471acd   );
db.assign(_instance_of_Runnable_Input____Object_list_01717d5ed126dacd2e7a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f265fbb547e   );
db.assign(_instance_of_Runnable_Input____Property_01717d5edb326d365225, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f2645b63899   );
db.assign(_instance_of_Runnable_Input____Value_01717d5ee7e0d5aa6990, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f2775f012ea   );
db.assign(_instance_of_Runnable_Input____Strict_01717d5ef225972bc053, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f28047ecd89   );
db.assign(_instance_of_Runnable_Output____Filtered_list_01717d5efbeef88300a6, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589427235c4a8a4   );
db.assignOptional(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Filter_List_Smaller_01717d5ebd43cb94b392);