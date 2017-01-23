<style src="../style/public.css"></style>

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
                    <a href="javascript:void(0);" :data-id="titlelist.tag" @click="addTitle({titlelist})">{{ titlelist.name }}</a>
                </li>
            </ul>
            <ul>
                <li>头部信息</li>
                <li v-for="headlist in headLists" :headlist="headlist">
                    <a href="javascript:void(0);" :data-id="headlist.tag" @click="addHead({headlist})">{{ headlist.name }}</a>
                </li>
            </ul>
            <ul>
                <li>主体信息</li>
                <li v-for="sectionlist in sectionLists" :sectionlist="sectionlist">
                    <a href="javascript:void(0);" :data-id="sectionlist.tag" @click="addSection({sectionlist})">{{ sectionlist.name }}</a>
                </li>
            </ul>
            <ul>
                <li>页脚信息</li>
                <li v-for="footlist in footLists" :footlist="footlist">
                    <a href="javascript:void(0);" :data-id="footlist.tag" @click="addFoot({footlist})">{{ footlist.name }}</a>
                </li>
            </ul>
        </nav>
        <!--导航-->

        <!--内容主题-->
        <section class="content">
            <div class="content-body" :class="sizeClass">
                <!--标题栏-->
                <div class="content-title">
                    <component :is="titleTag" keep-alive></component>
                </div>
                <!--head信息栏-->
                <div class="content-head">
                    <component v-for="headtag in headTags" :is="headtag" keep-alive></component>
                </div>
                <div class="content-section">
                    <component v-for="sectiontag in sectionTags" :is="sectiontag" keep-alive></component>
                </div>
                <div class="content-foot">
                    <component v-for="foottag in footTags" :is="foottag" keep-alive></component>
                </div>
            </div>
        </section>
        <!--内容主题-->

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
            sizeLists () {
                return this.$store.state.sizeList;
            },
            titleLists () {
                return this.$store.state.titleList;
            },
            titleTag () {
                return this.$store.state.pageList.Title;
            },
            headLists () {
                return this.$store.state.headList;
            },
            headTags () {
                return this.$store.state.pageList.Head;
            },
            sectionLists () {
                return this.$store.state.sectionList;
            },
            sectionTags () {
                return this.$store.state.pageList.Section;
            },
            footLists () {
                return this.$store.state.footList;
            },
            footTags () {
                return this.$store.state.pageList.Foot;
            },
            sizeClass () {
                return this.sizeLists.filter(item => item.status)[0].id;
            }
        },
        // 方法
        methods: {
            ...mapMutations([
                'addTitle',
                'addHead',
                'addSection',
                'addFoot'
            ])
        }
    }
</script>