const beers =[]
const addBeer= function(name,category,list){
    let newbeer= {
        name:name, 
        category:category,
        list:list}
    beers.push(newbeer)
} 
  $('.post-beer').on("click", function(){ 
     let val= $(".beer-input").val()
     let val2= $(".category-input").val()
     let valList=$("#list").val()
    addBeer(val, val2, valList)
    renderBeers()
  })
  const renderBeers= function(){
      $('ul').empty();
      for(let i=0; i<beers.length; i++){
          $('.beers-list').append('<li>' + beers[i].category + " " + beers[i].name + beers[i].list + "  " +'</li>')
      }
  }

