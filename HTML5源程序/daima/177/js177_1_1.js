// JavaScript Document
self.onmessage = function(event) {
    if (event.data % 2 == 0) {
        self.postMessage("oushu");
    } else {
        self.postMessage("jishu");
    }
    self.close();
}