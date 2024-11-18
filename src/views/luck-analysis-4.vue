<script setup>
    import { ref,onUnmounted  } from 'vue' // 导入vue相关的方法
    import nextStepBtn from '/assets/image/img/Btn下一步.png' // 导入“下一步”图片
    import Background from '@/components/container/bg.vue' // 导入背景组件 
    import Dropdown from '@/components/container/Dropdown.vue' // 导入下拉框组件
    import { useGlobalStore } from '@/stores/global'; // 全局状态管理实例 useGlobalStore

    // dropdown 组件的宽度和高度
    const dropdownComponentWidth = ref('600px') 
    const dropdownComponentHeight = ref('900px')

    // 根据屏幕尺寸动态设置 Dropdown组件的宽度和高度
    const resizeSetter = () => {
      if (window.innerWidth >= 1200) {
        dropdownComponentWidth.value = '1100px'
        dropdownComponentHeight.value = '400px'
      } else if (window.innerWidth >= 380 && window.innerWidth <= 767.98) {
        dropdownComponentWidth.value = '86%'
        dropdownComponentHeight.value = '555px'
      } else if (window.innerWidth <= 380){
        dropdownComponentWidth.value = '77%'
        dropdownComponentHeight.value = '555px'
      } else {
        dropdownComponentWidth.value = '500px'
        dropdownComponentHeight.value = '400px'
      }
    }
    resizeSetter() // 初始化时设置一次
    window.addEventListener('resize', resizeSetter) // 监听窗口尺寸变化
    onUnmounted(() => {window.removeEventListener('resize', resizeSetter) }) // 清理窗口尺寸变化事件监听器



    const global = useGlobalStore(); // 全局状态管理实例
    global.showWhiteBG = true; // 让白色下背景显示
</script>

