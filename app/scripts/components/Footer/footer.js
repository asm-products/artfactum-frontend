'use strict';

var Router = window.ReactRouter,
    Route = Router.Route,
    Routes = Router.Routes,
	Link = Router.Link,
    RouteHandler = Router.RouteHandler;
	
require('./footer.css');

var Footer = React.createClass({

  render: function(){
    return (  
      <div className='row af-footer'>
        <div className='col-xs-12'> 
		      
		  <div className='logo center-block' > 
		    <img className='img-responsive padding1' src='images/Logo_AF_vector_white.png' alt='artfactum logo' title='artfactum logo' />
		  </div>
		  
	    </div>

	    <div className='col-xs-12 padding1' > 
		  <nav className="navbar navbar-inverse breadcrumbs justified" role="navigation">
			<div className='footerpage'>
			  <Link className='footerpages' to='about'><a href='#about'>About</a></Link><span> | </span>
			  <Link className='footerpages' to='about'><a href='#about'>Legal</a></Link><span> | </span>
			  <Link className='footerpages' to='about'><a href='#about'>Faq</a></Link><span> | </span>
			  <Link className='footerpages' to='about'><a href='#about'>Developers</a></Link><span> | </span>
			  <Link className='footerpages' to='about'><a href='#about'>Ads</a></Link><span> | </span>
			  <Link className='footerpages' to='about'><a href='#about'>Contact</a></Link>
			</div>
		  </nav>
		  <p>Made with love on assembly</p>
		</div>
      
      </div>	  
	
	);

  }
  
});

module.exports = Footer;