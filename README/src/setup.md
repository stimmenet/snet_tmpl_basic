# SNET FE Baseline 2.0
> A new frontend development workflow built on node.js, grunt and sass

## One-Time Installation

To be able to get the full benefits of this workflow, you first need to install some software. But don't worry, you only have to do this once for every computer. Ater that, it gets easier. The following tools are required to use the new frontend baseline:

 - Ruby
 - Sass
 - node.js hallo

Keep in mind that git is considered obligatory at this point. If you do not have it yet, [go get it][1].

First, we need to install Ruby. How you can install Ruby on different platforms can be read in [this guide][2]. You can check if you have Ruby installed by typing `ruby -v` in your terminal window. If you get a Ruby version number, everything is fine.

After that, you can install Sass, which is a Gem for Ruby. Type

> `gem install sass`

into your terminal window, Sass will be installed automatically. After the installation process, you can type `sass -v` to get the Sass version number and see if the installation was successful. You will need Sass version of `3.3` or higher to make use of CSS Source Maps, but since Sass is currently at version 3.3.7, there won't be a problem here.

Last, you need to have node.js installed. Get your installer from the official [website][3] and follow the instructions to get node running for your system. Again, you can check with `node -v` if everything went smoothly.

That's it, now you can use the new frontend baseline.

## Setting up a new Project

There are two git repositories for using the new workflow. One is a complete TYPO3 Template Extension based on the established `snet_tmpl_basic` and as such, is a git branch of said extension. Type

> `git clone git@biergit.intern.stimme.net:snet_tmpl_basic.git -b baseline_v2`

to clone a copy of the extension branch to the given folder. The other option is for creating pure HTML and CSS without any CMS specific files and configurations. Type

> `YET TO COME`

to clone this repository. The following instructions work for either repositories.

Now, navigate inside the repository you just cloned and call

> `npm install`

This command will automatically install all needed plugins for node.js, which are listed in file `package.json`. The following dependencies are defined at this moment:

* `grunt`, for automated tasks (see below)
* `grunt-contrib-watch`, to watch and react, if a file changes
* `grunt-contrib-sass`, to convert .scss files to .css files
* `grunt-contrib-cssmin`, to minimize css files
* `grunt-autoprefixer`, to add vendor prefixescss to css attributes
* `grunt-markdown`, to convert markdown files to html files

To make grunt start watching your project, just type

> `grunt`

in your terminal window while being in the root directory of your project. Now, whenever you change a `.scss` file within the `Resources/Public/Styles/sass/`, grunt recognizes this, (re-) compiles your `.scss` files to `.css` files and automatically adds browser prefixes if neccessary. Additionally, all .md files within the `README/src/` folder will be converted to .html files.


  [1]: http://git-scm.com/downloads
  [2]: https://www.ruby-lang.org/en/installation/
  [3]: http://nodejs.org/