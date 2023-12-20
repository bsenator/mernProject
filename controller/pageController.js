const getIndexPage =(req, res) => {

    // console.log('REQUEST USER:::', req.user);
    
    res.render('index',{
    link: "index",
    });
};

const getAboutPage =(req,res) => {
    res.render('about', {
    link: 'about',
    });
};

const getRegisterPage =(req,res) => {
    res.render('register', {
    link: 'register',
    });
};

const getLogoutPage =(req,res) => {
    res.cookie('jwt', '' , {
        maxAge: 1,
    });
    res.redirect('/');
};

const getLoginPage =(req,res) => {
    res.render('login', {
    link: 'login',
    });
};

export {getIndexPage,getAboutPage,getRegisterPage,getLoginPage, getLogoutPage};