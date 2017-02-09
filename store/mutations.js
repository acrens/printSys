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
     * 添加组件
     */
    addItem (state, item) {
        let tag = '';
        let type = event.target.getAttribute('data-type');
        let typeList= state.pageList[type];
        let flag;

        for (let i in item) {
            tag = item[i];
        }

        if (type === 'Title') {
            typeList.pop();
        }

        typeList.push(tag);
    },
    /**
     * 删除组件
     */
    removeItem (state) {
        let type = event.target.getAttribute('data-type');
        let index = event.target.getAttribute('data-index');
        let typeList= state.pageList[type];

        if (index && index >= 0) {
            typeList.splice(index, 1);
        }
    }
};