var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

function app3visibility(){
 if(app3.seen)
  {app3.seen=false;}
 
 console.log("app3visibility executed"); 
}

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'whatever'
  },
  methods: {
    changeColor: function () {
      var color=document.getElementById("app-5").style.color;
      //color-=1024;
      console.log("color of text "+color);
      if(color!="green")
       {document.getElementById("app-5").style.color="green";}
      else 
       {document.getElementById("app-5").style.color="blue";} 
    }
  }
})