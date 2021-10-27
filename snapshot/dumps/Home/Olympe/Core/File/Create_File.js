
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Control_Flow_016ac63229782039429f       = '016ac63229782039429f';
const _Control_Flow_016ac6322acf67eebfe7       = '016ac6322acf67eebfe7';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
const _File_ff021000000000000030               = 'ff021000000000000030';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
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
const _instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7 = db.assignTag('0177920f48b23cd01af7');
const _instance_of_Control_Flow____Control_Flow_0177920f48b32f13b3c2 = db.assignTag('0177920f48b32f13b3c2');
const _instance_of_Control_Flow____Control_Flow_0177920f48b3c6fabc67 = db.assignTag('0177920f48b3c6fabc67');
const _instance_of_Runnable_Input____content_0177920f78b3a0c3d851 = db.assignTag('0177920f78b3a0c3d851');
const _instance_of_Runnable_Input____file_name_0177920fc702593df90a = db.assignTag('0177920fc702593df90a');
const _instance_of_Runnable_Input____mime_type_0177920ff3bf6674ea18 = db.assignTag('0177920ff3bf6674ea18');
const _instance_of_Runnable_Output____file_0177921028f7dfbc3b46 = db.assignTag('0177921028f7dfbc3b46');
const _instance_of_Runnable_Output____Error_Flow_017792106267c2228d75 = db.assignTag('017792106267c2228d75');
const _instance_of_Documentation_017b35893b38f34abe05 = db.assignTag('017b35893b38f34abe05');
const _instance_of_Documentation_017b35893f157ee573c2 = db.assignTag('017b35893f157ee573c2');
const _instance_of_Documentation_017b35893f15b73d96c7 = db.assignTag('017b35893f15b73d96c7');
const _instance_of_Documentation_017b35893f16d4241fe7 = db.assignTag('017b35893f16d4241fe7');
const _instance_of_Documentation_017b3589426f3d1e1230 = db.assignTag('017b3589426f3d1e1230');
const _instance_of_Documentation_017b358944046ed525c2 = db.assignTag('017b358944046ed525c2');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _File_0179b2692921b321f99d               = '0179b2692921b321f99d';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7
db.newModel(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, 'Create File') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Create File',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7);
// :_instance_of_Control_Flow____Control_Flow_0177920f48b32f13b3c2
db.newInstance(_instance_of_Control_Flow____Control_Flow_0177920f48b32f13b3c2)
    .setModelTag(_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Control_Flow____Control_Flow_0177920f48b3c6fabc67
db.newInstance(_instance_of_Control_Flow____Control_Flow_0177920f48b3c6fabc67)
    .setModelTag(_Control_Flow_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____content_0177920f78b3a0c3d851
db.newInstance(_instance_of_Runnable_Input____content_0177920f78b3a0c3d851)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'content',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____file_name_0177920fc702593df90a
db.newInstance(_instance_of_Runnable_Input____file_name_0177920fc702593df90a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'file name',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____mime_type_0177920ff3bf6674ea18
db.newInstance(_instance_of_Runnable_Input____mime_type_0177920ff3bf6674ea18)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'mime type',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____file_0177921028f7dfbc3b46
db.newInstance(_instance_of_Runnable_Output____file_0177921028f7dfbc3b46)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'file',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_017792106267c2228d75
db.newInstance(_instance_of_Runnable_Output____Error_Flow_017792106267c2228d75)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b38f34abe05
db.newInstance(_instance_of_Documentation_017b35893b38f34abe05)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Create a file instance in the local database from a text content.\n\nThe newly created file is not persisted. Use the brick `Persist Object` to do so.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Create a file from a text content',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f157ee573c2
db.newInstance(_instance_of_Documentation_017b35893f157ee573c2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The name of the file to be created.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f15b73d96c7
db.newInstance(_instance_of_Documentation_017b35893f15b73d96c7)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The content of the file.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f16d4241fe7
db.newInstance(_instance_of_Documentation_017b35893f16d4241fe7)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The MIME type of the file to be created.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589426f3d1e1230
db.newInstance(_instance_of_Documentation_017b3589426f3d1e1230)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The created file.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358944046ed525c2
db.newInstance(_instance_of_Documentation_017b358944046ed525c2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Triggered in case of error upon creating the file.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Control_Flow____Control_Flow_0177920f48b3c6fabc67);
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____content_0177920f78b3a0c3d851);
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____file_name_0177920fc702593df90a);
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____mime_type_0177920ff3bf6674ea18);
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Control_Flow____Control_Flow_0177920f48b32f13b3c2);
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____file_0177921028f7dfbc3b46);
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_017792106267c2228d75);
db.assign(_instance_of_Control_Flow____Control_Flow_0177920f48b32f13b3c2, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Control_Flow____Control_Flow_0177920f48b3c6fabc67, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____content_0177920f78b3a0c3d851, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____file_name_0177920fc702593df90a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Input____mime_type_0177920ff3bf6674ea18, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____file_0177921028f7dfbc3b46, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _File_ff021000000000000030                        );
db.assign(_instance_of_Runnable_Output____Error_Flow_017792106267c2228d75, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Documentation_017b35893b38f34abe05   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7);
db.assign(_instance_of_Documentation_017b35893f157ee573c2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____file_name_0177920fc702593df90a);
db.assign(_instance_of_Documentation_017b35893f15b73d96c7   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____content_0177920f78b3a0c3d851);
db.assign(_instance_of_Documentation_017b35893f16d4241fe7   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____mime_type_0177920ff3bf6674ea18);
db.assign(_instance_of_Documentation_017b3589426f3d1e1230   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____file_0177921028f7dfbc3b46);
db.assign(_instance_of_Documentation_017b358944046ed525c2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Error_Flow_017792106267c2228d75);
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_0177920f48b32f13b3c2);
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_0177920f48b3c6fabc67);
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____content_0177920f78b3a0c3d851);
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____file_name_0177920fc702593df90a);
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____mime_type_0177920ff3bf6674ea18);
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____file_0177921028f7dfbc3b46);
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_017792106267c2228d75);
db.assign(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b38f34abe05   );
db.assign(_instance_of_Runnable_Input____content_0177920f78b3a0c3d851, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f15b73d96c7   );
db.assign(_instance_of_Runnable_Input____file_name_0177920fc702593df90a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f157ee573c2   );
db.assign(_instance_of_Runnable_Input____mime_type_0177920ff3bf6674ea18, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f16d4241fe7   );
db.assign(_instance_of_Runnable_Output____file_0177921028f7dfbc3b46, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589426f3d1e1230   );
db.assign(_instance_of_Runnable_Output____Error_Flow_017792106267c2228d75, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358944046ed525c2   );
db.assignOptional(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _Object_gooRel_ff022000000000000003, _File_0179b2692921b321f99d);
db.assignOptional(_instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7, _GOO_parentGooRel_ff02200000000000000u, _File_0179b2692921b321f99d);
db.assignOptional(_File_0179b2692921b321f99d, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7);
db.assignOptional(_File_0179b2692921b321f99d, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Create_File_0177920f48b23cd01af7);
