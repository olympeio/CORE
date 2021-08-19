
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
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
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';


// Definition of tags used for newly created instances 
const _instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715 = db.assignTag('01633f7ff010b741b715');
const _instance_of_Runnable_Output____Browser_01633f7ff30c46b6bfe9 = db.assignTag('01633f7ff30c46b6bfe9');
const _instance_of_Runnable_Output____Browser_Version_01633f7ff47534c95bcc = db.assignTag('01633f7ff47534c95bcc');
const _instance_of_Runnable_Output____OS_01633f7ff5548b6f544d = db.assignTag('01633f7ff5548b6f544d');
const _instance_of_Runnable_Output____OS_Version_01633f7ff62a3456c2f7 = db.assignTag('01633f7ff62a3456c2f7');
const _instance_of_Documentation_017b35893b85be27a3e8 = db.assignTag('017b35893b85be27a3e8');
const _instance_of_Documentation_017b35893f8040caab9b = db.assignTag('017b35893f8040caab9b');
const _instance_of_Documentation_017b35893f8474660375 = db.assignTag('017b35893f8474660375');
const _instance_of_Documentation_017b35893f84ab370308 = db.assignTag('017b35893f84ab370308');
const _instance_of_Documentation_017b35893f85e7b88110 = db.assignTag('017b35893f85e7b88110');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _System_0179b269b5c75228d70f             = '0179b269b5c75228d70f';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715
db.newModel(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715, 'Get Platform Info') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get Platform Info',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715);
// :_instance_of_Runnable_Output____Browser_01633f7ff30c46b6bfe9
db.newInstance(_instance_of_Runnable_Output____Browser_01633f7ff30c46b6bfe9)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Browser',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Browser_Version_01633f7ff47534c95bcc
db.newInstance(_instance_of_Runnable_Output____Browser_Version_01633f7ff47534c95bcc)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Browser Version',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____OS_01633f7ff5548b6f544d
db.newInstance(_instance_of_Runnable_Output____OS_01633f7ff5548b6f544d)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'OS',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____OS_Version_01633f7ff62a3456c2f7
db.newInstance(_instance_of_Runnable_Output____OS_Version_01633f7ff62a3456c2f7)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'OS Version',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b85be27a3e8
db.newInstance(_instance_of_Documentation_017b35893b85be27a3e8)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Retrieves information about the underlying platform, like operating system and browser name.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Get platform information.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f8040caab9b
db.newInstance(_instance_of_Documentation_017b35893f8040caab9b)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The name of the browser.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f8474660375
db.newInstance(_instance_of_Documentation_017b35893f8474660375)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Version information for the browser.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f84ab370308
db.newInstance(_instance_of_Documentation_017b35893f84ab370308)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Operating System name.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f85e7b88110
db.newInstance(_instance_of_Documentation_017b35893f85e7b88110)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Version information for the Operating system.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Browser_01633f7ff30c46b6bfe9);
db.assign(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Browser_Version_01633f7ff47534c95bcc);
db.assign(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____OS_01633f7ff5548b6f544d);
db.assign(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____OS_Version_01633f7ff62a3456c2f7);
db.assign(_instance_of_Runnable_Output____Browser_01633f7ff30c46b6bfe9, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____Browser_Version_01633f7ff47534c95bcc, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____OS_01633f7ff5548b6f544d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Runnable_Output____OS_Version_01633f7ff62a3456c2f7, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _String_ff021000000000000011                      );
db.assign(_instance_of_Documentation_017b35893b85be27a3e8   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715);
db.assign(_instance_of_Documentation_017b35893f8040caab9b   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Browser_01633f7ff30c46b6bfe9);
db.assign(_instance_of_Documentation_017b35893f8474660375   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____Browser_Version_01633f7ff47534c95bcc);
db.assign(_instance_of_Documentation_017b35893f84ab370308   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____OS_01633f7ff5548b6f544d);
db.assign(_instance_of_Documentation_017b35893f85e7b88110   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____OS_Version_01633f7ff62a3456c2f7);
db.assign(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Browser_01633f7ff30c46b6bfe9);
db.assign(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Browser_Version_01633f7ff47534c95bcc);
db.assign(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____OS_01633f7ff5548b6f544d);
db.assign(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____OS_Version_01633f7ff62a3456c2f7);
db.assign(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b85be27a3e8   );
db.assign(_instance_of_Runnable_Output____Browser_01633f7ff30c46b6bfe9, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f8040caab9b   );
db.assign(_instance_of_Runnable_Output____Browser_Version_01633f7ff47534c95bcc, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f8474660375   );
db.assign(_instance_of_Runnable_Output____OS_01633f7ff5548b6f544d, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f84ab370308   );
db.assign(_instance_of_Runnable_Output____OS_Version_01633f7ff62a3456c2f7, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f85e7b88110   );
db.assignOptional(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715, _Object_gooRel_ff022000000000000003, _System_0179b269b5c75228d70f);
db.assignOptional(_instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715, _GOO_parentGooRel_ff02200000000000000u, _System_0179b269b5c75228d70f);
db.assignOptional(_System_0179b269b5c75228d70f, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715);
db.assignOptional(_System_0179b269b5c75228d70f, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Get_Platform_Info_01633f7ff010b741b715);
