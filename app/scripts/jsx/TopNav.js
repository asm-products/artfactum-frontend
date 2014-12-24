'use strict';


var TopNav = React.createClass({

  render: function(){
  
    return (
	
	  <div className='row top-nav'>
		<nav className='navbar navbar-default' role='navigation'>
		  <div className='navbar-header'>
			<button type='button' className='navbar-toggle' data-toggle='collapse'
			  data-target='#af-navbar-collapse-1'>
			  <span className='sr-only'>Navigate</span>
			  <span className='icon-bar'></span>
			  <span className='icon-bar'></span>
			  <span className='icon-bar'></span>
			</button>
			<img className='top-logo-holder' src='images/logo_+_256.png' />
		  </div>
		  <div className='collaspe navbar-collapse' id='af-navbar-collapse-1'>
			<ul className='nav navbar-nav search-wrapper'>
			  <li className='active search-box'>
				<form className='navbar-form navar-left' role='search'>

				  <div className='form-group'>
					<div className='input-group'>
					  <input type='text' className='search form-control' placeholder='Search' />
					  <span className="input-group-addon glyphicon glyphicon-search"></span>
					</div>
				  </div>
				 
				</form>
			  </li>
			  
			  <li className='dropdown'>
				<a href="#" className="top-drop dropdown-toggle" data-toggle="dropdown">
				  <span className="glyphicon glyphicon-align-justify"></span> 
				</a>
				<ul className="dropdown-menu">
				  <li><a href="#">Action</a></li>
				  <li><a href="#">Another action</a></li>
				  <li><a href="#">Something</a></li>
				  <li className="divider"></li>
				  <li><a href="#">Separated link</a></li>
				  <li className="divider"></li>
				  <li><a href="#">One more separated </a></li>
				</ul>
			  </li>
			  <li><a className='tabs'href='#'>Browse</a></li>
			  <li><a className='tabs'href='#'>Collections</a></li>
			  <li><a className='tabs'href='#'>Marketplace</a></li>
			</ul>
			
			<ul className="nav navbar-nav navbar-right">
			
			  <li><a href="#">My Gallery</a></li>
			  <li><a href="#">My Marketplace</a></li>
			  <li className="dropdown">
				<a href="#" className="top-drop dropdown-toggle" data-toggle="dropdown">
				  <span className="glyphicon glyphicon-search"></span> 
				  <b className="caret"></b>
				</a>
				<ul className="dropdown-menu">
				  <li><a href="#">Action</a></li>
				  <li><a href="#">Another action</a></li>
				  <li><a href="#">Something else here</a></li>
				  <li className="divider"></li>
				  <li><a href="#">Separated link</a></li>
				</ul>
			  </li>
			</ul>
		  </div>{/*-- /.navbar-collapse --*/}
		
		</nav>
		
	  </div>
	
	);
  
  }

});

module.exports = TopNav;