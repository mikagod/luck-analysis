// 多选列表的图片资源
import injuryTreatmentBtn from '/assets/image/img/财运如何.png';
import workOfficialLuck from '/assets/image/img/工作官运.png';
import companyDevelopment from '/assets/image/img/公司发展.png';
import investmentProspects from '/assets/image/img/投资吉凶.png';
import emotionalMarriage from '/assets/image/img/情感婚姻.png';
import interpersonalRelations from '/assets/image/img/人际关系.png';
import whoCanHelp from '/assets/image/img/谁能帮我.png';
import askingForHelp from '/assets/image/img/求人办事.png';
import bearingChildren from '/assets/image/img/生育子女.png';
import physicalMentalHealth from '/assets/image/img/身心健康.png';
import illnessTreatment from '/assets/image/img/伤病治疗.png';
import marriageProspects from '/assets/image/img/嫁娶吉凶.png';
import officialDisputes from '/assets/image/img/官灾是非.png';
import academicExams from '/assets/image/img/学业考试.png';
import travelTrips from '/assets/image/img/旅游出行.png';
import vehicleProspects from '/assets/image/img/车辆吉凶.png';
import realEstateTransactions from '/assets/image/img/房屋交易.png';
import graveRelocation from '/assets/image/img/迁坟吉凶.png';
import fengshuiProspects from '/assets/image/img/风水吉凶.png';
import relocationProspects from '/assets/image/img/搬迁吉凶.png';
import lostItemsSearch from '/assets/image/img/失物找寻.png';
import tattooProspects from '/assets/image/img/纹身吉凶.png';
import omensOfEvents from '/assets/image/img/交友预兆.png';
import ownerProspects from '/assets/image/img/助人吉凶.png';
import harmProspects from '/assets/image/img/害人吉凶.png';
import resignationProspects from '/assets/image/img/辞职吉凶.png';
import skillLearning from '/assets/image/img/技能学习.png';
import livingTogetherProspects from '/assets/image/img/与人同住吉凶.png';
import relativeDeathProspects from '/assets/image/img/亲人去世吉凶.png';
import killingAnimalsOmen from '/assets/image/img/杀伤动物预兆.png';
import losingItemsOmen from '/assets/image/img/失毁东西预兆.png';
import petAdoptionAbandonment from '/assets/image/img/收养弃养动物.png';
import missingPeopleAnimals from '/assets/image/img/走失人和动物.png';
import weatherImpactOnTasks from '/assets/image/img/做事天气影响.png';

import injuryTreatmentBtn_white from '/assets/image/img/font_selectedColor/财运如何.png';
import workOfficialLuck_white from '/assets/image/img/font_selectedColor/工作官运.png';
import companyDevelopment_white from '/assets/image/img/font_selectedColor/公司发展.png';
import investmentProspects_white from '/assets/image/img/font_selectedColor/投资吉凶.png';
import emotionalMarriage_white from '/assets/image/img/font_selectedColor/情感婚姻.png';
import interpersonalRelations_white from '/assets/image/img/font_selectedColor/人际关系.png';
import whoCanHelp_white from '/assets/image/img/font_selectedColor/谁能帮我.png';
import askingForHelp_white from '/assets/image/img/font_selectedColor/求人办事.png';
import bearingChildren_white from '/assets/image/img/font_selectedColor/生育子女.png';
import physicalMentalHealth_white from '/assets/image/img/font_selectedColor/身心健康.png';
import illnessTreatment_white from '/assets/image/img/font_selectedColor/伤病治疗.png';
import marriageProspects_white from '/assets/image/img/font_selectedColor/嫁娶吉凶.png';
import officialDisputes_white from '/assets/image/img/font_selectedColor/官灾是非.png';
import academicExams_white from '/assets/image/img/font_selectedColor/学业考试.png';
import travelTrips_white from '/assets/image/img/font_selectedColor/旅游出行.png';
import vehicleProspects_white from '/assets/image/img/font_selectedColor/车辆吉凶.png';
import realEstateTransactions_white from '/assets/image/img/font_selectedColor/房屋交易.png';
import graveRelocation_white from '/assets/image/img/font_selectedColor/迁坟吉凶.png';
import fengshuiProspects_white from '/assets/image/img/font_selectedColor/风水吉凶.png';
import relocationProspects_white from '/assets/image/img/font_selectedColor/搬迁吉凶.png';
import lostItemsSearch_white from '/assets/image/img/font_selectedColor/失物找寻.png';
import tattooProspects_white from '/assets/image/img/font_selectedColor/纹身吉凶.png';
import omensOfEvents_white from '/assets/image/img/font_selectedColor/交友预兆.png';
import ownerProspects_white from '/assets/image/img/font_selectedColor/助人吉凶.png';
import harmProspects_white from '/assets/image/img/font_selectedColor/害人吉凶.png';
import resignationProspects_white from '/assets/image/img/font_selectedColor/辞职吉凶.png';
import skillLearning_white from '/assets/image/img/font_selectedColor/技能学习.png';
import livingTogetherProspects_white from '/assets/image/img/font_selectedColor/与人同住吉凶.png';
import relativeDeathProspects_white from '/assets/image/img/font_selectedColor/亲人去世吉凶.png';
import killingAnimalsOmen_white from '/assets/image/img/font_selectedColor/杀伤动物预兆.png';
import losingItemsOmen_white from '/assets/image/img/font_selectedColor/失毁东西预兆.png';
import petAdoptionAbandonment_white from '/assets/image/img/font_selectedColor/收养弃养动物.png';
import missingPeopleAnimals_white from '/assets/image/img/font_selectedColor/走失人和动物.png';
import weatherImpactOnTasks_white from '/assets/image/img/font_selectedColor/做事天气影响.png';