<template>
<body>
    <!-- ********************顶导航******************** -->
    <TopNavigator/>
    <!-- ********************/顶导航******************** -->

    <!-- ********************大盒子******************** -->
    <Background>
            <!-- 页面4 -->
            <template #page>
              <div class="page page-direction">
                  <Dropdown :width=dropdownComponentWidth :height=dropdownComponentHeight :bgColor="'#ffffff5c'">
                    <template #header-title>
                        <img src="/assets/image/img/流年运气求测须知.png" alt="图片失效">
                    </template>
                    <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 在现代社会，无论是企业开发新产品，</p>
                    <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 还是个人制定学习计划，明确需求都是成功的第一步。然而，</p>
                    <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 许多人在需求分析阶段常常陷入误区，导致最终结果与预期相去甚远。因此，需求分析不仅是收集信息的过程，更是深入理解问题本质、合理规划行动的重要环节。本文将探讨在需求分析阶段需要明白的几个道理，并提供详细的案例和理论支持。</p>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 在现代社会，无论是企业开发新产品，<br>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 还是个人制定学习计划，明确需求都是成功的第一步。然而，<br>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 许多人在需求分析阶段常常陷入误区，导致最终结果与预期相去甚远。因此，需求分析不仅是收集信息的过程，更是深入理解问题本质、合理规划行动的重要环节。本文将探讨在需求分析阶段需要明白的几个道理，并提供详细的案例和理论支持。<br>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 一、需求分析的本质
                    需求分析的本质在于理解用户的真实需求。很多时候，用户提出的只是表面需求，背后隐藏着更深层次的问题。作为需求分析师，我们需要通过深入交流和细致观察，挖掘出用户的真实需求。
                    1. 表面需求与深层需求
                    用户提出的需求往往是他们认为的解决方案的一部分，而非真正的问题所在。例如，用户可能抱怨某个软件的操作复杂，但其根本问题是软件缺乏直观的用户界面。这种情况下，我们需要通过深入交流和细致观察，找出用户真正的需求。
                    2. 用户访谈的重要性
                    用户访谈是了解用户需求的重要手段。通过面对面的交流，我们可以更好地理解用户的使用场景和痛点。例如，苹果公司在设计iPhone时，进行了大量的用户访谈，了解用户对手机功能的需求，最终推出了具有革命性的触摸屏手机。
                    3. 用户观察法
                    除了访谈，用户观察也是获取真实需求的有效方法。通过观察用户的实际使用过程，我们可以发现用户在使用产品时的困难和不便。例如，谷歌在设计搜索算法时，通过对用户搜索行为的观察，不断优化搜索结果的准确性。
                    二、区分用户和客户的需求
                    用户是直接使用产品的人，而客户则是购买产品或服务的人。这两者的诉求可能并不一致。因此，在进行需求分析时，既要关注用户的使用体验，也要考虑客户的商业目标，确保产品能够满足多方需求。
                    1. 用户需求 vs 客户需求
                    用户需求更多关注产品的使用体验和功能性，而客户需求则更多关注产品的商业价值和长期效益。例如，一款教育软件的用户是学生，而客户是家长或学校。学生可能更关心软件的趣味性和互动性，而家长或学校则更看重教学效果和安全性。
                    2. 平衡用户和客户的需求
                    在实际操作中，平衡用户和客户的需求是一项挑战。团队需要通过多轮沟通和协商，找到最佳的解决方案。例如，微软在开发Office套件时，不仅要满足用户的日常办公需求，还要满足企业的安全管理需求，最终推出了既易用又安全的产品。
                    三、合理划分需求的优先级
                    并非所有需求都是同等重要的，合理的优先级划分可以帮助团队在有限的时间和资源下，优先解决最关键的问题。需求优先级的划分通常基于业务价值、技术可行性、用户满意度和成本效益等多个维度。
                    1. 业务价值
                    业务价值是指需求对业务的影响程度。高业务价值的需求通常对公司的核心目标有重要影响，应优先考虑。例如，一家电商平台可能优先开发支付系统，因为这是交易的核心环节。
                    2. 技术可行性
                    技术可行性是指需求实现的技术难度。技术难度高的需求可能需要更多的时间和资源，团队需要评估其可行性和风险。例如，开发一个全新的AI算法可能需要较长的时间和专业的技术团队。
                    3. 用户满意度
                    用户满意度是指需求对用户体验的提升程度。高用户满意度的需求可以显著改善用户的使用体验，提高用户忠诚度。例如，优化手机应用的加载速度可以大幅提升用户体验。
                    4. 成本效益
                    成本效益是指需求实施的成本与收益比。团队需要评估需求的投入产出比，选择性价比最高的需求。例如，开发一个新功能的成本较高，但带来的用户增长和收入增加可能更大，这样的需求值得优先考虑。
                    四、需求分析是一个持续的过程
                    需求分析不是一个一次性活动，而是一个持续的过程。随着项目的推进，新的需求会不断涌现，原有的需求也可能发生变化。因此，团队需要建立一套完善的需求管理系统，及时记录和更新需求，确保所有相关人员都能及时了解最新的需求状态。
                    1. 需求管理系统的必要性
                    需求管理系统可以帮助团队跟踪和管理需求的变化，确保需求的准确性和完整性。常见的需求管理工具包括Jira、Trello和Confluence等。这些工具提供了需求追踪、版本管理和协作功能，帮助团队高效管理需求。
                    2. 需求变更管理
                    需求变更管理是需求管理的重要组成部分。团队需要建立一套灵活的需求变更流程，确保在需求发生变化时，能够迅速做出响应，调整项目计划。例如，敏捷开发方法中的迭代评审和回顾会议，可以帮助团队及时发现和解决问题。
                    五、有效的沟通是需求分析成功的关键
                    需求分析师需要与多个利益相关方进行沟通，包括用户、客户、产品经理和开发人员等。在沟通过程中，倾听对方的意见、提出开放性问题、定期确认需求的理解是否一致以及将讨论结果文档化都是非常重要的步骤。
                    1. 倾听的重要性
                    倾听是有效沟通的基础。需求分析师需要耐心听取对方的意见，避免过早下结论。通过倾听，我们可以更好地理解对方的需求和期望。例如，在用户访谈中，需求分析师需要认真记录用户的每一个反馈，从中提炼出有价值的信息。
                    2. 提出开放性问题
                    开放性问题可以帮助对方更全面地表达自己的需求。与封闭性问题相比，开放性问题没有固定的答案，可以引导对方深入思考。例如，需求分析师可以问：“您在使用这款软件时遇到了哪些问题？”而不是“这款软件操作复杂吗？”
                    3. 定期确认需求
                    定期确认需求可以避免误解和偏差。团队需要定期与利益相关方沟通，确认需求的理解是否一致。例如，每周的项目进度会议可以用来回顾和确认需求的变化，确保所有人的认知保持同步。
                    4. 文档化的需求管理
                    将讨论结果文档化是需求管理的重要环节。通过编写需求文档，团队可以确保所有需求都有明确的记录和跟踪。需求文档应包括需求的详细描述、优先级、责任人和完成时间等信息。例如，需求文档可以使用表格形式，列出每个需求的具体内容和状态。
                    总结
                    需求分析是项目成功的基础。只有深入理解用户的真实需求、合理划分需求优先级、持续管理需求变化并保持有效沟通，团队才能确保项目方向正确，最终达成预期目标。在未来的项目管理中，我们应该时刻铭记这些道理，不断提升需求分析的能力，为项目的成功奠定坚实的基础。
                    结论
                    需求分析不仅是一项技术活，更是一门艺术。它要求我们具备敏锐的洞察力、扎实的专业知识和出色的沟通能力。通过不断学习和实践，我们可以更好地掌握需求分析的方法和技巧，为项目的成功保驾护航。无论是在企业开发新产品，还是个人制定学习计划，明确需求都是至关重要的第一步。让我们共同努力，不断提升需求分析的能力，迎接未来的挑战。
                    需求分析的本质在于理解用户的真实需求。很多时候，用户提出的只是表面需求，背后隐藏着更深层次的问题。作为需求分析师，我们需要通过深入交流和细致观察，挖掘出用户的真实需求。
                </Dropdown>
              </div>
            </template>
            <!-- 按钮区 -->
            <template #btn>
            <router-link to="/5" style="display: flex; justify-content: center; align-items: center;">
                <img class="btn" :src=nextStepBtn alt="图片失效" @click="btnClick">
            </router-link>
            </template>
    </Background>
    <!-- ********************/大盒子******************** -->

    <!-- ********************底部区******************** -->
    <Botton/>
    <!-- ********************/底部区******************** -->

</body>
</template>

<style scoped>
    /* 页面宽高 */
    .page {
        width: 1450px;
        height: 560px;
        margin-bottom: 40px;
    }
    .page-direction {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* 按钮 */	
    .btn {
        width: 100%;
        height: 100%;
        margin: 65px 0;
        user-select: none;
        pointer-events: none;
    }

  /* ********************媒体查询 */

    /* 超大屏幕 > 2560px */
    @media screen and (min-width: 2560px) {
      .page {
        width: 1200px;
      }
    }

    
    /* 中屏幕 < 1200px */
    @media screen and (max-width: 1200px) {
      /* 按钮 */
      .btn {
        margin: 50px 0;
      }

    }

    /* 小屏幕 < 768px */
    @media screen and (max-width: 767.98px) {
        /* 页面 */
        .page {
        height: 700px;
        }

        /* 按钮 */
        .btn {
        width: 50%;
        height: 50%;
        margin: 50px 0;
        }
    }
</style>