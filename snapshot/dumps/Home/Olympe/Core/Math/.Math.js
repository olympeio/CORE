
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
const _instance_of_Folder____Math_0178445f8bd56b19894f = db.assignTag('0178445f8bd56b19894f');


//==========================================================
//========= EXTERNAL REFERENCES ============================
//==========================================================
const _Core_017840fd586db904fdf1               = '017840fd586db904fdf1';




//==========================================================
//========= CONFLICTS ======================================
//==========================================================






// :_instance_of_Folder____Math_0178445f8bd56b19894f
db.newInstance(_instance_of_Folder____Math_0178445f8bd56b19894f, _Folder_01612df1db9749227626)
    .setNameOrProperties({
        [_Object_name_ff023000000000000011]     :'Math',
        'v'                                     :1
    })
.done();
db.setRootInstanceTag(_instance_of_Folder____Math_0178445f8bd56b19894f);
db.assignOptional(_instance_of_Folder____Math_0178445f8bd56b19894f, _Object_gooRel_ff022000000000000003, _Core_017840fd586db904fdf1);
db.assignOptional(_instance_of_Folder____Math_0178445f8bd56b19894f, _GOO_parentGooRel_ff02200000000000000u, _Core_017840fd586db904fdf1);
db.assignOptional(_Core_017840fd586db904fdf1, _Object_containsRel_ff02200000000000000f, _instance_of_Folder____Math_0178445f8bd56b19894f);
db.assignOptional(_Core_017840fd586db904fdf1, _Folder_subFolderRel_016a697ef00ce7554691, _instance_of_Folder____Math_0178445f8bd56b19894f);
