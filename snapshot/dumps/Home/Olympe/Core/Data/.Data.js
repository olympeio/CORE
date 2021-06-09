
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
const _Folder_01612df1db9749227626             = '01612df1db9749227626';


// Definition of tags of defined properties
const _Object_name_ff023000000000000011             = 'ff023000000000000011';


// Definition of tags of defined relations
const _Folder_subFolderRel_016a697ef00ce7554691     = '016a697ef00ce7554691';
const _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
const _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
const _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';


// Definition of tags used for newly created instances 
const _instance_of_Folder____Data_0179b2681e7d4704e92a = db.assignTag('0179b2681e7d4704e92a');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Core_100000000000000000df               = '100000000000000000df';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Folder____Data_0179b2681e7d4704e92a
db.newInstance(_instance_of_Folder____Data_0179b2681e7d4704e92a, _Folder_01612df1db9749227626)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Data',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Folder____Data_0179b2681e7d4704e92a);
db.assignOptional(_instance_of_Folder____Data_0179b2681e7d4704e92a, _Object_gooRel_ff022000000000000003, _Core_100000000000000000df);
db.assignOptional(_instance_of_Folder____Data_0179b2681e7d4704e92a, _GOO_parentGooRel_ff02200000000000000u, _Core_100000000000000000df);
db.assignOptional(_Core_100000000000000000df, _Object_containsRel_ff02200000000000000f, _instance_of_Folder____Data_0179b2681e7d4704e92a);
db.assignOptional(_Core_100000000000000000df, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Folder____Data_0179b2681e7d4704e92a);
