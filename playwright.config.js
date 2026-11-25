const config=(
  {
    testDir :'./tests',
    timeout :40*1000,
    expect:{
      timeout:30*1000,// timeout for assertion failure
    },
    reporter:'html',
    use:{
      browserName:"chromium",
      headless:false,
      screenshot:'on',
      trace:'on',
      video:'on'
    },
  }
)
module.exports=config