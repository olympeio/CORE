
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Date$_47_$Time_ff021000000000000014     = 'ff021000000000000014';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
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
const _instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9 = db.assignTag('01783b82c11991d09ae9');
const _instance_of_Runnable_Input____date_01783b8648ec3231babd = db.assignTag('01783b8648ec3231babd');
const _instance_of_Runnable_Input____years_01783b86608e906c797f = db.assignTag('01783b86608e906c797f');
const _instance_of_Runnable_Input____months_01783b8672a97e0230cd = db.assignTag('01783b8672a97e0230cd');
const _instance_of_Runnable_Input____days_01783b8683ef220d19d4 = db.assignTag('01783b8683ef220d19d4');
const _instance_of_Runnable_Input____weeks_01783b86a1339cad6a30 = db.assignTag('01783b86a1339cad6a30');
const _instance_of_Runnable_Input____hours_01783b86b61364c94e86 = db.assignTag('01783b86b61364c94e86');
const _instance_of_Runnable_Input____minutes_01783b86c5add1e3c379 = db.assignTag('01783b86c5add1e3c379');
const _instance_of_Runnable_Input____seconds_01783b86d417abf72231 = db.assignTag('01783b86d417abf72231');
const _instance_of_Runnable_Output____new_date_01783b8929553c081da8 = db.assignTag('01783b8929553c081da8');
const _instance_of_Documentation_017b35893b31a785d7bc = db.assignTag('017b35893b31a785d7bc');
const _instance_of_Documentation_017b35893efa082531ea = db.assignTag('017b35893efa082531ea');
const _instance_of_Documentation_017b35893efc68f13984 = db.assignTag('017b35893efc68f13984');
const _instance_of_Documentation_017b35893f0538ada486 = db.assignTag('017b35893f0538ada486');
const _instance_of_Documentation_017b35893f06b4ed49d2 = db.assignTag('017b35893f06b4ed49d2');
const _instance_of_Documentation_017b35893f086ce09ac4 = db.assignTag('017b35893f086ce09ac4');
const _instance_of_Documentation_017b35893f09c39cd629 = db.assignTag('017b35893f09c39cd629');
const _instance_of_Documentation_017b35893f0ae9a4bbfd = db.assignTag('017b35893f0ae9a4bbfd');
const _instance_of_Documentation_017b35893f0c7dddc8d9 = db.assignTag('017b35893f0c7dddc8d9');
const _instance_of_Documentation_017b3589426d28cd77b9 = db.assignTag('017b3589426d28cd77b9');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Datetime_0179b2690f49a1f52652           = '0179b2690f49a1f52652';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9
db.newModel(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, 'DateTime Add') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'DateTime Add',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9);
// :_instance_of_Runnable_Input____date_01783b8648ec3231babd
db.newInstance(_instance_of_Runnable_Input____date_01783b8648ec3231babd)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'date',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____years_01783b86608e906c797f
db.newInstance(_instance_of_Runnable_Input____years_01783b86608e906c797f)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'years',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:0,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____months_01783b8672a97e0230cd
db.newInstance(_instance_of_Runnable_Input____months_01783b8672a97e0230cd)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'months',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:0,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____days_01783b8683ef220d19d4
db.newInstance(_instance_of_Runnable_Input____days_01783b8683ef220d19d4)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'days',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:0,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____weeks_01783b86a1339cad6a30
db.newInstance(_instance_of_Runnable_Input____weeks_01783b86a1339cad6a30)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'weeks',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:0,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:4,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____hours_01783b86b61364c94e86
db.newInstance(_instance_of_Runnable_Input____hours_01783b86b61364c94e86)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'hours',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:0,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:5,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____minutes_01783b86c5add1e3c379
db.newInstance(_instance_of_Runnable_Input____minutes_01783b86c5add1e3c379)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'minutes',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:0,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:6,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____seconds_01783b86d417abf72231
db.newInstance(_instance_of_Runnable_Input____seconds_01783b86d417abf72231)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'seconds',
        [_Runnable_Input_Default_Value_01740c5d4ae4b520dd02]:0,
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:7,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____new_date_01783b8929553c081da8
db.newInstance(_instance_of_Runnable_Output____new_date_01783b8929553c081da8)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'new date',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b31a785d7bc
db.newInstance(_instance_of_Documentation_017b35893b31a785d7bc)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Adds an amount of days, months, years, weeks, hours, minutes and seconds to a datetime object.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'DateTime Add',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893efa082531ea
db.newInstance(_instance_of_Documentation_017b35893efa082531ea)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The initial `DateTime`.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893efc68f13984
db.newInstance(_instance_of_Documentation_017b35893efc68f13984)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The years to add.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f0538ada486
db.newInstance(_instance_of_Documentation_017b35893f0538ada486)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The months to add.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f06b4ed49d2
db.newInstance(_instance_of_Documentation_017b35893f06b4ed49d2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The seconds to add.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f086ce09ac4
db.newInstance(_instance_of_Documentation_017b35893f086ce09ac4)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The minutes to add.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f09c39cd629
db.newInstance(_instance_of_Documentation_017b35893f09c39cd629)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The hours to add.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f0ae9a4bbfd
db.newInstance(_instance_of_Documentation_017b35893f0ae9a4bbfd)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The days to add.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f0c7dddc8d9
db.newInstance(_instance_of_Documentation_017b35893f0c7dddc8d9)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The weeks to add.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589426d28cd77b9
db.newInstance(_instance_of_Documentation_017b3589426d28cd77b9)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The resulting `DateTime`.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____date_01783b8648ec3231babd);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____years_01783b86608e906c797f);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____months_01783b8672a97e0230cd);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____days_01783b8683ef220d19d4);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____weeks_01783b86a1339cad6a30);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____hours_01783b86b61364c94e86);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____minutes_01783b86c5add1e3c379);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____seconds_01783b86d417abf72231);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____new_date_01783b8929553c081da8);
db.assign(_instance_of_Runnable_Input____date_01783b8648ec3231babd, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Input____years_01783b86608e906c797f, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____months_01783b8672a97e0230cd, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____days_01783b8683ef220d19d4, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____weeks_01783b86a1339cad6a30, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____hours_01783b86b61364c94e86, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____minutes_01783b86c5add1e3c379, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____seconds_01783b86d417abf72231, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____new_date_01783b8929553c081da8, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Documentation_017b35893b31a785d7bc   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9);
db.assign(_instance_of_Documentation_017b35893efa082531ea   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____date_01783b8648ec3231babd);
db.assign(_instance_of_Documentation_017b35893efc68f13984   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____years_01783b86608e906c797f);
db.assign(_instance_of_Documentation_017b35893f0538ada486   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____months_01783b8672a97e0230cd);
db.assign(_instance_of_Documentation_017b35893f06b4ed49d2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____seconds_01783b86d417abf72231);
db.assign(_instance_of_Documentation_017b35893f086ce09ac4   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____minutes_01783b86c5add1e3c379);
db.assign(_instance_of_Documentation_017b35893f09c39cd629   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____hours_01783b86b61364c94e86);
db.assign(_instance_of_Documentation_017b35893f0ae9a4bbfd   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____days_01783b8683ef220d19d4);
db.assign(_instance_of_Documentation_017b35893f0c7dddc8d9   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____weeks_01783b86a1339cad6a30);
db.assign(_instance_of_Documentation_017b3589426d28cd77b9   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____new_date_01783b8929553c081da8);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____date_01783b8648ec3231babd);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____years_01783b86608e906c797f);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____months_01783b8672a97e0230cd);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____days_01783b8683ef220d19d4);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____weeks_01783b86a1339cad6a30);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____hours_01783b86b61364c94e86);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____minutes_01783b86c5add1e3c379);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____seconds_01783b86d417abf72231);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____new_date_01783b8929553c081da8);
db.assign(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b31a785d7bc   );
db.assign(_instance_of_Runnable_Input____date_01783b8648ec3231babd, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893efa082531ea   );
db.assign(_instance_of_Runnable_Input____years_01783b86608e906c797f, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893efc68f13984   );
db.assign(_instance_of_Runnable_Input____months_01783b8672a97e0230cd, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f0538ada486   );
db.assign(_instance_of_Runnable_Input____days_01783b8683ef220d19d4, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f0ae9a4bbfd   );
db.assign(_instance_of_Runnable_Input____weeks_01783b86a1339cad6a30, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f0c7dddc8d9   );
db.assign(_instance_of_Runnable_Input____hours_01783b86b61364c94e86, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f09c39cd629   );
db.assign(_instance_of_Runnable_Input____minutes_01783b86c5add1e3c379, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f086ce09ac4   );
db.assign(_instance_of_Runnable_Input____seconds_01783b86d417abf72231, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f06b4ed49d2   );
db.assign(_instance_of_Runnable_Output____new_date_01783b8929553c081da8, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589426d28cd77b9   );
db.assignOptional(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _Object_gooRel_ff022000000000000003, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9, _GOO_parentGooRel_ff02200000000000000u, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____DateTime_Add_01783b82c11991d09ae9);
