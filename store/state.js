export const state = {
    sizeList: [
        {
            id: 'a4-v',
            text: 'A4纵向',
            status: true
        },
        {
            id: 'a5-h',
            text: 'A5横向',
            status: false
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
            name: '默认样式'
        },
        {
            tag: 'title-warp',
            name: '换行'
        },
    ],
    headList: [
        {
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