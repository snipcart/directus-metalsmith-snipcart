var app = new Vue({
  el: '#app',
  data: {
    category: 'men'
  },
  mounted: function(){
    this.toggleScroll();
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
    toggleScroll: function(){
      $.scrollify({
        section : ".section",
        setHeights: false
      });
    },
    updateCategory: function(value){
      this.category = value;
      this.toggleScroll();
    }
  }
});
