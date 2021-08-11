
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
const _instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3 = db.assignTag('01783b83a0faa2f101f3');
const _instance_of_Runnable_Input____date_01783b946b4ba26e7384 = db.assignTag('01783b946b4ba26e7384');
const _instance_of_Runnable_Output____year_01783b9497dfd45a657e = db.assignTag('01783b9497dfd45a657e');
const _instance_of_Runnable_Output____month_$_40_$natural$_41_$_01783b951f2ba47ab748 = db.assignTag('01783b951f2ba47ab748');
const _instance_of_Runnable_Output____day_of_the_month_01783b954d0072a8c7cf = db.assignTag('01783b954d0072a8c7cf');
const _instance_of_Runnable_Output____hour_$_40_$24$_45_$format$_41_$_01783b9e8228c9cb31e5 = db.assignTag('01783b9e8228c9cb31e5');
const _instance_of_Runnable_Output____minutes_01783b9e9ce8963ff325 = db.assignTag('01783b9e9ce8963ff325');
const _instance_of_Runnable_Output____seconds_01783b9ea9d4f270eccf = db.assignTag('01783b9ea9d4f270eccf');
const _instance_of_Documentation_017b35893b2e4a580f6e = db.assignTag('017b35893b2e4a580f6e');
const _instance_of_Documentation_017b35893ec5743aef56 = db.assignTag('017b35893ec5743aef56');
const _instance_of_Documentation_017b3589425afc1e7b70 = db.assignTag('017b3589425afc1e7b70');
const _instance_of_Documentation_017b35894266d2d981bf = db.assignTag('017b35894266d2d981bf');
const _instance_of_Documentation_017b3589426722ecdec6 = db.assignTag('017b3589426722ecdec6');
const _instance_of_Documentation_017b358942677acb9f11 = db.assignTag('017b358942677acb9f11');
const _instance_of_Documentation_017b3589426827e72c5f = db.assignTag('017b3589426827e72c5f');
const _instance_of_Documentation_017b358942698aac2bfa = db.assignTag('017b358942698aac2bfa');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Datetime_0179b2690f49a1f52652           = '0179b2690f49a1f52652';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3
db.newModel(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, 'Get DateTime Attributes') // tag and name of the model 
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011) 
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Get DateTime Attributes',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3);
// :_instance_of_Runnable_Input____date_01783b946b4ba26e7384
db.newInstance(_instance_of_Runnable_Input____date_01783b946b4ba26e7384)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'date',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____year_01783b9497dfd45a657e
db.newInstance(_instance_of_Runnable_Output____year_01783b9497dfd45a657e)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'year',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____month_$_40_$natural$_41_$_01783b951f2ba47ab748
db.newInstance(_instance_of_Runnable_Output____month_$_40_$natural$_41_$_01783b951f2ba47ab748)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'month (natural)',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____day_of_the_month_01783b954d0072a8c7cf
db.newInstance(_instance_of_Runnable_Output____day_of_the_month_01783b954d0072a8c7cf)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'day of the month',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____hour_$_40_$24$_45_$format$_41_$_01783b9e8228c9cb31e5
db.newInstance(_instance_of_Runnable_Output____hour_$_40_$24$_45_$format$_41_$_01783b9e8228c9cb31e5)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'hour (24-format)',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:3,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____minutes_01783b9e9ce8963ff325
db.newInstance(_instance_of_Runnable_Output____minutes_01783b9e9ce8963ff325)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'minutes',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:4,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____seconds_01783b9ea9d4f270eccf
db.newInstance(_instance_of_Runnable_Output____seconds_01783b9ea9d4f270eccf)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'seconds',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:5,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b2e4a580f6e
db.newInstance(_instance_of_Documentation_017b35893b2e4a580f6e)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Provides the years, the months, the days, the hours, the minutes and the seconds of a datetime object.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Get the attributes of a datetime.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893ec5743aef56
db.newInstance(_instance_of_Documentation_017b35893ec5743aef56)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The datetime from which we want to get the attributes.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589425afc1e7b70
db.newInstance(_instance_of_Documentation_017b3589425afc1e7b70)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The month of the given datetime.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35894266d2d981bf
db.newInstance(_instance_of_Documentation_017b35894266d2d981bf)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The day of the month of the given datetime.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589426722ecdec6
db.newInstance(_instance_of_Documentation_017b3589426722ecdec6)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The hour of the given datetime.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942677acb9f11
db.newInstance(_instance_of_Documentation_017b358942677acb9f11)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The minutes of the given datetime.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b3589426827e72c5f
db.newInstance(_instance_of_Documentation_017b3589426827e72c5f)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The seconds of the given datetime.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942698aac2bfa
db.newInstance(_instance_of_Documentation_017b358942698aac2bfa)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The year of the given datetime.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____date_01783b946b4ba26e7384);
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____year_01783b9497dfd45a657e);
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____month_$_40_$natural$_41_$_01783b951f2ba47ab748);
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____day_of_the_month_01783b954d0072a8c7cf);
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____hour_$_40_$24$_45_$format$_41_$_01783b9e8228c9cb31e5);
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____minutes_01783b9e9ce8963ff325);
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____seconds_01783b9ea9d4f270eccf);
db.assign(_instance_of_Runnable_Input____date_01783b946b4ba26e7384, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Date$_47_$Time_ff021000000000000014              );
db.assign(_instance_of_Runnable_Output____year_01783b9497dfd45a657e, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____month_$_40_$natural$_41_$_01783b951f2ba47ab748, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____day_of_the_month_01783b954d0072a8c7cf, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____hour_$_40_$24$_45_$format$_41_$_01783b9e8228c9cb31e5, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____minutes_01783b9e9ce8963ff325, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Runnable_Output____seconds_01783b9ea9d4f270eccf, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Number_ff021000000000000013                      );
db.assign(_instance_of_Documentation_017b35893b2e4a580f6e   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3);
db.assign(_instance_of_Documentation_017b35893ec5743aef56   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____date_01783b946b4ba26e7384);
db.assign(_instance_of_Documentation_017b3589425afc1e7b70   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____month_$_40_$natural$_41_$_01783b951f2ba47ab748);
db.assign(_instance_of_Documentation_017b35894266d2d981bf   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____day_of_the_month_01783b954d0072a8c7cf);
db.assign(_instance_of_Documentation_017b3589426722ecdec6   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____hour_$_40_$24$_45_$format$_41_$_01783b9e8228c9cb31e5);
db.assign(_instance_of_Documentation_017b358942677acb9f11   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____minutes_01783b9e9ce8963ff325);
db.assign(_instance_of_Documentation_017b3589426827e72c5f   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____seconds_01783b9ea9d4f270eccf);
db.assign(_instance_of_Documentation_017b358942698aac2bfa   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____year_01783b9497dfd45a657e);
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____date_01783b946b4ba26e7384);
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____year_01783b9497dfd45a657e);
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____month_$_40_$natural$_41_$_01783b951f2ba47ab748);
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____day_of_the_month_01783b954d0072a8c7cf);
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____hour_$_40_$24$_45_$format$_41_$_01783b9e8228c9cb31e5);
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____minutes_01783b9e9ce8963ff325);
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____seconds_01783b9ea9d4f270eccf);
db.assign(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b2e4a580f6e   );
db.assign(_instance_of_Runnable_Input____date_01783b946b4ba26e7384, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893ec5743aef56   );
db.assign(_instance_of_Runnable_Output____year_01783b9497dfd45a657e, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942698aac2bfa   );
db.assign(_instance_of_Runnable_Output____month_$_40_$natural$_41_$_01783b951f2ba47ab748, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589425afc1e7b70   );
db.assign(_instance_of_Runnable_Output____day_of_the_month_01783b954d0072a8c7cf, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35894266d2d981bf   );
db.assign(_instance_of_Runnable_Output____hour_$_40_$24$_45_$format$_41_$_01783b9e8228c9cb31e5, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589426722ecdec6   );
db.assign(_instance_of_Runnable_Output____minutes_01783b9e9ce8963ff325, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942677acb9f11   );
db.assign(_instance_of_Runnable_Output____seconds_01783b9ea9d4f270eccf, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b3589426827e72c5f   );
db.assignOptional(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _Object_gooRel_ff022000000000000003, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3, _GOO_parentGooRel_ff02200000000000000u, _Datetime_0179b2690f49a1f52652);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3);
db.assignOptional(_Datetime_0179b2690f49a1f52652, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Get_DateTime_Attributes_01783b83a0faa2f101f3);
