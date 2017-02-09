<style src="../style/public.css"></style>
<style src="../style/print.css"></style>

<template>
    <section>
        <!--头部-->
        <header>
            <span>选择打印大小：</span>
            <ul>
                <header-choose v-for="sizelist in sizeLists" :sizelist="sizelist"></header-choose>
            </ul>
        </header>
        <!--头部-->

        <!--导航-->
        <nav>
            <ul>
                <li>标题</li>
                <li v-for="titlelist in titleLists" :titlelist="titlelist">
                    <a href="javascript:void(0);" :data-id="titlelist.tag" data-type="Title" @click="addItem({titlelist})">{{ titlelist.name }}</a>
                </li>
            </ul>
            <ul>
                <li>头部信息</li>
                <li v-for="headlist in headLists" :headlist="headlist">
                    <a href="javascript:void(0);" :data-id="headlist.tag" data-type="Head" @click="addItem({headlist})">{{ headlist.name }}</a>
                </li>
            </ul>
            <ul>
                <li>主体信息</li>
                <li v-for="sectionlist in sectionLists" :sectionlist="sectionlist">
                    <a href="javascript:void(0);" :data-id="sectionlist.tag" data-type="Section" @click="addItem({sectionlist})">{{ sectionlist.name }}</a>
                </li>
            </ul>
            <ul>
                <li>页脚信息</li>
                <li v-for="footlist in footLists" :footlist="footlist">
                    <a href="javascript:void(0);" :data-id="footlist.tag" data-type="Foot" @click="addItem({footlist})">{{ footlist.name }}</a>
                </li>
            </ul>
        </nav>
        <!--导航-->

        <!--内容主题-->
        <section class="content">
            <div class="content-body" :class="sizeClass">
                <!--标题栏-->
                <div class="content-title">
                    <component v-for="titletag in titleTags" :is="titletag.tag" keep-alive></component>
                </div>
                <!--head信息栏-->
                <div class="content-head">
                    <component v-for="headtag in headTags" :is="headtag.tag" keep-alive></component>
                </div>
                <div class="content-section">
                    <component v-for="sectiontag in sectionTags" :is="sectiontag.tag" keep-alive></component>
                </div>
                <div class="content-foot">
                    <component v-for="foottag in footTags" :is="foottag.tag" keep-alive></component>
                </div>
            </div>
        </section>
        <!--内容主题-->

        <!--列表-->
        <section class="side">
            <h3>
                已使用的组件
            </h3>
            <ul>
                <li>标题</li>
                <li class="side-item" v-for="(titletag, index) in titleTags">
                    {{ titletag.name }}
                    <button data-type="Title" :data-index="index" @click="removeItem()">X</button>
                </li>
                <li>头部信息</li>
                <li class="side-item" v-for="(headtag, index) in headTags">
                    {{ headtag.name }}
                    <button data-type="Head" :data-index="index" @click="removeItem()">X</button>
                </li>
                <li>主体信息</li>
                <li class="side-item" v-for="(sectiontag, index) in sectionTags">
                    {{ sectiontag.name }}
                    <button data-type="Section" :data-index="index" @click="removeItem()">X</button>
                </li>
                <li>页脚信息</li>
                <li class="side-item" v-for="(foottag, index) in footTags">
                    {{ foottag.name }}
                    <button data-type="Foot" :data-index="index" @click="removeItem()">X</button>
                </li>
            </ul>
        </section>
        <!--列表-->

        <!--页脚-->
        <footer>
            <hr/>
            Assassin's Creed
        </footer>
        <!--页脚-->
    </section>
</template>

<script>
    import { mapMutations } from 'vuex';
    import HeaderChoose from './Header/HeaderChoose.vue';
    import TitleNormal from './Title/TitleNormal.vue'
    import TitleWarp from './Title/TitleWarp.vue'
    import HeadFourRow from './Head/HeadFourRow.vue'
    import HeadThreeRow from './Head/HeadThreeRow.vue'
    import SectionNormal from './Section/SectionNormal.vue'
    import FootFourRow from './Foot/FootFourRow.vue'
    
    export default {
        // 页面用到的组件
        components: {
            //  选择布局大小
            HeaderChoose,
            //  标题栏组件
            TitleNormal,
            TitleWarp,
            // head组件
            HeadFourRow,
            HeadThreeRow,
            // section组件
            SectionNormal,
            // foot组件
            FootFourRow
        },
        // 页面所用计算属性
        computed: {
            /**
             * 获取state
             * @returns {*|S}
             */
            stateList () {
                return this.$store.state;
            },
            pageList () {
                return this.stateList.pageList;
            },
            sizeLists () {
                return this.stateList.sizeList;
            },
            titleLists () {
                return this.stateList.titleList;
            },
            titleTags () {
                return this.pageList.Title;
            },
            headLists () {
                return this.stateList.headList;
            },
            headTags () {
                return this.pageList.Head;
            },
            sectionLists () {
                return this.stateList.sectionList;
            },
            sectionTags () {
                return this.pageList.Section;
            },
            footLists () {
                return this.stateList.footList;
            },
            footTags () {
                return this.pageList.Foot;
            },
            sizeClass () {
                return this.sizeLists.filter(item => item.status)[0].id;
            }
        },
        // 方法
        methods: {
            ...mapMutations([
                'addItem',
                'removeItem'
            ])
        }
    }
</script>