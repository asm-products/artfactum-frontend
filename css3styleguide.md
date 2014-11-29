@@ -0,0 +1,99 @@
#Artfactum Styleguides


##Readability

+ Max width is 80 characters.
+ Use 4 space indent.
+ Opening bracket ({) goes on the same line as the selector.
+ First declaration on a new line after opening bracket.
+ Last declaration ends with a semicolon (;).
+ Closing bracket (}) goes on a new line.
+ If a selector has only one rule it can be in a single line.

##Naming

Use single hyphen for your space separated class names.

    .main-nav {}

    //NOT
    .mainNav {}
    .main_nav {}


If the class gets more complicated use BEM Naming convention.

    .block__element--modifier

[Read more](https://bem.info/method/definitions/ "BEM naming")


To keep our CSS sane and manageable for a team make your classes reusable, 
when creating a class think about where it can be reused again and name it according
to its purpose and not it's place.

    //Avoid this, the name makes it hard to reuse at other place
    .about-us__title {
        padding: 14px 0;
        margin-bottom: 28px; 
    }
    
    // Now it can be reused for all sections not just on the about us part
    .section__title {
        padding: 14px 0;
        margin-bottom: 28px;
    }


In order to make your classes reusable:

+ Try to avoid nesting.
+ Never use IDs or HTML elements for styling purposes.
+ Separate skin from structure.


Javascript hooks should be named like this

    .js-class-name

Just use these classes for JavaScript, don't apply any styling to them.

##Nesting

Try to avoid nesting, you don't want to deal with specificity when reusing classes.
With Sass nesting happens pretty fast so pay attention.


##Comments

Trying to read CSS code that you didn't wrote is time intensive so comment your 
CSS heavily. 

    //Single line comment

    /*
     * This is a multi line comment in CSS
     * It can give a more in depth look at a certain section 
     */


You don't have to commit trivial things like

    a { color: red;}

But as soon as a class affects another class or it extends in any other .scss a
comment is needed. 

---

######Credit

[Pieter Beulque](https://gist.github.com/pieterbeulque/64721304dc30529a0e32, Pierter Beulque CSS guidelines),
[cssguidelin.es](http://cssguidelin.es/, CSS Guidelines)
 No newline at end of file
