export const state = {
    sizeList: [
        {
            id: 'a4-v',
            text: 'A4纵向',
            status: true,
            class: 'print--a4-v'
        },
        {
            id: 'a5-h',
            text: 'A5横向',
            status: false,
            class: 'print--a5-h'
        }
    ],

    pageList: {
        Title: [],
        Head: [],
        Section: [],
        Foot: []
    },

    titleList: [
        {
            tag: 'title-normal',
            name: '默认样式',
            class: 'title--default'
        },
        {
            tag: 'title-warp',
            name: '换行'
        },
    ],

    headList: [
        {
            tag: 'head-25-row',
            name: '25百分比栅格'
        },{
            tag: 'head-50-row',
            name: '50百分比栅格'
        },{
            tag: 'head-75-row',
            name: '75百分比栅格'
        },{
            tag: 'head-100-row',
            name: '100百分比栅格'
        },{
            tag: 'head-four-row',
            name: '4列栅格'
        },
        {
            tag: 'head-three-row',
            name: '3列栅格'
        }
    ],

    sectionList: [
        {
            tag: 'section-normal',
            name: '默认样式'
        }
    ],

    footList: [
        {
            tag: 'foot-four-row',
            name: '4列栅格'
        }
    ]
}