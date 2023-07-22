const express =require('express')
const application =express()
const router =express.Router()


router.get('/', (request, response) => {
    const courses = [
        "PHP",
        "Angular",
        "React",
        "Node.js",
    ]
    response.status(200).render('index',{
        docTitle: "Welcome to sampleCode",
        courses,
        path:'index',
        courseExists: courses.length > 0,
        pageIndex: true
    });
})
router.get('/about', (request, response) => {
    const courses = [
        "PHP",
        "Angular",
        "React",
        "Node.js",
    ]
    response.status(200).render('about',{
        active: 'about',
        docTitle:'',
        courses,
        path:'about',
        courseExists: courses.length > 0,
        pageAbout: true
    })
})

router.use((request, response, next)=> {
    response.status(200).render('404', {
        docTitle: '404 Page not found',
        path:'404',
        page404: true
    })
})

application.use(router);

application.listen(8000,() => {
    console.log('Running on 8000')
})