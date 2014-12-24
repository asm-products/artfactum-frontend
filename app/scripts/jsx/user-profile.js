'use strict'


var TopNav = React.createFactory(require('./TopNav'));

var store = require('./../stores/store.js');
var Dispatcher = require('./../dispatcher.js');
var Actions = require('./../actions/actions.js');


//css  
require('../../styles/user-profile.css');
require('../../styles/color-swatch.css');
 

var UserProfile = React.createClass({
  
  getInitialState: function(){
  
    return { username: 'user profile'} 
  
  },
  
  componentDidMount: function(){
  
    this.handleNavCollapse();
	var self = this;
	
	store.onChange(function () {
    
	// End of data cycle.
    // document.getElementById('result').innerText = store.store.data;
      
	  self.setState({username: store.store.data});    
	
    });
  
  },
  
  handleNavCollapse: function(){
	
	$('#af-navbar-collapse-1').collapse('hide');  
	
  },
  
  render: function(){
  
    
    return (
	 
      <div className='user-profile'>	  
	 
	    <div className='container fluid'>
	      
		  <TopNav></TopNav>{/*end first row*/}
		 
		  <div className='row user-profile-head'>
		  
		  
		    <div className='col-xs-12'>
		    
			  <h1 onClick={this.handleButtonClick} className='text-center vertical-align'>
			  
			    {this.state.username}
			  
			    <div className='photo-circle'>
				  <div className='inner-circle'>
				    <img src='images/camera.png' alt='camera' title='camera' />
				  </div>
				</div>
			  </h1>
		    </div>
		   
		  </div>{/*end second row*/}
		  
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
			
		  </div>{/*end third row*/}
			
		  <div className='row user-profile-forms center-block'>
			  
			<div className='col-xs-12'>
			    
			  <h3 id='underline' className=''>My Account</h3>
			  <strong className=''>*required</strong>
	
			</div>
          
		  </div>{/*end fourth row*/}
		  
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
		  
		  </div>{/*end fifth row*/}
		
		  <div className='row user-profile-forms center-block'>
			  
			<div className='col-xs-12'>
			    
			  <h3 id='underline' className=''>About Me</h3>
			 
			</div>
          
		  </div>{/*end sixth row*/}
		  
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
		  
		  </div>{/*end seventh row*/}
		
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
			
		    </div>{/*end sub-row*/}
		  
		  </div>{/*end eighth row*/}
		
		  <div className='row user-profile-forms center-block'>
			  
			<div className='col-xs-12'>
			    
			  <h3 id='underline' className=''>Artistic Background</h3>
			 
			</div>
          
		  </div>{/*end ninth row*/}
		  
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
		  
		  </div>{/*end tenth row*/}
		
		  <div className='row user-profile-forms center-block'> 
			  
	 	    <div className='col-xs-12'> 
			    
			  <h3 id='underline' className= ''>
				Personal Interests
		      </h3>
			</div>
			  
		  </div> {/*end 11th row*/} 
		  
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
		  
		  </div> {/*end 12th row*/} 
		
		  <div className='row user-profile-bottom'> 
		  
		    <div className='col-xs-12'> 
		      
			  <div className='user-profile-logo-bottom center-block' > 
			    <img className='img-responsive padding1' src='images/Logo_AF_vector_white.png' alt='artfactum logo' title='artfactum logo' />
		      </div>
			  
			</div>
			
			<div className='col-xs-10 col-xs-offset-1 padding1' > 
			
		      <span>About | </span><span>Legal | </span><span>FAQ | </span><span>Developers | </span> 
			  <span>Ads | </span> <span>Contact</span>
		  
		    </div>
			
			<div className='col-xs-10 col-xs-offset-1 padding1'>
			
		      <span>Made with love on assembly</span>
		  
		    </div>
		  
		  </div> {/*end 13th row*/}
		
		</div>
		
	  </div>
		
	);
	
  },
  
  handleButtonClick: function(){
  
    Actions.setData(Math.random());
  
  }
  
});



module.exports = UserProfile;