// 导入库
import { defineStore } from 'pinia';
import { reactive, ref, watch } from 'vue';

// 导入图标（选中、未选中）
import unChooseIcon from '/assets/image/img/未选.png'; // 未选图标
import hvChooseIcon from '/assets/image/img/已选.png'; // 已选图标

// 定义背景颜色（选中、未选中）
const bgColor = {
  hvBgColor: '#00d0d4', // 已选背景颜色 
  unBgColor: '#e3fdfe', // 未选背景颜色
} 


export const useSelectedStore = defineStore('selected', () => {
    
    // 保存 决定小盒子是否被选中的 true false 值
    const isChecked = ref([]); 

    // 保存 选中的小盒子的 名字
    const selectedItems = ref([]); 

    // 保存 图片数组

        // 黑字图片（未选中）
        const imgUrlArray = ref([
            injuryTreatmentBtn,workOfficialLuck,companyDevelopment,investmentProspects,emotionalMarriage,
            interpersonalRelations,whoCanHelp,askingForHelp,bearingChildren,physicalMentalHealth,
            illnessTreatment,marriageProspects,officialDisputes,academicExams,travelTrips,
            vehicleProspects,realEstateTransactions,graveRelocation,fengshuiProspects,relocationProspects,
            lostItemsSearch,tattooProspects,omensOfEvents,ownerProspects,harmProspects,
            resignationProspects,skillLearning,livingTogetherProspects,relativeDeathProspects,killingAnimalsOmen,
            losingItemsOmen,petAdoptionAbandonment,missingPeopleAnimals,weatherImpactOnTasks,
        ]);
        // 备份 黑字图片（未选中） 
        const imgUrlArray_backup = ref(
            JSON.parse(JSON.stringify(imgUrlArray.value))
        ); 
        // 白字图片（选中）
        const imgUrlArray_white = ref([
            injuryTreatmentBtn_white,workOfficialLuck_white,companyDevelopment_white,investmentProspects_white,emotionalMarriage_white,
            interpersonalRelations_white,whoCanHelp_white,askingForHelp_white,bearingChildren_white,physicalMentalHealth_white,illnessTreatment_white,
            marriageProspects_white,officialDisputes_white,academicExams_white,travelTrips_white,vehicleProspects_white,
            realEstateTransactions_white,graveRelocation_white,fengshuiProspects_white,relocationProspects_white,lostItemsSearch_white,tattooProspects_white,
            omensOfEvents_white,ownerProspects_white,harmProspects_white,resignationProspects_white,skillLearning_white,
            livingTogetherProspects_white,relativeDeathProspects_white,killingAnimalsOmen_white,losingItemsOmen_white,petAdoptionAbandonment_white,
            missingPeopleAnimals_white,weatherImpactOnTasks_white,
        ]); 

        /**
         * 第5页 字图 的特殊存取  
         */
        const selectedItems_5 = ref([]);
        const selectedItems_backup_5 = ref([]);
        const selectedItems_white_5 = ref([]);



    // 保存 选项 是否被选中的
    const chooseIcon = ref(imgUrlArray.value.map(() => unChooseIcon)); //  图标
    const bgColorItem = ref(imgUrlArray.value.map(() => bgColor.unBgColor)); // 背景颜色

    // 索引
    const indexItem = ref(-1); // 索引
    const indexItems = ref([]); // 索引数组
    

    // 统一操作
    function to_hv() {
        console.log(`索引为：`,indexItem.value,`（统一换成已选操作）`);
        chooseIcon.value[indexItem.value] = hvChooseIcon; // 换成已选
        bgColorItem.value[indexItem.value] = bgColor.hvBgColor; // 换成已选
        imgUrlArray.value[indexItem.value] = imgUrlArray_white.value[indexItem.value]; // 换成已选
    }
    function to_un() {
        console.log(`索引为：`,indexItem.value,`（统一换成未选操作）`);
        chooseIcon.value[indexItem.value] = unChooseIcon; // 换成未选
        bgColorItem.value[indexItem.value] = bgColor.unBgColor; // 换成未选
        imgUrlArray.value[indexItem.value] = imgUrlArray_backup.value[indexItem.value]; // 换成未选
    }
    function to_un_all(index) {
        console.log(`索引为：`,index,`（用于全部统一换成未选操作）`);
        chooseIcon.value[index] = unChooseIcon; // 换成未选
        bgColorItem.value[index] = bgColor.unBgColor; // 换成未选
        imgUrlArray.value[index] = imgUrlArray_backup.value[index]; // 换成未选
    }

      /**
       * 第5页 字图 的特殊更换样式 
       */
      function to_hv_5() {
        console.log(`索引为：`,indexItem.value,`（统一换成已选操作）`);
        chooseIcon.value[indexItem.value] = hvChooseIcon; // 换成已选
        bgColorItem.value[indexItem.value] = bgColor.hvBgColor; // 换成已选
        console.log('1选中啊啊啊啊啊啊啊啊啊',selectedItems_5.value[indexItem.value])
        console.log('白',selectedItems_white_5.value[indexItem.value])
        selectedItems_5.value[indexItem.value] = selectedItems_white_5.value[indexItem.value]; // 换成已选
        console.log('2选中啊啊啊啊啊啊啊啊啊',selectedItems_5.value[indexItem.value])
      }
      function to_un_5() {
        console.log(`索引为：`,indexItem.value,`（统一换成未选操作）`);
        chooseIcon.value[indexItem.value] = unChooseIcon; // 换成未选
        bgColorItem.value[indexItem.value] = bgColor.unBgColor; // 换成未选
        console.log('1不选中啊啊啊啊啊啊啊啊啊',selectedItems_5.value[indexItem.value])
        console.log('白',selectedItems_backup_5.value[indexItem.value])
        selectedItems_5.value[indexItem.value] = selectedItems_backup_5.value[indexItem.value]; // 换成未选
        console.log('2不选中啊啊啊啊啊啊啊啊啊',selectedItems_5.value[indexItem.value])
      }
      function to_un_all_5(index) {
        console.log(`索引为：`,index,`（用于全部统一换成未选操作）`);
        chooseIcon.value[index] = unChooseIcon; // 换成未选
        bgColorItem.value[index] = bgColor.unBgColor; // 换成未选
        selectedItems_5.value[index] = selectedItems_backup_5.value[index]; // 换成未选
      }


    // 监听索引变化
    watch(() => indexItem.value, (newValue, oldValue) => {
      if(!(indexItems.value.indexOf(newValue) !== -1)) {
        indexItems.value.push(newValue); // 记录索引
      }
    })

  return { 
    //---------------------------状态
    isChecked,
    selectedItems,
    chooseIcon,
    bgColorItem,
    indexItem,
    indexItems,
    imgUrlArray,
    imgUrlArray_backup,
    imgUrlArray_white,
    selectedItems_5,
    selectedItems_backup_5,
    selectedItems_white_5,
    //----------------------------操作
    to_hv,
    to_un,
    to_un_all,
    to_hv_5,
    to_un_5,
    to_un_all_5,
  };
});