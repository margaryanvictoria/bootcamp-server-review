-- Taken from Kevin's "step.txt" in the "1-3-Review" folder --

Step 1: Create a folder that will contain all of your project's modules and code. (1-3 Review will server this purpose)
Step 2: [Optional] Create a file that will server as the /entry/ point for your server.
Step 3: We must initialize our directory as a Node project. You can do this by running the following command.
    npm init - This will start a series of questions that describe your Node.js project.
    To skip this series of questions and just use the defaults (you can edit the package.json at a later time) run this...
    npm init -y - This will skip all of the questions and use the default values.
Step 4: [Optional] If you are using Git for version control or SVN create an ignore file in order to prevent node-modules folder
from being pushed to the remote repository.
    1.) Create a file named .gitignore (THIS IS NOT A TEXT FILE)
        If you are on a UNIX/POISIX complient Shell run
        touch .gitignore
        This will create the file. You can open it in your text editor of choice. If you are on a UNIX machine,
        files that start with a . are invisable. So, in order to see the file look up on your OS how to view them
        or use VIM or Emacs.
Step 5: Install any dependencies you require using npm for your Node.js project.
    Recommondations: express, joi, mysql, multer
    To install the packages run
    npm install NAME_OF_THE_PACKAGE_IN_LOWER_CASE
    Example:
    npm install express
    Example 2:
    npm install express joi
    Example 3:
    npm i express joi mysql multer


How to initialize a shared Node.js project (i.e. you cloned an existing project)
    npm install
    or
    npm i

To run/start your Node.js server. Use
    node name_of_entry_point_js_file
    Example:
    Give app.js run
    node app.js

Congrats you are here...