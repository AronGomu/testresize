var Blog = Backbone.Model.extend({
	defaults: {
		author: "",
		title: "",
		url: "",
		action: "",
	}
})

let blogList = []
for (let i = 0; i < 10; i++) {
	blogList.push(new Blog())
}

var Blogs = Backbone.Collection.extend({})


var blogs = new Blogs(blogList)

console.log(blogs.toJSON())

// var BlogView = Backbone.View.extend({
// 	model: new logs,
// 	tagName: 'tr',
// 	initialize: function() {
// 		this.template = _.template(
// 			$('blogs-list-template').html()
// 		)
// 	},
// 	render: function() {
// 		this.$el.html(
// 			this.template(
// 				{this.model.toJSON()}
// 			)
// 		)
// 	}
// })
//
// var BlogsView = Backbone.View.extend({
// 	model: blogs,
// 	el: $('.blogs-list'),
// 	initialize: function({
// 		this.model.on('add', this.render(), this)
// 	}),
// 	render: function() {
// 		var self = this
// 		this.$el.html('')
// 		_.each(this.model.toArray(), function(blog) {
// 			self.$el.append((new BlogView({model:blog})).render().$el);
// 		})
// 	}
// })
//

var backgrid = new Backgrid.extend


// Add sizeable columns
var sizeAbleCol = new Backgrid.Extension.sizeAbleColumns({
  collection: blogs,
  columns: columns
});
$backgridContainer.find('thead').before(sizeAbleCol.render().el);
 
// Add resize handlers
var sizeHandler = new Backgrid.Extension.sizeAbleColumnsHandlers({
  sizeAbleColumns: sizeAbleCol,
  grid: pageableGrid,
  saveModelWidth: true
});
$backgridContainer.find('thead').before(sizeHandler.render().el);
 
// Listen to resize events
columns.on('resize', function(columnModel, newWidth, oldWidth) {
  console.log('Resize event on column; name, model, new and old width: ', columnModel.get("name"), columnModel, newWidth, oldWidth);
});
