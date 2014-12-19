var Footer = React.createClass({displayName: 'Footer',
render: function(){

  return (
 
	React.createElement("footer", {className: "container"}, 
	  React.createElement("div", {className: "row"}, 
		React.createElement("ul", {className: "breadcrumb"}, 
		  React.createElement("li", null, React.createElement("a", {href: "#"}, "About us")), 
		  React.createElement("li", null, React.createElement("a", {href: "#"}, "Legal")), 
		  React.createElement("li", null, React.createElement("a", {href: "#"}, "F.A.Q.")), 
		  React.createElement("li", null, React.createElement("a", {href: "#"}, "Developers")), 
		  React.createElement("li", null, React.createElement("a", {href: "#"}, "Ads/Sponsorship")), 
		  React.createElement("li", null, React.createElement("a", {href: "#"}, "Contact"))
		)
	  )
	)
 
  );


}
});

module.exports = Footer;