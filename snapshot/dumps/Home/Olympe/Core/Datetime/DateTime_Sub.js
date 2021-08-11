
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
const _instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7 = db.assignTag('01783b82f1ca72dfafa7');
const _instance_of_Runnable_Input____date_01783b8c4515ef3a5fda = db.assignTag('01783b8c4515ef3a5fda');
const _instance_of_Runnable_Input____years_01783b8c5e70d1d6d31b = db.assignTag('01783b8c5e70d1d6d31b');
const _instance_of_Runnable_Input____months_01783b8c6c6ab467035e = db.assignTag('01783b8c6c6ab467035e');
const _instance_of_Runnable_Input____days_01783b8c7e36cb496f90 = db.assignTag('01783b8c7e36cb496f90');
const _instance_of_Runnable_Input____weeks_01783b8c8af5337dbb6a = db.assignTag('01783b8c8af5337dbb6a');
const _instance_of_Runnable_Input____hours_01783b8c992785d8f420 = db.assignTag('01783b8c992785d8f420');
const _instance_of_Runnable_Input____minutes_01783b8ca925b7e8d878 = db.assignTag('01783b8ca925b7e8d878');
const _instance_of_Runnable_Input____seconds_01783b8cb3c874cabbfc = db.assignTag('01783b8cb3c874cabbfc');
const _instance_of_Runnable_Output____new_date_01783b8ccc0a1e5cc74e = db.assignTag('01783b8ccc0a1e5cc74e');
const _instance_of_Documentation_017b35893b2274beb4ec = db.assignTag('017b35893b2274beb4ec');
const _instance_of_Documentation_017b35893ebf5835ab46 = db.assignTag('017b35893ebf5835ab46');
const _instance_of_Documentation_017b35893ec14f10e5e2 = db.assignTag('017b35893ec14f10e5e2');
const _instance_of_Documentation_017b35893ec15bda2785 = db.assignTag('017b35893ec15bda2785');
const _instance_of_Documentation_017b35893ec2ba8fdab3 = db.assignTag('017b35893ec2ba8fdab3');
const _instance_of_Documentation_017b35893ec2d838010a = db.assignTag('017b35893ec2d838010a');
const _instance_of_Documentation_017b35893ec2f10e88c1 = db.assignTag('017b35893ec2f10e88c1');
const _instance_of_Documentation_017b35893ec2f1915d91 = db.assignTag('017b35893ec2f1915d91');
const _instance_of_Documentation_017b35893ec3c68297bc = db.assignTag('017b35893ec3c68297bc');
const _instance_of_Documentation_017b3589425a85429587 = db.assignTag('017b3589425a85429587');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Datetime_0179b2690f49a1f52652           = '0179b2690f49a1f52652';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7
db.newModel(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, 'DateTime Sub') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'DateTime Sub',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7);
// :_instance_of_Runnable_Input____date_01783b8c4515ef3a5fda
db.newInstance(_instance_of_Runnable_Input____date_01783b8c4515ef3a5fda)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'date',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____years_01783b8c5e70d1d6d31b
db.newInstance(_instance_of_Runnable_Input____years_01783b8c5e70d1d6d31b)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'years',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____months_01783b8c6c6ab467035e
db.newInstance(_instance_of_Runnable_Input____months_01783b8c6c6ab467035e)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'months',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____days_01783b8c7e36cb496f90
db.newInstance(_instance_of_Runnable_Input____days_01783b8c7e36cb496f90)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'days',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____weeks_01783b8c8af5337dbb6a
db.newInstance(_instance_of_Runnable_Input____weeks_01783b8c8af5337dbb6a)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'weeks',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:4,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____hours_01783b8c992785d8f420
db.newInstance(_instance_of_Runnable_Input____hours_01783b8c992785d8f420)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'hours',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:5,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____minutes_01783b8ca925b7e8d878
db.newInstance(_instance_of_Runnable_Input____minutes_01783b8ca925b7e8d878)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'minutes',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:6,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____seconds_01783b8cb3c874cabbfc
db.newInstance(_instance_of_Runnable_Input____seconds_01783b8cb3c874cabbfc)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'seconds',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:7,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____new_date_01783b8ccc0a1e5cc74e
db.newInstance(_instance_of_Runnable_Output____new_date_01783b8ccc0a1e5cc74e)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'new date',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b2274beb4ec
db.newInstance(_instance_of_Documentation_017b35893b2274beb4ec)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Removes an amount of days, months, years, weeks, hours, minutes and seconds to a datetime object.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'DateTime Sub',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ebf5835ab46
db.newInstance(_instance_of_Documentation_017b35893ebf5835ab46)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The hours to remove.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec14f10e5e2
db.newInstance(_instance_of_Documentation_017b35893ec14f10e5e2)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The initial `DateTime`.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec15bda2785
db.newInstance(_instance_of_Documentation_017b35893ec15bda2785)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The days to remove.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec2ba8fdab3
db.newInstance(_instance_of_Documentation_017b35893ec2ba8fdab3)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The years to remove.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec2d838010a
db.newInstance(_instance_of_Documentation_017b35893ec2d838010a)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The weeks to remove.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec2f10e88c1
db.newInstance(_instance_of_Documentation_017b35893ec2f10e88c1)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The seconds to remove.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec2f1915d91
db.newInstance(_instance_of_Documentation_017b35893ec2f1915d91)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The minutes to remove.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec3c68297bc
db.newInstance(_instance_of_Documentation_017b35893ec3c68297bc)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The months to remove.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589425a85429587
db.newInstance(_instance_of_Documentation_017b3589425a85429587)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The resulting `DateTime`.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____date_01783b8c4515ef3a5fda);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____years_01783b8c5e70d1d6d31b);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____months_01783b8c6c6ab467035e);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____days_01783b8c7e36cb496f90);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____weeks_01783b8c8af5337dbb6a);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____hours_01783b8c992785d8f420);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____minutes_01783b8ca925b7e8d878);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____seconds_01783b8cb3c874cabbfc);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____new_date_01783b8ccc0a1e5cc74e);
db.assign(_instance_of_Runnable_Input____date_01783b8c4515ef3a5fda, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Input____years_01783b8c5e70d1d6d31b, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____months_01783b8c6c6ab467035e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____days_01783b8c7e36cb496f90, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____weeks_01783b8c8af5337dbb6a, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____hours_01783b8c992785d8f420, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____minutes_01783b8ca925b7e8d878, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Input____seconds_01783b8cb3c874cabbfc, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____new_date_01783b8ccc0a1e5cc74e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Documentation_017b35893b2274beb4ec   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7);
db.assign(_instance_of_Documentation_017b35893ebf5835ab46   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____hours_01783b8c992785d8f420);
db.assign(_instance_of_Documentation_017b35893ec14f10e5e2   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____date_01783b8c4515ef3a5fda);
db.assign(_instance_of_Documentation_017b35893ec15bda2785   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____days_01783b8c7e36cb496f90);
db.assign(_instance_of_Documentation_017b35893ec2ba8fdab3   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____years_01783b8c5e70d1d6d31b);
db.assign(_instance_of_Documentation_017b35893ec2d838010a   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____weeks_01783b8c8af5337dbb6a);
db.assign(_instance_of_Documentation_017b35893ec2f10e88c1   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____seconds_01783b8cb3c874cabbfc);
db.assign(_instance_of_Documentation_017b35893ec2f1915d91   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____minutes_01783b8ca925b7e8d878);
db.assign(_instance_of_Documentation_017b35893ec3c68297bc   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____months_01783b8c6c6ab467035e);
db.assign(_instance_of_Documentation_017b3589425a85429587   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____new_date_01783b8ccc0a1e5cc74e);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____date_01783b8c4515ef3a5fda);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____years_01783b8c5e70d1d6d31b);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____months_01783b8c6c6ab467035e);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____days_01783b8c7e36cb496f90);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____weeks_01783b8c8af5337dbb6a);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____hours_01783b8c992785d8f420);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____minutes_01783b8ca925b7e8d878);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____seconds_01783b8cb3c874cabbfc);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____new_date_01783b8ccc0a1e5cc74e);
db.assign(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b2274beb4ec   );
db.assign(_instance_of_Runnable_Input____date_01783b8c4515ef3a5fda, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec14f10e5e2   );
db.assign(_instance_of_Runnable_Input____years_01783b8c5e70d1d6d31b, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec2ba8fdab3   );
db.assign(_instance_of_Runnable_Input____months_01783b8c6c6ab467035e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec3c68297bc   );
db.assign(_instance_of_Runnable_Input____days_01783b8c7e36cb496f90, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec15bda2785   );
db.assign(_instance_of_Runnable_Input____weeks_01783b8c8af5337dbb6a, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec2d838010a   );
db.assign(_instance_of_Runnable_Input____hours_01783b8c992785d8f420, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ebf5835ab46   );
db.assign(_instance_of_Runnable_Input____minutes_01783b8ca925b7e8d878, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec2f1915d91   );
db.assign(_instance_of_Runnable_Input____seconds_01783b8cb3c874cabbfc, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec2f10e88c1   );
db.assign(_instance_of_Runnable_Output____new_date_01783b8ccc0a1e5cc74e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589425a85429587   );
db.assignOptional(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _Object_gooRel_ff022000000000000003, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7, _GOO_parentGooRel_ff02200000000000000u, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____DateTime_Sub_01783b82f1ca72dfafa7);
