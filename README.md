# EJSPress!

**Used in this boilerplate**
- [x] Express JS 4+
- [x] EJS (as Template Engine)
- [x] CORS
- [x] Native Body/Query Parser
- [x] MVC friendly folder structure  


# Get Started

**Step 1:**

Clone project from GitHub

```bash
git clone https://github.com/imjafran/express-boilerplate.git ./
```

**Step 2:**

Install Dependencies

```bash
npm install
```

# Folder Structure 

<code>
<pre>
app/
    bin/            # Binary files (ie: CLI)
    config/         # Connection and other configs etc
    controller/     # Controller classes
    helper/         # Other helper functions
    model/          # Model classes
    routes/ 
        api.js      # API routes 
        web.js      # Web routes
    boot.js         # Boot file, loads always
public/             # Open for all
    css/
    images/
    js/
views/              # View templates
    error/
        404.ejs     # Fallback template
    home.ejs        # Example template
.env
app.js              # Main app file
package-lock.json   
package.json        # Node Packages
README.md           # Documentation
</pre>
</code>

# Environments 

`DELIMITER`

DELIMITER is the modifier of EJS Template Delimiter. 

Default is `%`

# Command Line 

I'm planning to add CLI support for this boilerplate. 


## Publisher 
Publisher [Jafran Hasan](https://fb.com/IamJafran)