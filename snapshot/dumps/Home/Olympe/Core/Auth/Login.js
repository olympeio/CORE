
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Coded_Function_01621fb84e320000f011     = '01621fb84e320000f011';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Error_Flow_016eeb5ede9f3094d8f0         = '016eeb5ede9f3094d8f0';
const _Function_Call_0168c6f020f2a96f0000      = '0168c6f020f2a96f0000';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';
const _Runnable_Definition_hardcoded_01692aa71f3108454479 = '01692aa71f3108454479';
const _Runnable_IO_IO_Rank_01740c5d4ae4b520dd01     = '01740c5d4ae4b520dd01';


// Definition of tags of defined relations
const _Folder_itemRel_016a697ef00ce7554692          = '016a697ef00ce7554692';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';
const _Runnable_Definition_Inputs_01621fb84e320000f00a = '01621fb84e320000f00a';
const _Runnable_Definition_Outputs_01621fb84e320000f00b = '01621fb84e320000f00b';
const _Runnable_IO_Type_IO_0168a431d3b9b7438424     = '0168a431d3b9b7438424';




// Definition of tags used for newly created instances
const _instance_of_Coded_Function_model____Login_0163d01778b931d801dd = db.assignTag('0163d01778b931d801dd');
const _instance_of_Runnable_Input____Control_Flow_0163d01778ba31d801dd = db.assignTag('0163d01778ba31d801dd');
const _instance_of_Runnable_Output____On_success_0163d01778bb31d801dd = db.assignTag('0163d01778bb31d801dd');
const _instance_of_Runnable_Input____Username_0163d01798a931804d48 = db.assignTag('0163d01798a931804d48');
const _instance_of_Runnable_Input____Password_0163d017ad3222b9683c = db.assignTag('0163d017ad3222b9683c');
const _instance_of_Runnable_Output____Error_Flow_01783bc16f72a6a3214d = db.assignTag('01783bc16f72a6a3214d');
const _instance_of_Runnable_Output____On_failure_01783bc1d91dd3c19fa4 = db.assignTag('01783bc1d91dd3c19fa4');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Auth_0179b2673490430cc604               = '0179c2af17168811a431';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Function_model____Login_0163d01778b931d801dd
db.newModel(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, 'Login') // tag and name of the model
    .extends(_Function_Call_0168c6f020f2a96f0000).setModelTag(_Coded_Function_01621fb84e320000f011)
    .setProperties({
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        'v'                                     :1
    })
    .done();
db.updateInstance(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, {
    [db.DEFAULT+_Object_name_ff023000000000000011]:'Login',
    'v'                                     :2
});
db.setRootInstanceTag(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd);
// :_instance_of_Runnable_Input____Control_Flow_0163d01778ba31d801dd
db.newInstance(_instance_of_Runnable_Input____Control_Flow_0163d01778ba31d801dd)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____On_success_0163d01778bb31d801dd
db.newInstance(_instance_of_Runnable_Output____On_success_0163d01778bb31d801dd)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'On success',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Username_0163d01798a931804d48
db.newInstance(_instance_of_Runnable_Input____Username_0163d01798a931804d48)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Username',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____Password_0163d017ad3222b9683c
db.newInstance(_instance_of_Runnable_Input____Password_0163d017ad3222b9683c)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Password',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____Error_Flow_01783bc16f72a6a3214d
db.newInstance(_instance_of_Runnable_Output____Error_Flow_01783bc16f72a6a3214d)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Error Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____On_failure_01783bc1d91dd3c19fa4
db.newInstance(_instance_of_Runnable_Output____On_failure_01783bc1d91dd3c19fa4)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'On failure',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Control_Flow_0163d01778ba31d801dd);
db.assign(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Username_0163d01798a931804d48);
db.assign(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____Password_0163d017ad3222b9683c);
db.assign(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____On_success_0163d01778bb31d801dd);
db.assign(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____Error_Flow_01783bc16f72a6a3214d);
db.assign(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____On_failure_01783bc1d91dd3c19fa4);
db.assign(_instance_of_Runnable_Input____Control_Flow_0163d01778ba31d801dd, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Output____On_success_0163d01778bb31d801dd, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____Username_0163d01798a931804d48, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011'                );
db.assign(_instance_of_Runnable_Input____Password_0163d017ad3222b9683c, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , 'ff021000000000000011'                );
db.assign(_instance_of_Runnable_Output____Error_Flow_01783bc16f72a6a3214d, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Error_Flow_016eeb5ede9f3094d8f0                  );
db.assign(_instance_of_Runnable_Output____On_failure_01783bc1d91dd3c19fa4, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Control_Flow_0163d01778ba31d801dd);
db.assign(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____On_success_0163d01778bb31d801dd);
db.assign(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Username_0163d01798a931804d48);
db.assign(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____Password_0163d017ad3222b9683c);
db.assign(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____Error_Flow_01783bc16f72a6a3214d);
db.assign(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____On_failure_01783bc1d91dd3c19fa4);
db.assignOptional(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, _Object_gooRel_ff022000000000000003, _Auth_0179b2673490430cc604);
db.assignOptional(_instance_of_Coded_Function_model____Login_0163d01778b931d801dd, _GOO_parentGooRel_ff02200000000000000u, _Auth_0179b2673490430cc604);
db.assignOptional(_Auth_0179b2673490430cc604, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Function_model____Login_0163d01778b931d801dd);
db.assignOptional(_Auth_0179b2673490430cc604, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Function_model____Login_0163d01778b931d801dd);
