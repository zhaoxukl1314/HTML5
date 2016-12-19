// JavaScript Document
var json = {
	姓名: "约翰内斯堡",
    性别: "男",
    邮箱: "????????@163.com",
    武器: "光芒神剑",
    攻击值: "100"
};
self.onmessage = function(event) {
    self.postMessage(json);
    close();
}