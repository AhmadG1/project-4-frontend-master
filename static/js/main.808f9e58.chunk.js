(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(23)},17:function(e,t,a){},18:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),l=a.n(r),o=(a(17),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),h=function(e){var t=e.user,a=e.changeActivePage,n=e.onSignout;return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light "},c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav ml-auto "},t?function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",null,c.a.createElement("h1",{className:"logo",onClick:function(){return e("home")}}," Recipes ")),c.a.createElement("li",{className:"nav-item",onClick:function(){return e("change-password")}},c.a.createElement("div",{className:"nav-link"},"Change Password")),c.a.createElement("li",{className:"nav-item",onClick:function(){return t()}},c.a.createElement("div",{className:"nav-link"},"Sign Out")),c.a.createElement("li",null,c.a.createElement("button",{class:"btn btn-secondary",onClick:function(){return e("create-recipe")}}," Create Recipe ")))}(a,n):function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",null,c.a.createElement("h1",{className:"logo",onClick:function(){return e("home")}}," Recipes ")),c.a.createElement("li",{className:"nav-item",onClick:function(){return e("sign-in")}},c.a.createElement("div",{className:"nav-link"},"Sign In")),c.a.createElement("li",{className:"nav-item",onClick:function(){return e("sign-up")}},c.a.createElement("div",{className:"nav-link"},"Sign Up")))}(a))))};a(18);function d(e){localStorage.setItem("user",JSON.stringify(e))}var p=function(e){document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"};function g(){var e=localStorage.getItem("user");return"undefined"===e?null:JSON.parse(e)}var f=a(6),v="https://peaceful-mountain-61488.herokuapp.com",b="http://localhost:3001",E="localhost"===window.location.hostname?b:v,N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={formData:{email:null,password:null},err:null},a.handleLoginRequest=function(e){var t="".concat(E,"/sign-in");console.log(t),fetch(t,{mode:"cors",credentials:"include",method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){e.status>200?a.setState({err:e.message}):(a.setState({err:null}),d(e),a.props.onSignin())}).catch(function(e){return console.log(e)})},a.handleSubmit=function(e){e.preventDefault(),a.handleLoginRequest(a.state.formData)},a.handleChange=function(e){var t=e.currentTarget,n=Object(f.a)({},a.state.formData);n[t.name]=t.value,a.setState({formData:n})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"pt-5 mt-5"},c.a.createElement("style",null,"body { background: url(https://c.pxhere.com/photos/0f/35/abstract_beans_black_coffee_black_and_white_blur_caffeine_close_up_coffee-938890.jpg!d) no-repeat center center fixed; background-size: cover; }"),c.a.createElement("h1",null,"PLEASE SIGININ"),this.state.err?c.a.createElement("div",{className:"alert alert-danger"}," ",this.state.err," "):"",c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Email "),c.a.createElement("input",{name:"email",className:"form-control",onChange:this.handleChange}),c.a.createElement("label",null,"Password"),c.a.createElement("input",{name:"password",className:"form-control",type:"password",onChange:this.handleChange})),c.a.createElement("button",{type:"submit",class:"btn btn-secondary"},"Login")))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={formData:{email:null,password:null,password_confirmation:null},err:null},a.handleLoginRequest=function(e){var t="".concat(E,"/sign-up");fetch(t,{mode:"cors",credentials:"include",method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({credentials:e})}).then(function(e){return e.json()}).then(function(e){e.error?a.setState({err:e.error}):(d(e),a.props.onSignin())}).catch(function(e){return console.log(e)})},a.handleSubmit=function(e){e.preventDefault(),a.handleLoginRequest(a.state.formData)},a.handleChange=function(e){var t=e.currentTarget,n=Object(f.a)({},a.state.formData);n[t.name]=t.value,a.setState({formData:n})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"pt-5 mt-5"},c.a.createElement("style",null,"body { background: url(https://c.pxhere.com/photos/0f/35/abstract_beans_black_coffee_black_and_white_blur_caffeine_close_up_coffee-938890.jpg!d) no-repeat center center fixed; background-size: cover; }"),c.a.createElement("h1",null,"PLEASE SIGNUP"),this.state.err?c.a.createElement("div",{className:"alert alert-warning"}," ",this.state.err," "):"",c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"email "),c.a.createElement("input",{name:"email",className:"form-control",onChange:this.handleChange}),c.a.createElement("label",null,"Password"),c.a.createElement("input",{name:"password",className:"form-control",type:"password",onChange:this.handleChange}),c.a.createElement("label",null,"Password Confirmation"),c.a.createElement("input",{name:"password_confirmation",className:"form-control",type:"password",onChange:this.handleChange})),c.a.createElement("button",{type:"submit",class:"btn btn-secondary"},"Login")))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={formData:{old:null,new:null},err:null},a.handleLoginRequest=function(e){var t="".concat(E,"/change-password");console.log({email:g().email,passwords:e}),console.log(t),fetch(t,{method:"PATCH",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:g().email,passwords:e})}).then(function(e){return e.json()}).then(function(e){a.props.changeActivePage("home")}).catch(function(e){return console.log(e)})},a.handleSubmit=function(e){e.preventDefault(),a.handleLoginRequest(a.state.formData)},a.handleChange=function(e){var t=e.currentTarget,n=Object(f.a)({},a.state.formData);n[t.name]=t.value,a.setState({formData:n})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"pt-5 mt-5"},c.a.createElement("style",null,"body { background: url(https://c.pxhere.com/photos/0f/35/abstract_beans_black_coffee_black_and_white_blur_caffeine_close_up_coffee-938890.jpg!d) no-repeat center center fixed; background-size: cover; }"),c.a.createElement("h1",null,"Change Password"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Old Password"),c.a.createElement("input",{name:"old",className:"form-control",type:"password",onChange:this.handleChange}),c.a.createElement("label",null,"new Password "),c.a.createElement("input",{name:"new",type:"password",className:"form-control",onChange:this.handleChange})),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login")))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={recipes:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="".concat(E,"/api/recipes/");fetch(t,{mode:"cors",credentials:"include",method:"GET",headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){t.status>200?e.setState({err:t.message}):(e.setState({err:null}),e.setState({recipes:t.recipes}),console.log("data",e.state.recipes))}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.recipes.map(function(t){var a={background:"url("+t.image+")"};return c.a.createElement("div",{className:"col-sm-12 col-md-3 recipe-box m-4",style:a},c.a.createElement("div",{className:"foodpic"},c.a.createElement("div",{onClick:function(){e.props.setActiveRecipe(t)}},c.a.createElement("h1",{className:"description"},t.title," "),c.a.createElement("div",{className:"title"},t.description))))});return c.a.createElement("div",{className:"container-fluid main-page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3 browsemore"},c.a.createElement("button",{className:"b1",onClick:function(){return e.props.changeActivePage("categories")}}," Browse more ")),c.a.createElement("div",{className:"col-9"}," ",c.a.createElement("div",{className:"boxes row flex-row-reverse"}," ",t," "))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 footer"})),c.a.createElement("div",{className:"row footer"},c.a.createElement("div",{className:"col-2 footerlogo"},c.a.createElement("h1",null,"Recipes")),c.a.createElement("div",{className:"col-2 "},c.a.createElement("div",{className:"footer-widget "},c.a.createElement("div",{className:"footer-title"},"Company"),c.a.createElement("ul",{className:"list-unstyled"},c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"About")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"Support")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"Press")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"Legal & Privacy"))))),c.a.createElement("div",{className:"col-2 "},c.a.createElement("div",{className:"footer-widget "},c.a.createElement("div",{className:"footer-title"},"Quick Links"),c.a.createElement("ul",{className:"list-unstyled"},c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"News")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"Contact us")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"FAQ"))))),c.a.createElement("div",{className:"col-4 "},c.a.createElement("div",{className:"footer-widget"},c.a.createElement("div",{className:"footer-title"},"About Us!"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "))),c.a.createElement("div",{className:"col-2 icons"},c.a.createElement("img",{className:"socialIcons",src:"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/62-instagram-128.png"}),c.a.createElement("img",{className:"socialIcons",src:"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/4-youtube_video-128.png"}),c.a.createElement("img",{className:"socialIcons",src:"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/80-facebook-128.png"}),c.a.createElement("img",{className:"socialIcons",src:"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/39-snapchat-128.png"}),c.a.createElement("img",{className:"socialIcons",src:"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/30-tumblr-128.png"}),c.a.createElement("img",{className:"socialIcons",src:"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/48-pinterest-128.png"}),c.a.createElement("img",{className:"socialIcons",src:"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/24-twitter_tweet-128.png"}),c.a.createElement("img",{className:"socialIcons",src:"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-128.png"}),c.a.createElement("img",{className:"socialIcons",src:""}))))}}]),t}(c.a.Component),C=function(){return c.a.createElement("div",null,"Profile")},j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={formData:{title:null,description:null,image:null},err:null},a.handleRequest=function(e){var t="".concat(E,"/api/recipe/").concat(e.id);fetch(t,{mode:"cors",credentials:"include",method:"DELETE",headers:{"Content-type":"application/json"},body:JSON.stringify({recipe:e})}).then(function(e){return e.json()}).then(function(e){e.error?a.setState({err:e.error}):a.props.changeActivePage("home")}).catch(function(e){return console.log(e)})},a.handleSubmit=function(e){e.preventDefault(),a.handleRequest(a.props.recipe)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t={background:"url("+this.props.recipe.image+") no-repeat center",height:"300px"};return c.a.createElement("div",null,c.a.createElement("style",null,"body { background: url(https://www.setaswall.com/wp-content/uploads/2017/06/Blur-Wallpapers-25-1680-x-1050.jpg) no-repeat center center fixed; background-size: cover; }"),c.a.createElement("div",{style:t}),c.a.createElement("h1",null,this.props.recipe.title),c.a.createElement("h3",null,this.props.recipe.description),c.a.createElement("div",null,this.props.recipe.body),c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.props.changeActivePage("edit-recipe")}}," Edit Recipe "),c.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return e.props.changeActivePage("home")}}," Back "),c.a.createElement("button",{className:"btn btn-secondary",onClick:this.handleSubmit}," Delete "))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={formData:{title:null,description:null,image:null},err:null},a.handleRequest=function(e){var t="".concat(E,"/api/recipe");fetch(t,{mode:"cors",credentials:"include",method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({recipe:e})}).then(function(e){return e.json()}).then(function(e){e.error?a.setState({err:e.error}):a.props.changeActivePage("home")}).catch(function(e){return console.log(e)})},a.handleSubmit=function(e){e.preventDefault(),a.handleRequest(a.state.formData)},a.handleChange=function(e){var t=e.currentTarget,n=Object(f.a)({},a.state.formData);n[t.name]=t.value,a.setState({formData:n})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"pt-5 mt-5"},c.a.createElement("style",null,"body { background: url(https://www.wallpaperup.com/uploads/wallpapers/2012/11/02/21173/cd4d565c7a8e5c6f919576940b4caab4.jpg) no-repeat center center fixed; background-size: cover; }"),c.a.createElement("h1",null,"Create Recipe"),this.state.err?c.a.createElement("div",{className:"alert alert-warning"}," ",this.state.err," "):"",c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Title"),c.a.createElement("input",{name:"title",className:"form-control",onChange:this.handleChange}),c.a.createElement("label",null,"Description"),c.a.createElement("input",{name:"description",className:"form-control",type:"description",onChange:this.handleChange}),c.a.createElement("label",null,"Image URL"),c.a.createElement("input",{name:"image",className:"form-control",type:"text",onChange:this.handleChange}),c.a.createElement("label",null,"Body"),c.a.createElement("input",{name:"description",className:"form-control",type:"description",onChange:this.handleChange})),c.a.createElement("button",{type:"",class:"btn btn-secondary"},"Submit")))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={formData:{title:null,description:null,image:null},err:null},a.handleSubmit=function(e){e.preventDefault();var t="".concat(E,"/api/recipe/").concat(a.props.id);console.log(t),console.log(a.state.formData),fetch(t,{mode:"cors",credentials:"include",method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify({recipe:a.state.formData})}).then(function(e){return e.json()}).then(function(e){console.log(e),a.props.changeActivePage("show-recipe"),console.log(a.props.changeActivePage,"s")}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.currentTarget,n=Object(f.a)({},a.state.formData);n[t.name]=t.value,a.setState({formData:n})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"pt-5 mt-5"},c.a.createElement("h1",null,"Edit Recipe"),this.state.err?c.a.createElement("div",{className:"alert alert-warning"}," ",this.state.err," "):"",c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Title "),c.a.createElement("input",{name:"title",className:"form-control",onChange:this.handleChange}),c.a.createElement("label",null,"Description"),c.a.createElement("input",{name:"description",className:"form-control",type:"description",onChange:this.handleChange}),c.a.createElement("label",null,"Image URL"),c.a.createElement("input",{name:"image",className:"form-control",type:"text",onChange:this.handleChange}),c.a.createElement("label",null,"Body"),c.a.createElement("input",{name:"description",className:"form-control",type:"description",onChange:this.handleChange})),c.a.createElement("button",{type:"",className:"btn btn-secondary"},"Submit")))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={user:null,activePage:"home",activeRecipe:null},a.setActiveRecipe=function(e){a.setState({activeRecipe:e}),a.changeActivePage("show-recipe")},a.onCreateRecipe=function(){a.setState({user:g()}),a.changeActivePage("create-recipe")},a.onEditRecipe=function(e,t){a.setState({user:g()}),a.setState({activePage:e,user:t}),a.changeActivePage("edit-recipe")},a.changeActivePage=function(e){a.setState({activePage:e})},a.onSignin=function(){a.setState({user:g()}),a.changeActivePage("home")},a.onSignout=function(){console.log("sign out"),a.setState({user:null}),document.cookie="jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",p("jwt"),localStorage.removeItem("user")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=g();e&&this.setState({user:e})}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.activePage;return c.a.createElement("div",null,c.a.createElement(h,{user:t,changeActivePage:this.changeActivePage,onSignout:this.onSignout}),"home"===a?c.a.createElement(S,{changeActivePage:this.changeActivePage,setActiveRecipe:this.setActiveRecipe}):"",c.a.createElement("div",{className:"container"},"sign-in"===a?c.a.createElement(N,{onSignin:this.onSignin}):"","sign-up"===a?c.a.createElement(y,{onSignin:this.onSignin}):"","change-password"===a?c.a.createElement(w,{changeActivePage:this.changeActivePage}):"","profile"===a?c.a.createElement(C,{changeActivePage:this.changeActivePage}):"","show-recipe"===a?c.a.createElement(j,{recipe:this.state.activeRecipe,changeActivePage:this.changeActivePage}):"","create-recipe"===a?c.a.createElement(O,{changeActivePage:this.changeActivePage}):"","edit-recipe"===a?c.a.createElement(k,{id:this.state.activeRecipe.id,changeActivePage:this.changeActivePage}):""))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19),a(10),a(20),a(21);l.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.808f9e58.chunk.js.map