export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let good= context.state.cartList.find(value => {
                return value.iid===payload.iid
            })
            if (good) {
                context.commit("addCounter", good)
                resolve("商品数量+1")
            }
            else {
                context.commit("addGood", payload)
                resolve("已添加至购物车")
            }
        })
}
}

