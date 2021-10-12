
// Variable db typed for auto-completion:
db = /**@type {olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Action_Call_0168c6f020f2a96a0000        = '0168c6f020f2a96a0000';
const _Coded_Action_01621fb84e320000f012       = '01621fb84e320000f012';
const _Control_Flow_01621fb84e320000cf00       = '01621fb84e320000cf00';
const _Control_Flow_016ac63229782039429f       = '016ac63229782039429f';
const _Control_Flow_016ac6322acf67eebfe7       = '016ac6322acf67eebfe7';
const _Documentation_01703376c4a81c0e9d90      = '01703376c4a81c0e9d90';
const _List_01631aacd8276ea98490               = '01631aacd8276ea98490';
const _Object_ff021000000000000001             = 'ff021000000000000001';
const _Runnable_Input_0168a431d25001540001     = '0168a431d25001540001';
const _Runnable_Output_0168a431d25001540002    = '0168a431d25001540002';


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
const _instance_of_Control_Flow____Control_Flow_0179c7fea60372504adc = db.assignTag('0179c7fea60372504adc');
const _instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4 = db.assignTag('0179c7fea60380c20ff4');
const _instance_of_Control_Flow____Control_Flow_0179c7fea6047302c492 = db.assignTag('0179c7fea6047302c492');
const _instance_of_Runnable_Input____list_0179c7fedd654611ff60 = db.assignTag('0179c7fedd654611ff60');
const _instance_of_Runnable_Input____object_0179c7feffa67e2c9863 = db.assignTag('0179c7feffa67e2c9863');
const _instance_of_Runnable_Output____list_0179c7ff2942c8e19464 = db.assignTag('0179c7ff2942c8e19464');
const _instance_of_Documentation_017b35893b60f071c778 = db.assignTag('017b35893b60f071c778');
const _instance_of_Documentation_017b35893f5af69fc5e3 = db.assignTag('017b35893f5af69fc5e3');
const _instance_of_Documentation_017b35893f5b6e4dea44 = db.assignTag('017b35893f5b6e4dea44');
const _instance_of_Documentation_017b358942758802549a = db.assignTag('017b358942758802549a');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _List_0179b2685e214c57ba47               = '0179b2685e214c57ba47';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4
db.newModel(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, 'Add Element To List') // tag and name of the model 
    .extends(_Action_Call_0168c6f020f2a96a0000).setModelTag(_Coded_Action_01621fb84e320000f012) 
    .setProperties({
        [_Brick_Metadata_$_40_$Runtime$_41_$_status_01703376c4a81c0e9d94]:'stable',
        [_Runnable_Definition_hardcoded_01692aa71f3108454479]:true,
        [_Brick_Metadata_$_40_$Runtime$_41_$_visibility_01621fb84e320000f001]:'public',
        'v'                                     :1
    })
    .done(); 
db.updateInstance(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, {
        [db.DEFAULT+_Object_name_ff023000000000000011]:'Add Element To List',
        'v'                                     :2
    });
db.setRootInstanceTag(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4);
// :_instance_of_Control_Flow____Control_Flow_0179c7fea60372504adc
db.newInstance(_instance_of_Control_Flow____Control_Flow_0179c7fea60372504adc)
    .setModelTag(_Control_Flow_016ac63229782039429f) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Control_Flow____Control_Flow_0179c7fea6047302c492
db.newInstance(_instance_of_Control_Flow____Control_Flow_0179c7fea6047302c492)
    .setModelTag(_Control_Flow_016ac6322acf67eebfe7) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Control Flow',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:0,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____list_0179c7fedd654611ff60
db.newInstance(_instance_of_Runnable_Input____list_0179c7fedd654611ff60)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Input____object_0179c7feffa67e2c9863
db.newInstance(_instance_of_Runnable_Input____object_0179c7feffa67e2c9863)
    .setModelTag(_Runnable_Input_0168a431d25001540001) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'object',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:2,
        'v'                                     :1
    })
    .done();
// :_instance_of_Runnable_Output____list_0179c7ff2942c8e19464
db.newInstance(_instance_of_Runnable_Output____list_0179c7ff2942c8e19464)
    .setModelTag(_Runnable_Output_0168a431d25001540002) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'list',
        [_Runnable_IO_IO_Rank_01740c5d4ae4b520dd01]:1,
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893b60f071c778
db.newInstance(_instance_of_Documentation_017b35893b60f071c778)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'Adds en element to a list. If no list is provided, it is created.',
        [_Documentation_summary_01703376c4a81c0e9d91]:'Adds an element to a list.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f5af69fc5e3
db.newInstance(_instance_of_Documentation_017b35893f5af69fc5e3)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The element to add.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b35893f5b6e4dea44
db.newInstance(_instance_of_Documentation_017b35893f5b6e4dea44)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The list in which the element will be added.',
        'v'                                     :1
    })
    .done();
// :_instance_of_Documentation_017b358942758802549a
db.newInstance(_instance_of_Documentation_017b358942758802549a)
    .setModelTag(_Documentation_01703376c4a81c0e9d90) // tag of the model
    // Tag of goos
    .addToGroupOfObjects(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4)
    .setNameOrProperties({
        [_Documentation_description_01703376c4a81c0e9d92]:'The result list, with the added element.',
        'v'                                     :1
    })
    .done();
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Control_Flow____Control_Flow_0179c7fea60372504adc);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____list_0179c7fedd654611ff60);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Runnable_Definition_Inputs_01621fb84e320000f00a  , _instance_of_Runnable_Input____object_0179c7feffa67e2c9863);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Control_Flow____Control_Flow_0179c7fea6047302c492);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Runnable_Definition_Outputs_01621fb84e320000f00b , _instance_of_Runnable_Output____list_0179c7ff2942c8e19464);
db.assign(_instance_of_Control_Flow____Control_Flow_0179c7fea60372504adc, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Control_Flow____Control_Flow_0179c7fea6047302c492, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Control_Flow_01621fb84e320000cf00                );
db.assign(_instance_of_Runnable_Input____list_0179c7fedd654611ff60, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Runnable_Input____object_0179c7feffa67e2c9863, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _Object_ff021000000000000001                      );
db.assign(_instance_of_Runnable_Output____list_0179c7ff2942c8e19464, _Runnable_IO_Type_IO_0168a431d3b9b7438424         , _List_01631aacd8276ea98490                        );
db.assign(_instance_of_Documentation_017b35893b60f071c778   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4);
db.assign(_instance_of_Documentation_017b35893f5af69fc5e3   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____object_0179c7feffa67e2c9863);
db.assign(_instance_of_Documentation_017b35893f5b6e4dea44   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Input____list_0179c7fedd654611ff60);
db.assign(_instance_of_Documentation_017b358942758802549a   , _Documentation_documentation_01703376c4a81c0e9d93 , _instance_of_Runnable_Output____list_0179c7ff2942c8e19464);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_0179c7fea60372504adc);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Object_containsRel_ff02200000000000000f          , _instance_of_Control_Flow____Control_Flow_0179c7fea6047302c492);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____list_0179c7fedd654611ff60);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Input____object_0179c7feffa67e2c9863);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Object_containsRel_ff02200000000000000f          , _instance_of_Runnable_Output____list_0179c7ff2942c8e19464);
db.assign(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893b60f071c778   );
db.assign(_instance_of_Runnable_Input____list_0179c7fedd654611ff60, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f5b6e4dea44   );
db.assign(_instance_of_Runnable_Input____object_0179c7feffa67e2c9863, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b35893f5af69fc5e3   );
db.assign(_instance_of_Runnable_Output____list_0179c7ff2942c8e19464, _Object_containsRel_ff02200000000000000f          , _instance_of_Documentation_017b358942758802549a   );
db.assignOptional(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _Object_gooRel_ff022000000000000003, _List_0179b2685e214c57ba47);
db.assignOptional(_instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4, _GOO_parentGooRel_ff02200000000000000u, _List_0179b2685e214c57ba47);
db.assignOptional(_List_0179b2685e214c57ba47, _Object_containsRel_ff02200000000000000f, _instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4);
db.assignOptional(_List_0179b2685e214c57ba47, _Folder_itemRel_016a697ef00ce7554692, _instance_of_Coded_Action_model____Add_Element_To_List_0179c7fea60380c20ff4);
