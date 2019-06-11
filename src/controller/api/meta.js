const BaseRest = require("../rest.js");

module.exports = class extends BaseRest {
    async getAction() {
        let data = {};
        if (this.id) {
            data = this.modelInstance.where({ id: this.id }).find();
            return this.sucess(data);
        }
        const params = {};
        const type = this.get("type");
        type ? (params["type"] = type) : "";
        if (this.get("page")) {
            // 页码
            const page = this.get("page") || 1;
            // 每页显示数量
            const pageSize = this.get("pageSize") || 100;

            data = await this.modelInstance
                .where(params)
                .page(page, pageSize)
                .order("create_time desc")
                .countSelect();
            return this.success(data);
        }
        data = await this.modelInstance
            .where(params)
            .order("sort desc")
            .select();
        return this.success(data);
    }
    async postAction() {
        const name = this.post("name"),
            type = this.post("type"),
            id = this.post("id"),
            date = this.post("date");
        if (id) {
            const res = await this.modelInstance
                .where({ id })
                .update({ name, type, update_time: date });
            if (res) {
                this.success({ msg: "修改标签成功!" });
            }
        } else {
            //新增
            const newId = await this.modelInstance.add({
                name,
                type,
                count: 0,
                sort: 0,
                user_id: 1,
                create_time: date
            });
            if (newId) {
                this.success({ msg: "新增标签成功!" });
            }
        }
    }
    async deleteAction() {
        const id = this.post("id");
        const affectedRows = this.modelInstance.where({ id }).delete();
        if (affectedRows) {
            // this.fail(1000, "删除标签失败");
            return this.success(affectedRows);
        } else {
            this.fail(1000, "删除标签失败");
        }
    }
};
