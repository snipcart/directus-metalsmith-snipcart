var app = new Vue({
  el: '#app',
  data: {
    category: 'men'
  },
  methods: {
    shop: function(){
      window.location.href = '/' + this.category + '-products.html';
    },
    isMen: function(){
      return this.category == 'men';
    },
    isWomen: function(){
      return !this.isMen();
    },
    updateCategory: function(value){
      this.category = value;

      $.scrollify({
        section : ".section",
      });
    }
  }
});

$.scrollify({
  section : ".section",
});
