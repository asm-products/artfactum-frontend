'use strict'

//css  
require('../../styles/user-profile.css');
require('../../styles/color-swatch.css');

var UserProfile = React.createClass({
  
  componentDidMount: function(){
  
    this.handleNavCollapse();
  
  },
  
  handleNavCollapse: function(){
	
	  $('#af-navbar-collapse-1').collapse('hide');  
	
  },
  
  render: function(){
  
    
    return (
	 
      <div className='user-profile'>	  
	 
	    <div className='container fluid'>
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
			
			
			{/*<div className='col-xs-5 col-md-3 col-lg-1'>
		      <div className='top-logo-holder'>
			    <img className='img-responsive' src='images/logo_+_256.png' />
			  </div>
		    </div>
		    <div className='col-xs-6 col-md-3 col-lg-2'>
		      <input className='search' type='search' placeholder='search...'/>
		    </div>
			<div className='col-xs-12 col-md-3 col-lg-5'>
			  <menu>
			    <menuitem># </menuitem>
			    <menuitem>tabs </menuitem>
			    <menuitem>tabs </menuitem>
			    <menuitem>tabs </menuitem>
			  </menu>
			</div>
			<div className='col-xs-12 col-md-3 col-lg-4'>
			  <menu>
			    <menuitem>My Gallery </menuitem>
			    <menuitem>My Marketplace </menuitem>
			    <menuitem>Avatar </menuitem>
			  </menu>
			</div>*/}
			
		  </div>{/end first row/}
	    
		  <div className='row user-profile-head'>
		  
		  
		    <div className='col-xs-12'>
		    
			  <h1 className='text-center vertical-align'>User Profile
			    <div className='photo-circle'>
				  <div className='inner-circle'>
				    <img src='images/camera.png' alt='camera' title='camera' />
				  </div>
				</div>
			  </h1>
		    </div>
		   
		  </div>{/end second row/}
		  
		  <div className='row user-profile-menu'>
		  
		    <div className='col-xs-12'>
			
			  <menu>
			  
			    <menuitem>My Account | </menuitem>
			    <menuitem>About Me | </menuitem>
			    <menuitem>Social | </menuitem>
			    <menuitem>Background | </menuitem>
			    <menuitem>Interests</menuitem>
				
			  </menu>
			
			</div>
			
		  </div>{/end third row/}
			
		  <div className='row user-profile-forms center-block'>
			  
			<div className='col-xs-12'>
			    
			  <h3 id='underline' className=''>My Account</h3>
			  <strong className=''>*required</strong>
	
			</div>
          
		  </div>{/end fourth row/}
		  
		  <div className='row user-profile-forms center-block'>
		  
		    <div className='col-xs-12 col-md-8 col-md-offset-2'>
			  
			  <article>
			  
			    <p>username</p>
			  
			    <div className='input-group'>
			    
				  <input type='text' className='form-control' placeholder='username' />
				  <span className='input-group-addon'>@</span>
			  
                </div>
			
			    <p>Artfactum url</p>
			  
			    <div className='input-group'>
			    
				  <input type='text' className='form-control' placeholder='url' />
				  <span className='input-group-addon'>@</span>
			  
                </div>
				
				<div className='center-block button-wrapper'>
                  <div className='btn-group'>
				    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                      Artist <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Artist</a></li>
                      <li><a href="#">Art Lover</a></li>
                    </ul>
                  </div>
				</div>
			
			  </article>
			
			</div>			
		  
		  </div>{/end fifth row/}
		
		  <div className='row user-profile-forms center-block'>
			  
			<div className='col-xs-12'>
			    
			  <h3 id='underline' className=''>About Me</h3>
			 
			</div>
          
		  </div>{/end sixth row/}
		  
		  <div className='row user-profile-forms center-block'>
		  
		    <div className='col-xs-12 col-md-8 col-md-offset-2'>
			  
			  <article>
			  
			    <p>Living in</p>
			  
			    <div className='input-group'>
			    
				  <input type='text' className='form-control' placeholder='country' />
				  <span className='input-group-addon'>@</span>
			  
                </div>
			
			    <p>Spoken languages</p>
			  
			    <div className='input-group'>
			    
				  <input type='text' className='form-control' placeholder='url' />
				  <span className='input-group-addon'>@</span>
			  
                </div>
				
				<p className='gray'>Suggestions - 
				  <button type='button' className='btn btn-default'>English</button>
				  <button type='button' className='btn btn-default'>Spanish</button>
				</p>
                
			  </article>
			
			</div>			
		  
		  </div>{/end seventh row/}
		
		  <div className='row user-profile-forms center-block'>
			  
			<div className='col-xs-12'>
			    
			  <h3 id='underline' className=''>Social</h3>
			 
			</div>
			
		    <div className='row center-block'>
			
			  <div className='col-xs-12 col-md-4 padding1'>
			
			    <span className='btn-lg btn-primary center-block'>Facebook</span>
			
			  </div>
          
		      <div className='col-xs-12 col-md-4 padding1'>
			
			    <span className='btn-lg btn-primary center-block'>Twitter</span>
			
			  </div>
			
			  <div className='col-xs-12 col-md-4 padding1'>
			
			    <span className='btn-lg btn-primary center-block'>Google+</span>
			
			  </div>
			
		    </div>{/end sub-row/}
		  
		  </div>{/end eighth row/}
		
		  <div className='row user-profile-forms center-block'>
			  
			<div className='col-xs-12'>
			    
			  <h3 id='underline' className=''>Artistic Background</h3>
			 
			</div>
          
		  </div>{/end ninth row/}
		  
		  <div className='row user-profile-forms center-block'>
		  
		    <div className='col-xs-12 col-md-8 col-md-offset-2'>
			  
			  <article>
			  
			    <p>Artistic Disciplines</p>
			  
			    <div className='input-group'>
			    
				  <input type='text' className='form-control' placeholder='country' />
			  
                </div>
				
				<p className='gray'>Suggestions - 
				  <button type='button' className='btn btn-default'>Photography</button>
				  <button type='button' className='btn btn-default'>Painting</button>
				</p>
			
			    <p>Artistic CV</p>
			    
			    <div className='input-group'>
			      
				  <input type="text" className="form-control" />
				  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Browse</button>
                  </span>
                  
                </div>
				
			  </article>
			
			</div>			
		  
		  </div>{/end tenth row/}
		
		  <div className='row user-profile-forms center-block'> 
			  
	 	    <div className='col-xs-12'> 
			    
			  <h3 id='underline' className= ''>
				Personal Interests
		      </h3>
			</div>
			  
		  </div> {/end 11th row/} 
		  
		  <div className='row user-profile-forms center-block' > 
		  
		    <div className='col-xs-12 col-md-8 col-md-offset-4' > 
			  
			  <article>
			  
			    <p>Favorite art styles</p>
			  
			    <div className='input-group' > 
			    
				  <input type='text' className='form-control' placeholder='username' /> 
			      
				  <p className='gray'>Suggestions - 
				    <button type='button' className='btn btn-default'>English</button>
				    <button type='button' className='btn btn-default'>Spanish</button>
				  </p>
				  
				</div> 
			
			    <p>Featured interests</p> 
			  
			    <div className='input-group' >
			    
				  <input type='text' className='form-control' placeholder='url' /> 
			      
				  <p className='gray'>Suggestions - 
				    <button type='button' className='btn btn-default'>English</button>
				    <button type='button' className='btn btn-default'>Spanish</button>
				  </p>
                
				</div>
				 
				
				<p>Influences</p> 
			  
				<div className='input-group'> 
			    
				  <input type='text' className='form-control' placeholder='influences' /> 
			     
				  <p className='gray'>Suggestions - 
				    <button type='button' className='btn btn-default'>Surrealism</button>
				    <button type='button' className='btn btn-default'>Cubism</button>
				  </p>
				
				</div> 
				
				<div className='center-block button-wrapper'> 
                  <div className='btn-group'> 
				    
					<button type='button' className='btn btn-active' > 
                      Save
                    </button>
                    
                  </div>
				
				</div>
			
			  </article>
			
			</div>			
		  
		  </div> {/end 12th row/} 
		
		  <div className='row user-profile-bottom'> 
		  
		    <div className='col-xs-6 col-xs-offset-3'> 
		      
			  <div className='user-profile-logo-bottom center-block' > 
			    <img className='img-responsive padding1' src='images/Logo_AF_vector_white.png' alt='artfactum logo' title='artfactum logo' />
		      </div>
			  
			</div>
			
			<div className='col-xs-10 col-xs-offset-1 padding1' > 
			
		      <span>About | </span><span>Legal | </span><span>FAQ | </span><span>Developers | </span> 
			  <span>Ads | </span> <span>Contact</span>
		  
		    </div>
			
			<div className='col-xs-10 col-xs-offset-1 padding1' >
			
		      <span>Made with love on assembly</span>
		  
		    </div>
		  
		  </div> {/end 13th row/}
		
		</div>
		
	  </div>
	
	
	
	);
	
  }
  
});


module.exports = UserProfile;