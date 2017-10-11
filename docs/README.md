
注意，要讲`this.commentOk.bind(this)`作为一个 callback 传递到 `submitComment`中，提交数据成功之后再回调。因此提交数据是一个异步的过程。
