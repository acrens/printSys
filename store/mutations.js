export const mutations = {
    /**
     * 改变打印纸张大小
     */
    changeSize (state, {sizelist}) {
        state.sizeList.forEach(function (item) {
            
            if (item.id === sizelist.id) {
                item.status = !item.status;
            } else {
                item.status = false;
            }
        });
    },
    /**
     * 添加标题
     */
    addTitle (state, {titlelist}) {
        if (titlelist.tag) {
            state.pageList.Title = titlelist.tag;
        }
    },
    /**
     * 添加头部信息
     */
    addHead (state, {headlist}) {
        if (headlist.tag) {
            state.pageList.Head.push(headlist.tag);
        }
    },
    /**
     * 添加section
     */
    addSection (state, {sectionlist}) {
        if (sectionlist.tag) {
            state.pageList.Section.push(sectionlist.tag);
        }
    },
    /**
     * 添加foot
     */
    addFoot (state, {footlist}) {
        if (footlist.tag) {
            state.pageList.Foot.push(footlist.tag);
        }
    }
}