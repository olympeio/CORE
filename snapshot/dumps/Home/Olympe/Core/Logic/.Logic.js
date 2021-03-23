
// Variable db typed for auto-completion:
db = /**@type{olympe.dc.io.OSaveFileBuilder}*/(db);


// Checks are disabled since this is a automatically generated script issued by the InitScriptBuilder
db.disableChecks();



// Definition of tags of models used to construct instances
let _Folder_01612df1db9749227626             = '01612df1db9749227626';


// Definition of tags of defined properties
let _Object_name_ff023000000000000011             = 'ff023000000000000011';


// Definition of tags of defined relations
let _Folder_subFolderRel_016a697ef00ce7554691     = '016a697ef00ce7554691';
let _GOO_parentGooRel_ff02200000000000000u        = 'ff02200000000000000u';
let _Object_containsRel_ff02200000000000000f      = 'ff02200000000000000f';
let _Object_gooRel_ff022000000000000003           = 'ff022000000000000003';


// Definition of tags used for newly created instances
let _instance_of_Folder____Logic_0178445f8bd56b198950 = db.assignTag('0178445f8bd56b198950');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
let _Core_017840fd586db904fdf1               = '017840fd586db904fdf1';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Folder____Logic_0178445f8bd56b198950
db.newInstance(_instance_of_Folder____Logic_0178445f8bd56b198950, _Folder_01612df1db9749227626)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Logic',
        'v'                                     :1
    })
    .done();
db.setRootInstanceTag(_instance_of_Folder____Logic_0178445f8bd56b198950);
db.assignOptional(_instance_of_Folder____Logic_0178445f8bd56b198950, _Object_gooRel_ff022000000000000003, _Core_017840fd586db904fdf1);
db.assignOptional(_Core_017840fd586db904fdf1, _Object_containsRel_ff02200000000000000f, _instance_of_Folder____Logic_0178445f8bd56b198950);
db.assignOptional(_instance_of_Folder____Logic_0178445f8bd56b198950, _GOO_parentGooRel_ff02200000000000000u, _Core_017840fd586db904fdf1);
db.assignOptional(_Core_017840fd586db904fdf1, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Folder____Logic_0178445f8bd56b198950);
