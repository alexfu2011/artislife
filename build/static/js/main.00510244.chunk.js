(this.webpackJsonpartislife=this.webpackJsonpartislife||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"id":"1668061784826-3642ba5829ab","description":"\u7bee\u7403\u6bd4\u8d5b","tags":["\u7bee\u7403","\u6885\u9e64\u96c5\u96c6"],"imageLink":"https://images.unsplash.com/photo-1668151611836-4484eefa0c93"},{"id":"1668061784826-3642ba5829ab","description":"\u7bee\u7403\u6bd4\u8d5b","tags":["\u7bee\u7403","\u6885\u9e64\u96c5\u96c6"],"imageLink":"https://images.unsplash.com/photo-1668151611835-e20052cbd60d"},{"id":"1668061784822-d73efb4e3fd4","description":"\u5468\u5b50\u6b63\u4f5c\u54c1","tags":["\u4f5c\u54c1","\u827a\u672f"],"imageLink":"https://images.unsplash.com/photo-1668061784822-d73efb4e3fd4"},{"id":"1668061784824-41a85d6e446b","description":"\u91d1\u534e\u6587\u5316\u9986\u5f00\u5c55","tags":["\u827a\u672f"],"imageLink":"https://images.unsplash.com/photo-1668061784824-41a85d6e446b"},{"id":"1668061784826-3642ba5829ab","description":"\u7bee\u7403\u6bd4\u8d5b","tags":["\u7bee\u7403","\u6885\u9e64\u96c5\u96c6"],"imageLink":"https://images.unsplash.com/photo-1668061784826-3642ba5829ab"},{"id":"8","description":"\u7bee\u7403\u6bd4\u8d5b","tags":["\u7bee\u7403","\u6885\u9e64\u96c5\u96c6"],"imageLink":"https://images.unsplash.com/photo-1668061953100-4a87c8d41ca1"},{"id":"1668061949557-088dea921497","description":"Ball is life","tags":["\u7bee\u7403","\u6885\u9e64\u96c5\u96c6"],"imageLink":"https://images.unsplash.com/photo-1668061949557-088dea921497"},{"id":"1668059859129-b279e1baacda","description":"\u827a\u8da3\u4e0b\u5348\u8336\xb7\u6ce2\u5229\u4f5c\u54c1","tags":["\u4f5c\u54c1","\u827a\u672f"],"isWide":true,"imageLink":"https://images.unsplash.com/photo-1668059859129-b279e1baacda"},{"id":"1668062764032-45c0bead16cc","description":"\u827a\u8da3\u4e0b\u5348\u8336\xb7\u848b\u6ee2\u838e\u4f5c\u54c1","tags":["\u4f5c\u54c1","\u827a\u672f"],"imageLink":"https://images.unsplash.com/photo-1668062764032-45c0bead16cc"},{"id":"1667547006740-df1c30b39f91","description":"\u5fd9\u788c","tags":["\u91d1\u534e"],"isWide":true,"imageLink":"https://images.unsplash.com/photo-1667547006740-df1c30b39f91"},{"id":"1667546744127-d047dc392e9c","description":"\u6885\u9e64\u96c5\u96c6","tags":["\u91d1\u534e","\u6885\u9e64\u96c5\u96c6","\u827a\u672f"],"imageLink":"https://images.unsplash.com/photo-1667546744127-d047dc392e9c"},{"id":"1667547676256-f4edbacd5589","description":"\u514d\u8d39\u5496\u5561","tags":["\u6885\u9e64\u96c5\u96c6"],"imageLink":"https://images.unsplash.com/photo-1667547676256-f4edbacd5589"},{"id":"1667547006738-75e7b88a5277","description":"\u8def\u706f","tags":["\u91d1\u534e"],"imageLink":"https://images.unsplash.com/photo-1667547006738-75e7b88a5277"},{"id":"1667547006738-c43f5272d045","description":"\u53cc\u5854","tags":["\u91d1\u534e"],"imageLink":"https://images.unsplash.com/photo-1667547006738-c43f5272d045"},{"id":"1668057648312-86cf167e6243","description":"\u6253\u5361","tags":["\u91d1\u534e"],"imageLink":"https://images.unsplash.com/photo-1668057648312-86cf167e6243"}]')},21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(14),c=a.n(s),o=(a(26),a(15)),r=a(16),m=a(20),p=a(19);var l=function(e){return i.a.createElement("h1",null,i.a.createElement("a",{href:"/"},e.title))};var d=function(e){return i.a.createElement("div",{className:"tags"},e.tags.map((function(e,t){return i.a.createElement("span",{className:"tag"},i.a.createElement("a",{href:"/tag/"+e},i.a.createElement("i",{className:"fa fa-hashtag"}),e))})))};var u=function(e){return i.a.createElement("span",{className:"like"},i.a.createElement("i",{className:"fa fa-heart"}))};var g=function(e){var t=e.post;return i.a.createElement("figure",{className:t.isWide?"wide-figure":"figure"},i.a.createElement("img",{className:"photo",src:t.imageLink,alt:t.description}),i.a.createElement("figcaption",null,i.a.createElement("p",null,t.description,i.a.createElement(d,{tags:t.tags}),i.a.createElement("div",{className:"btn-group"},i.a.createElement(u,null)))))};var h=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"photoGrid"},e.posts.map((function(e,t){return i.a.createElement(g,{key:t,post:e})}))))},f=a(1),b=a(17),E=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={posts:b,screen:"photos"},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(f.a,{exact:!0,path:"/",render:function(){return i.a.createElement("div",null,i.a.createElement(l,{title:"Art is life"}),i.a.createElement(h,{posts:e.state.posts,onRemovePhoto:e.removePhoto,onNavigate:e.navigate}))}}),i.a.createElement(f.a,{exact:!0,path:"/tag/:tag",render:function(t){return i.a.createElement("div",null,i.a.createElement(l,{title:"Art is life"}),i.a.createElement(h,{posts:e.state.posts.filter((function(e){return e.tags.includes(t.match.params.tag)})),onRemovePhoto:e.removePhoto,onNavigate:e.navigate}))}}))}}]),a}(n.Component),v=a(9);c.a.render(i.a.createElement(v.a,null,i.a.createElement(E,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.00510244.chunk.js.map