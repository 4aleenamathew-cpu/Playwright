
const {devices}=require('@playwright/test')
const config=(
  {
    testDir :'./tests',
    retries:1,
    workers:3,
    timeout :40*1000,
    expect:{
      timeout:30*1000,// timeout for assertion failure
    },
    reporter:'html',
    projects:[
      {
        name:'safari',
    use:{
      browserName:"webkit",
      headless:true,
      screenshot:'on',
      trace:'on',
      video:'on'
    }
  },
  {
    name:'chrome',
     use:{
      browserName:"chromium",
      headless:false,
      screenshot:'off',
      trace:'on',
      video:'on',
      //viewpoint:{width:720,height:720},
      ...devices['iPhone 11'],
        ignoreHttpsErrors:true,//ssl error,
        Permissions:['geolocation']

      
    }
  }
  ]
  }

)
module.exports=config